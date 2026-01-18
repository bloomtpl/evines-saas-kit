import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLogged = !!req.auth;
  const { pathname } = req.nextUrl;

  const isAuthPage =
    pathname.startsWith("/signin") || pathname.startsWith("/verify-request");
  const isDashboardPage = pathname.startsWith("/dashboard");

  if (isDashboardPage && !isLogged) {
    const loginUrl = new URL("/signin", req.nextUrl);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthPage && isLogged) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/signin",
    "/verify-request",
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
