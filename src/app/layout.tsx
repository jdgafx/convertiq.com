import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ConvertIQ | AI-Powered Marketing Agency",
    template: "%s | ConvertIQ",
  },
  description: "Intelligence that converts. AI-powered marketing solutions that deliver measurable results in days, not months. Get more leads and make more sales.",
  keywords: ["AI marketing", "marketing agency", "AI chatbot", "AI voice receptionist", "Google Business optimization", "email automation", "social media marketing", "lead generation"],
  authors: [{ name: "ConvertIQ" }],
  creator: "ConvertIQ",
  publisher: "ConvertIQ",
  metadataBase: new URL("https://convertiq.ai"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://convertiq.ai",
    siteName: "ConvertIQ",
    title: "ConvertIQ | AI-Powered Marketing Agency",
    description: "Intelligence that converts. AI-powered marketing solutions that deliver measurable results in days, not months.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ConvertIQ - Marketing That Actually Works",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ConvertIQ | AI-Powered Marketing Agency",
    description: "Intelligence that converts. AI-powered marketing solutions that deliver measurable results.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ConvertIQ",
    "image": "https://convertiq.ai/logo.png",
    "description": "AI-powered marketing solutions that deliver measurable results in days, not months.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "74 Northeastern Blvd #12a Ste 101",
      "addressLocality": "Nashua",
      "addressRegion": "NH",
      "postalCode": "03062",
      "addressCountry": "US",
    },
    "telephone": "+1-617-651-1457",
    "email": "hello@convertiq.ai",
    "url": "https://convertiq.ai",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "10:00",
        "closes": "14:00",
      },
    ],
    "sameAs": [
      "https://www.facebook.com/convertiq",
      "https://www.twitter.com/convertiq",
      "https://www.linkedin.com/company/convertiq",
    ],
    "areaServed": {
      "@type": "Place",
      "name": "United States",
    },
    "serviceType": "Marketing Agency",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="icon" type="image/svg+xml" sizes="32x32" href="/favicon.svg" />
        <link rel="icon" type="image/svg+xml" sizes="16x16" href="/favicon.svg" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
