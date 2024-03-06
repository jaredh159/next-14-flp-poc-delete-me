import Link from 'next/link';
const Home: React.FC = () => {
  return (
    <main>
      <h1>English</h1>
      <h2>Friends</h2>
      <ul>
        <li>
          <Link href="/friend/george-fox">George Fox</Link>
        </li>
        <li>
          <Link href="/friend/hugh-turford">Hugh Turford</Link>
        </li>
      </ul>
      <h2>Documents</h2>
      <ul>
        <li>
          <Link href="/george-fox/journal">George Fox &mdash; Journal</Link>
        </li>
        <li>
          <Link href="/hugh-turford/walk-in-the-spirit">
            Hugh Turford &mdash; Walk in the Spirit
          </Link>
        </li>
      </ul>
      <h1>Spanish</h1>
      <h2>Friends</h2>
      <ul>
        <li>
          <Link href="/amigo/george-fox">George Fox</Link>
        </li>
        <li>
          <Link href="/amiga/margaret-lucas">Margaret Lucas</Link>
        </li>
      </ul>
      <h2>Documents</h2>
      <ul>
        <li>
          <Link href="/george-fox/seleccion-del-diario">George Fox &mdash; Diario</Link>
        </li>
        <li>
          <Link href="/margaret-lucas/vida">Margaret Lucas &mdash; Vida</Link>
        </li>
      </ul>
    </main>
  );
};

export default Home;

// [friend_slug][document_slug]
