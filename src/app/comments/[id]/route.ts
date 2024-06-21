import { comments } from "../data";
import { redirect } from "next/navigation";

// Get By id
export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const comment = comments.find((comment) => comment.id === Number(params.id));

  return comment ? Response.json(comment) : redirect("/comments");
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { comment } = body;
  const commentToPatchIndex = comments.findIndex(
    (comment) => comment.id === Number(params.id)
  );
  comments[commentToPatchIndex].comment = comment;
  return Response.json(comments[commentToPatchIndex], {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
    statusText: "Updated",
  });
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const commentIndex = comments.findIndex(
    (comment) => comment.id === Number(params.id)
  );
  comments.splice(commentIndex, 1);
  return Response.json({
    headers: {
      "Content-Type": "application/json",
    },
    status: 204,
    statusText: "Deleted",
  });
}
