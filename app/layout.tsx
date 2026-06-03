import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

export const metadata: Metadata = {
  title: "Raves Capital | Private Investment Holding Company",
  description: "Raves Capital is a private investment holding company focused on long-term value creation through disciplined capital allocation across real estate, private equity, debt acquisitions, and alternative assets.",
  keywords: "Raves Capital, private equity, investment holding, real estate, debt acquisitions, alternative investments",
  openGraph: {
    title: "Raves Capital",
    description: "Strategic Investments. Enduring Value.",
    url: "https://ravescapital.com",
    siteName: "Raves Capital",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
