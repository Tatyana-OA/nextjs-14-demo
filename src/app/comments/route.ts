import { NextRequest } from "next/server";
import { comments } from "./data";

// Get All
export async function GET(request: NextRequest) {
  const search = request.nextUrl.searchParams;
  const query = search.get("query");
  const filteredResults = query
    ? comments.filter((c) => c.comment.includes(query))
    : comments;
  return Response.json(filteredResults);
}

// Create
export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    comment: comment.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
    statusText: "Comment Created",
  });
}
