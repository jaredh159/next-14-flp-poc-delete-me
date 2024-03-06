import React from 'react';
import * as api from '@/lib/api';
import { LANG } from '@/lib/env';
import FriendPage from '@/components/FriendPage';

type Params = {
  friend: string;
};

export async function generateStaticParams(): Promise<Params[]> {
  if (LANG === `es`) {
    return [];
  }
  return [{ friend: `george-fox` }, { friend: `hugh-turford` }];
}

export default async function Page(props: {
  params: Params;
}): Promise<React.JSX.Element> {
  const friend = await api.getFriend(props.params.friend, LANG);
  return <FriendPage {...friend} />;
}

export const dynamicParams = false;
export const revalidate = 30;
