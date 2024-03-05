import React from 'react';

type Params = {
  friend: string;
  document: string;
};

export async function generateStaticParams(): Promise<Params[]> {
  return [
    { friend: `george-fox`, document: `journal` },
    { friend: `ann_branson`, document: `writings` },
  ];
}

async function getData(params: { friend: string; document: string }): Promise<string> {
  return `Some data for ${params.friend}/${params.document}`;
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

export const dynamicParams = false;
