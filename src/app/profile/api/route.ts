import { NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("X-Authorization"));

  const cookie = request.cookies.get("my-cookie");
  const cookieNext = cookies().get("next-cookie");
  console.log(cookie);
  console.log(cookieNext);

  //the next.js way
  cookies().set("next-cookie", "authorized");

  return new Response("<h1> Profile Api Data </h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "my-cookie=kukiii",
    },
  });
}
