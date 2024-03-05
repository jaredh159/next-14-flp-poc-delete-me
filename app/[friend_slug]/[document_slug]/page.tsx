import React from 'react';

type Params = {
  friend_slug: string;
  document_slug: string;
};

export async function generateStaticParams(): Promise<Params[]> {
  return [
    { friend_slug: `george-fox`, document_slug: `journal` },
    { friend_slug: `ann_branson`, document_slug: `writings` },
  ];
}

async function getData(params: {
  friend_slug: string;
  document_slug: string;
}): Promise<string> {
  return `Some data for ${params.friend_slug}/${params.document_slug}`;
}

export default async function Page(props: {
  params: Params;
}): Promise<React.JSX.Element> {
  const msg = await getData(props.params);
  return (
    <main>
      I'm a rad page, {msg}, <pre>{JSON.stringify(props, null, 2)}</pre>
    </main>
  );
}

// export default Page;
