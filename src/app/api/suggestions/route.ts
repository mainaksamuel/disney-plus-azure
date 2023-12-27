export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");
  const functionsEndpoint = process.env.AZ_FUNCTIONS_OPENAI_ENDPOINT;

  if (!functionsEndpoint) throw Error("Missing Azure Functions Endpoint");

  const url = new URL(functionsEndpoint);
  if (term) url.searchParams.set("term", term);

  const response = await fetch(url, {
    method: "GET",
    next: {
      revalidate: 60 * 60 * 24, // after 24 hours
    },
  });

  const message = await response.text();
  return Response.json({ message });
}
