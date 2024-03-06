import invariant from 'tiny-invariant';

export async function getDocumentPage(
  friendSlug: string,
  documentSlug: string,
  lang: 'en' | 'es',
): Promise<{ document: { title: string; description: string } }> {
  const token = process.env.API_TOKEN;
  invariant(token, `API_TOKEN is required`);
  const endpoint = process.env.API_ENDPOINT;
  invariant(endpoint, `API_ENDPOINT is required`);
  try {
    const res = await fetch(`${endpoint}/pairql/evans-build/DocumentPage`, {
      method: `POST`,
      headers: {
        'Content-Type': `application/json`,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ friendSlug, documentSlug, lang }),
    });
    const json = await res.json();
    if (res.ok) {
      return json;
    }
    throw new Error(JSON.stringify(json));
  } catch (error) {
    console.error(error); // eslint-disable-line no-console
    process.exit(1);
  }
  throw new Error(`Not implemented`);
}

export async function getFriend(
  slug: string,
  lang: 'en' | 'es',
): Promise<{ name: string; description: string }> {
  const token = process.env.API_TOKEN;
  invariant(token, `API_TOKEN is required`);
  const endpoint = process.env.API_ENDPOINT;
  invariant(endpoint, `API_ENDPOINT is required`);
  try {
    const res = await fetch(`${endpoint}/pairql/evans-build/FriendPage`, {
      method: `POST`,
      headers: {
        'Content-Type': `application/json`,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ slug, lang }),
    });
    const json = await res.json();
    if (res.ok) {
      return json;
    }
    throw new Error(JSON.stringify(json));
  } catch (error) {
    console.error(error); // eslint-disable-line no-console
    process.exit(1);
  }
  throw new Error(`Not implemented`);
}
