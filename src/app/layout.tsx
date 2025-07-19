import type { Metadata } from 'next';
import './globals.css';
import AppLayout from './app-layout';


export const metadata: Metadata = {
  title: 'QueueWise',
  description: 'Intelligent Queue Management',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <AppLayout>{children}</AppLayout>
    </html>
  );
}
