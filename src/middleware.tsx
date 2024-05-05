import { NextRequest, NextResponse } from "next/server";

export function middleware (req: NextRequest) {
  const cookie = req.cookies.get('authToken')?.value

  if( cookie ) {
    return NextResponse.next()
  } else {
    return NextResponse.redirect(new URL('/', req.url))
  }
}

export const config = {
  matcher: '/user/:path*',
}