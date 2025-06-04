'use client'
import Link from 'next/link';
import { useEmojiStore } from '@/stores/useEmojiStore';
export default function Navbar() {
  const setGameOn = useEmojiStore((state) => state.setGameOn);
  return (
    <header>
      <nav className="navbar">
        <Link href="/" onClick={() => setGameOn(false)}>
          <h1>Memory Game</h1>
        </Link>
      </nav>
    </header>
  );
}