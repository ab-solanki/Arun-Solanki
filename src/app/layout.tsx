import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://arun-solanki.vercel.app/'),
  title: "Arun Solanki | Senior Frontend Lead | TYPO3 & React Expert | UI/UX Leader",
  description: "Senior Frontend Team Leader with 6.7+ years experience in TYPO3, React, and WCAG Accessibility. Delivering premium digital solutions for US and German markets.",
  keywords: ["Arun Solanki", "Senior Frontend Developer", "Frontend Team Lead", "TYPO3 Expert", "React Developer", "Web Accessibility", "US", "Germany"],
  authors: [{ name: "Arun Solanki", url: "https://arun-solanki.vercel.app/" }],
  alternates: {
    canonical: 'https://arun-solanki.vercel.app/',
  },
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" }
    ]
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Arun Solanki | Senior Frontend Lead | TYPO3 & React Expert | UI/UX Leader",
    description: "Senior Frontend Team Leader with 6.7+ years experience in TYPO3, React, and WCAG Accessibility. Delivering premium digital solutions for US and German markets.",
    type: "website",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "Arun Solanki - Senior Frontend Lead"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Arun Solanki | Senior Frontend Lead | TYPO3 & React Expert | UI/UX Leader",
    description: "Senior Frontend Team Leader with 6.7+ years experience in TYPO3, React, and WCAG Accessibility.",
    images: ["/web-app-manifest-512x512.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>
        {/* Structured Data for SEO - Person & ProfessionalService */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Arun Solanki",
              "alternateName": "Arun Solanki Frontend",
              "jobTitle": "Senior Frontend Developer & Team Leader",
              "worksFor": {
                "@type": "Organization",
                "name": "NITSAN TECHNOLOGY",
                "url": "https://www.nitsantech.com"
              },
              "url": "https://arun-solanki.vercel.app/",
              "image": "https://arun-solanki.vercel.app/arun-solanki-frontend-team-lead.jpg",
              "sameAs": [
                "https://www.linkedin.com/in/solanki-arun/",
                "https://github.com/ab-solanki",
                "https://t3planet.de"
              ],
              "knowsAbout": [
                "Frontend Development",
                "TYPO3 CMS",
                "React.js",
                "Next.js",
                "Web Accessibility (WCAG)",
                "TypeScript",
                "UI/UX Design"
              ],
              "description": "Arun Solanki is a Senior Frontend Developer and Team Leader specializing in TYPO3, React, and Web Accessibility."
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}