import type { Metadata } from 'next';

import './globals.css'
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Navrang Sandwich & Pizza',
  description: 'Kill Your Hunger with Navrang Sandwich & Pizza',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
