import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kasparro - AI-SEO Platform',
  description: 'Brand intelligence for the AI-first search era',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
