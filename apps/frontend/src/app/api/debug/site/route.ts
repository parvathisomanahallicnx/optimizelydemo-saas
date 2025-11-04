import { NextResponse } from 'next/server'
import { createClient } from '@remkoj/optimizely-graph-client'
import { getSdk } from '@/gql'
import { ServerContext } from '@remkoj/optimizely-cms-react/rsc'

export async function GET(req: Request) {
  if (process.env.DEBUG_SITE_API !== 'true') {
    return NextResponse.json({ error: 'disabled' }, { status: 403 })
  }

  try {
    // create client and server context similar to layout
    const client = createClient(undefined, undefined, { nextJsFetchDirectives: true, cache: true })
    const ctx = new ServerContext({ locale: 'en', factory: undefined as any, client })

    const hostHeader = req.headers.get('host')
    const frontendDomain = (client as any)?.siteInfo?.frontendDomain ?? null

    const sdk = getSdk(client)
    const header = await sdk.getHeaderData({ domain: frontendDomain ?? hostHeader })
    const appIdentifiers = header?.appLayout?.items?.map(i => i.appIdentifiers) ?? null

    return NextResponse.json({ hostHeader, frontendDomain, appIdentifiers })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
