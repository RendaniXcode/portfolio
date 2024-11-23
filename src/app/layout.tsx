// File: src/app/layout.tsx
// Path: ./src/app/layout.tsx

import Navigation from '@/components/navigation'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}