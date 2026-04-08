import { useState } from 'react'
import {
  type DocumentActionComponent,
  type DocumentActionProps,
  useClient,
} from 'sanity'
import { extractPlainText } from './extractText'

const AUDIT_ENDPOINT = '/.netlify/functions/ai-audit'
const PASS_THRESHOLD = 4

/**
 * Custom Sanity Studio document action: "Test for AI Detection".
 *
 * Pulls the post body text, POSTs it to the Netlify Function that runs
 * the headless undetectableai.pro check, then writes the score back to
 * the document under the `aiAudit` field. The publish action is gated on
 * `aiAudit.status === 'passed'` (configured in sanity.config.ts).
 *
 * Editor flow:
 *   1. Write/edit body in the Studio
 *   2. Click "Test for AI Detection"
 *   3. Wait ~15s for the audit to return
 *   4. Score appears in the AI Audit panel + alert toast
 *   5. If <= PASS_THRESHOLD%, the Publish button unlocks
 */
export const aiAuditAction: DocumentActionComponent = (
  props: DocumentActionProps,
) => {
  const [running, setRunning] = useState(false)
  const client = useClient({ apiVersion: '2024-01-01' })

  if (props.type !== 'post') return null

  return {
    label: running ? 'Auditing…' : '🧪 Test for AI Detection',
    disabled: running || !!props.liveEdit,
    tone: 'primary',
    onHandle: async () => {
      setRunning(true)
      try {
        const doc = (props.draft || props.published) as
          | { body?: unknown }
          | null
        if (!doc) {
          window.alert('Save the post as a draft first, then run the audit.')
          return
        }

        const text = extractPlainText(doc.body)
        if (text.length < 50) {
          window.alert(
            'The post body must contain at least 50 characters of plain text to audit.',
          )
          return
        }

        const res = await fetch(AUDIT_ENDPOINT, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ text }),
        })

        if (!res.ok) {
          throw new Error(
            `Audit endpoint failed: ${res.status} ${await res.text()}`,
          )
        }

        const { score, passed } = (await res.json()) as {
          score: number
          passed: boolean
        }

        // Strip the drafts.* prefix so patches land on the right doc id.
        const docId = props.id.replace(/^drafts\./, '')
        await client
          .patch(`drafts.${docId}`)
          .set({
            aiAudit: {
              score,
              status: passed ? 'passed' : 'failed',
              lastChecked: new Date().toISOString(),
            },
          })
          .commit({ autoGenerateArrayKeys: true })

        window.alert(
          `AI Detection Score: ${score}%\n\n${
            passed
              ? `✅ PASSED (≤ ${PASS_THRESHOLD}%) — safe to publish`
              : `❌ FAILED (> ${PASS_THRESHOLD}%) — rewrite to be more human, then re-test`
          }`,
        )
      } catch (err) {
        console.error('[aiAuditAction]', err)
        window.alert(`Audit error: ${(err as Error).message}`)
      } finally {
        setRunning(false)
        props.onComplete()
      }
    },
  }
}
