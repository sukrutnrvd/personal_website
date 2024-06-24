export async function GET(req: Request) {
  const data = await fetch(`https://api.github.com/user/repos`, {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });
  const json = await data.json();

  return Response.json({ data: json });
}
