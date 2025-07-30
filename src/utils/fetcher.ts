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
    const response = await fetch(endpoint.toString());
    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
    // throw new Error("Failed to fetch");
  }
}
