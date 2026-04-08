/**
 * Extract plain text from PortableText body blocks for AI-detection scoring.
 * Headings, paragraphs, list items — anything with `children` text spans —
 * become a single newline-separated string. Images, embeds, and other custom
 * block types are ignored.
 */
export function extractPlainText(blocks: unknown): string {
  if (!Array.isArray(blocks)) return ''
  return blocks
    .filter(
      (b: any): b is { _type: 'block'; children: Array<{ text?: string }> } =>
        b && b._type === 'block' && Array.isArray(b.children),
    )
    .map((b) => b.children.map((c) => c.text || '').join(''))
    .filter((line) => line.trim().length > 0)
    .join('\n\n')
    .trim()
}
