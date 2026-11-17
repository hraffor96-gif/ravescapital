import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '../lib/LanguageContext'

export const metadata: Metadata = {
  title: 'Raves Capital — Private Investment Holdings',
  description: 'Raves Capital Holdings L.L.C. is a private investment holding company focused on long-term value creation through disciplined capital allocation, strategic diversification and rigorous risk management.',
  keywords: 'private investment, capital management, investment holdings, private equity, real estate investment, strategic partnerships',
  openGraph: {
    title: 'Raves Capital — Private Investment Holdings',
    description: 'Capital With Purpose. Value That Endures.',
    url: 'https://www.ravescapital.com',
    siteName: 'Raves Capital',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Raves Capital — Private Investment Holdings',
    description: 'Capital With Purpose. Value That Endures.',
  },
  robots: { index: true, follow: true },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
