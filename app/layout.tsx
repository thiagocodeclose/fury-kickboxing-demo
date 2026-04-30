// @ts-nocheck
import type { Metadata } from 'next';
import { Barlow_Condensed, Barlow } from 'next/font/google';
import './globals.css';

const barlowCondensed = Barlow_Condensed({ subsets: ['latin'], weight: ['700', '800', '900'], variable: '--font-heading' });
const barlow          = Barlow({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'Fury Kickboxing — Las Vegas Competitive Kickboxing',
  description: 'Las Vegas\'s #1 competitive kickboxing gym. K-1 rules, Muay Thai rules, amateur and pro programs. 8 world champions trained here.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${barlow.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
