import Link from 'next/link';
import React from 'react';

const FriendPage: React.FC<{ name: string; description: string; timestamp: string }> = ({
  name,
  description,
  timestamp,
}) => (
  <main>
    <h1>Friend:</h1>
    <h2>{name}</h2>
    <p>{description}</p>
    <small>Fetched at: {timestamp}</small>
    <Link href="/">Home</Link>
  </main>
);

export default FriendPage;
