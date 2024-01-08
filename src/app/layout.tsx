import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// Components
import { Navbar, Footer, Analytics } from './components'

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: 'InvestFacil | Calculadora de Juros Compostos',
  description: 'Calcule seus rendimentos',
}

export const viewport: Viewport = {
  themeColor: "#211d24",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Analytics />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
