const WP_ENDPOINT = 'https://dummy.restapiexample.com/api/v1/employees';

export async function getContentBySlug(slug: string) {
  const response = await fetch(`${WP_ENDPOINT}?slug=${slug}`, {
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return await response.json();
}
