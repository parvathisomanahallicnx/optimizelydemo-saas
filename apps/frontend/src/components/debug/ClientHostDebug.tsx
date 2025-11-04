"use client"
import { useEffect } from 'react'

export default function ClientHostDebug(): null {
  useEffect(() => {
    try {
      const host = window.location.host
      const href = window.location.href
      const publicSite = process.env.NEXT_PUBLIC_SITE_DOMAIN ?? null
      const enabled = process.env.NEXT_PUBLIC_DEBUG_HOST === 'true'
      if (!enabled) return
      // eslint-disable-next-line no-console
      console.log('CLIENT DEBUG [Host]', { host, href, NEXT_PUBLIC_SITE_DOMAIN: publicSite })
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('CLIENT DEBUG [error]', e)
    }
  }, [])

  return null
}
