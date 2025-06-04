import Link from 'next/link';
export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <Link href="/">
          <h1>Memory Game</h1>
        </Link>
      </nav>
    </header>
  );
}