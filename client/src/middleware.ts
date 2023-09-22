import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
 
  const hasSession = request.cookies.has('session') // => true
  if(hasSession && (request.nextUrl.pathname.startsWith('/auth') ||request.nextUrl.pathname.startsWith('/signin') )){
    return NextResponse.redirect(new URL('/', request.url))
  }
  const response = NextResponse.next()
  return response
}