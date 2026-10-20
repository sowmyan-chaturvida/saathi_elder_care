import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '@/client/context/AuthContext';

export const metadata: Metadata = {
  title: 'Saathi — Elderly Care & Family Companion Platform',
  description: 'AI Companion & Family Care Platform for Ageing Parents with real-time peace of mind and Terra design system.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,500;0,7..72,600;0,7..72,700;1,7..72,400&family=Nunito+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="h-full antialiased font-body bg-surface text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
