/* The code is importing the `authMiddleware` function from the `@kinde-oss/kinde-auth-nextjs/server`
module and the `NextRequest` and `NextResponse` types from the `next/server` module. */
import { authMiddleware } from "@kinde-oss/kinde-auth-nextjs/server"
import { NextRequest, NextResponse } from "next/server"

export const config = {
  matcher: ["/dashboard"],
}

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get("kinde_token")

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("https://kinde-auth.vercel.app/"))
  }
}
