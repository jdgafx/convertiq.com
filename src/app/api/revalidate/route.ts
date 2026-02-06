import { revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<{
      _type: string
      slug?: string | { current: string }
    }>(req, process.env.SANITY_WEBHOOK_SECRET)

    if (!isValidSignature) {
      return new NextResponse('Invalid signature', { status: 401 })
    }

    if (!body?._type) {
      return new NextResponse('Bad Request', { status: 400 })
    }

    // Revalidate the specific type (e.g., 'post')
    revalidateTag(body._type)
    
    // Also revalidate the slug if it's a post
    if (body._type === 'post' && body.slug) {
        const slug = typeof body.slug === 'string' ? body.slug : body.slug.current
        revalidateTag(`post:${slug}`)
    }

    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      body,
    })
  } catch (err: any) {
    console.error(err)
    return new NextResponse(err.message, { status: 500 })
  }
}
