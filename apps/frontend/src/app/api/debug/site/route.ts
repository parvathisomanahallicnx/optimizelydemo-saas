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
    const appIdentifiers = header?.appLayout?.items?.map(i => i?.appIdentifiers ?? null) ?? null

    // if a path query param is provided, call getContentByPath to return items and their _metadata.url
    const url = new URL(req.url)
    const pathParam = url.searchParams.get('path')
    if (pathParam) {
      // normalize path into array as expected by getContentByPath
      const paths = [pathParam.startsWith('/') ? pathParam : `/${pathParam}`]
  // allow overriding the site id via query param for testing
  const siteIdOverride = url.searchParams.get('siteId')
  const anySite = url.searchParams.get('anySite') === 'true'
  const siteIdToUse = siteIdOverride ?? frontendDomain ?? hostHeader
  const content = anySite ? await sdk.getContentByPath({ path: paths }) : await sdk.getContentByPath({ path: paths, siteId: siteIdToUse })
      const items = content?.content?.items ?? []
      const metadata = Array.isArray(items) ? items.map((it: any) => ({ key: it?._metadata?.key ?? null, displayName: it?._metadata?.displayName ?? null, url: it?._metadata?.url ?? null })) : []
  return NextResponse.json({ hostHeader, frontendDomain, appIdentifiers, path: paths, siteIdUsed: siteIdToUse, anySite: anySite, items: metadata })
    }

    return NextResponse.json({ hostHeader, frontendDomain, appIdentifiers })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
