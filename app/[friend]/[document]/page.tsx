import React from 'react';
import * as api from '@/lib/api';
import { LANG } from '@/lib/env';

type Params = {
  friend: string;
  document: string;
};

export async function generateStaticParams(): Promise<Params[]> {
  if (LANG === `es`) {
    return [
      { friend: `george-fox`, document: `seleccion-del-diario` },
      { friend: `margaret-lucas`, document: `vida` },
    ];
  }
  return [
    { friend: `george-fox`, document: `journal` },
    { friend: `hugh-turford`, document: `walk-in-the-spirit` },
  ];
}

async function getData(params: {
  friend: string;
  document: string;
}): Promise<{ title: string; description: string; timestamp: string }> {
  return await api.getDocumentPage(params.friend, params.document, LANG);
}

export default async function Page(props: {
  params: Params;
}): Promise<React.JSX.Element> {
  const doc = await getData(props.params);
  return (
    <main>
      <h1>Document:</h1>
      <h2>{doc.title}</h2>
      <p>{doc.description}</p>
      <small>Fetched at: {doc.timestamp}</small>
    </main>
  );
}

export const dynamicParams = false;
export const revalidate = 30;
