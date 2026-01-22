import { NextRequest, NextResponse } from 'next/server'

export const config = {
  // Avoid matching for static files, API routes, etc.
  matcher: [
    {
      source:
        '/((?!auth|_next/static|_next/image|images|assets|manifest.json|favicon.ico|sw.js|web-app-manifest-*|sitemap.*\\.xml|robots.txt|manifest.json|site.webmanifest).*)',
      missing: [{ type: 'header', key: 'x-proxy-ignore' }],
    },
  ],
}

export async function proxy(req: NextRequest) {
  // Ignore path with "icon" or "chrome"
  if (req.nextUrl.pathname.indexOf('icon') > -1 || req.nextUrl.pathname.indexOf('chrome') > -1) {
    return NextResponse.next()
  }
  const headers = new Headers(req.headers)
  const response = NextResponse.next({ request: { headers } })
  // If need to proxy api requests
  if (req.nextUrl.pathname.startsWith('/api/')) {
  }

  return response
}
