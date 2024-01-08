import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// Components
import { Navbar, Footer, Analytics } from './components'

export const metadata: Metadata = {
  title: 'InvestFacil | Calculadora de Juros Compostos',
  description: 'Calcule seus rendimentos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <Analytics />
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
