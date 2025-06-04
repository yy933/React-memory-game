'use client';
import Link from 'next/link';
import { useEmojiStore } from '@/stores/useEmojiStore';
import { HomeLinkProps } from '@/types';


export default function HomeLink({ children, className }: HomeLinkProps) {
  const setGameOn = useEmojiStore((state) => state.setGameOn);

  return (
    <Link href="/" onClick={() => setGameOn(false)} className={className}>
      {children}
    </Link>
  );
}