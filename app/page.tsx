const Home: React.FC = () => {
  return (
    <main>
      <h1>English</h1>
      <h2>Friends</h2>
      <ul>
        <li>
          <a href="/friend/george-fox">George Fox</a>
        </li>
        <li>
          <a href="/friend/hugh-turford">Hugh Turford</a>
        </li>
      </ul>
      <h2>Documents</h2>
      <ul>
        <li>
          <a href="/george-fox/journal">George Fox &mdash; Journal</a>
        </li>
        <li>
          <a href="/hugh-turford/walk-in-the-spirit">
            Hugh Turford &mdash; Walk in the Spirit
          </a>
        </li>
      </ul>
      <h1>Spanish</h1>
      <h2>Friends</h2>
      <ul>
        <li>
          <a href="/amigo/george-fox">George Fox</a>
        </li>
        <li>
          <a href="/amiga/margaret-lucas">Margaret Lucas</a>
        </li>
      </ul>
      <h2>Documents</h2>
      <ul>
        <li>
          <a href="/george-fox/seleccion-del-diario">George Fox &mdash; Diario</a>
        </li>
        <li>
          <a href="/margaret-lucas/vida">Margaret Lucas &mdash; Vida</a>
        </li>
      </ul>
    </main>
  );
};

export default Home;

// [friend_slug][document_slug]
