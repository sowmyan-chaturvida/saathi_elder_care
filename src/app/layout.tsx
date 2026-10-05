import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Saathi (साथी) — AI Companion & Family Care Platform',
  description: 'Empathetic voice-first AI companion for ageing parents with real-time family peace of mind.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full antialiased font-sans bg-[#FDFBF7] text-[#1E293B]">
        {children}
      </body>
    </html>
  );
}
