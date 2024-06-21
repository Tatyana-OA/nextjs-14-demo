// opt out of caching
export const dynamic = "force-dynamic";

export async function GET() {
  // if built, this will cache, time won't update
  return Response.json({ time: new Date().toLocaleTimeString() });
}
