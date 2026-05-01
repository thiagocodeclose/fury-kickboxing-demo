// @ts-nocheck
import type { Metadata } from 'next';
import { Barlow_Condensed, Barlow } from 'next/font/google';
import './globals.css';
import { getKorivaConfig, buildCssVars } from '@/lib/koriva-config';

const barlowCondensed = Barlow_Condensed({ subsets: ['latin'], weight: ['700', '800', '900'], variable: '--font-heading' });
const barlow          = Barlow({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'Fury Kickboxing — Las Vegas Competitive Kickboxing',
  description: 'Las Vegas\'s #1 competitive kickboxing gym. K-1 rules, Muay Thai rules, amateur and pro programs. 8 world champions trained here.',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cfg = await getKorivaConfig();
  const vars = buildCssVars(cfg?.brand);
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${barlow.variable}`} style={vars as React.CSSProperties}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
