export default async function fetcher<T>(
  url: string,
  queryParams?: Record<string, any>
): Promise<T | undefined> {
  try {
    const endpoint = new URL(url);
    if (queryParams) {
      const params = new URLSearchParams(queryParams);
      endpoint.search = params.toString();
    }
    const response = await fetch(endpoint.toString(), {
      headers: {
        "Content-Type": "application/json",
        'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ' +
        'AppleWebKit/537.36 (KHTML, like Gecko) ' +
        'Chrome/115.0.0.0 Safari/537.36',
      }
    });

    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
    if (err instanceof Error) throw err;

    throw new Error("Failed to fetch");
  }
}
