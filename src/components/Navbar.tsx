'use client'
import HomeLink from './HomeLink';
export default function Navbar() {
  
  return (
    <header>
      <nav className="navbar">
        <HomeLink>
          <h1>Memory Game</h1>
        </HomeLink>
      </nav>
    </header>
  );
}