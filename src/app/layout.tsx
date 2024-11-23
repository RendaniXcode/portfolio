// File: src/app/layout.tsx
// Path: ./src/app/layout.tsx

import Navigation from '@/components/navigation';
import './globals.css';

// Add metadata if necessary
export const metadata = {
  title: 'My Portfolio',
  description: 'A showcase of my projects and expertise.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* SEO Metadata */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="bg-gray-50 text-gray-900 suppressHydrationWarning">
        {/* Global Navigation */}
        <Navigation />
        {/* Main Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
