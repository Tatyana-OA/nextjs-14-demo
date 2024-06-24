import { NextResponse, type NextRequest } from "next/server";

// Middleware that redirects to homepage
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const theme = request.cookies.get("theme");
  if (!theme) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("CustomHeader", "CustomValue");
  return response;
  //return NextResponse.redirect(new URL("/", request.url));
}

// Config specifies the matcher for which middleware applies
export const config = {
  matcher: "/profile",
};

//Option 2: Conditional
// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === "/profile") {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
// }
