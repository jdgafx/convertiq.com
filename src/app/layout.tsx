import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Amp AI Experts | AI Tools That Grow Your Business",
    template: "%s | Amp AI Experts",
  },
  description: "AI tools that grow your business. We help you automate lead capture and sales follow-ups with smart technology that actually works.",
  keywords: ["AI solutions", "AI consulting", "AI lead generation", "custom AI applications", "AI chatbot", "AI voice", "programmatic advertising", "AI automation"],
  authors: [{ name: "Amp AI Experts" }],
  creator: "Amp AI Experts",
  publisher: "Amp AI Experts",
  metadataBase: new URL("https://ampaiexperts.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ampaiexperts.com",
    siteName: "Amp AI Experts",
    title: "Amp AI Experts | AI Tools That Grow Your Business",
    description: "AI tools that grow your business. We help you automate lead capture and sales follow-ups with smart technology that actually works.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amp AI Experts - AI Solutions That Scale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amp AI Experts | AI Tools That Grow Your Business",
    description: "AI tools that grow your business. We help you automate lead capture and sales follow-ups with smart technology that actually works.",
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
    "name": "Amp AI Experts",
    "image": "https://ampaiexperts.com/logo.png",
    "description": "AI tools that grow your business. We help you automate lead capture and sales follow-ups with smart technology that actually works.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "74 Northeastern Blvd #12a Ste 101",
      "addressLocality": "Nashua",
      "addressRegion": "NH",
      "postalCode": "03062",
      "addressCountry": "US",
    },
    "telephone": "+1-617-651-1457",
    "email": "hello@ampaiexperts.com",
    "url": "https://ampaiexperts.com",
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
      "https://www.facebook.com/ampaiexperts",
      "https://www.twitter.com/ampaiexperts",
      "https://www.linkedin.com/company/ampaiexperts",
    ],
    "areaServed": {
      "@type": "Place",
      "name": "United States",
    },
    "serviceType": "AI Solutions Provider",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon-amp.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon-amp.svg" />
        <link rel="icon" type="image/svg+xml" sizes="32x32" href="/favicon-amp.svg" />
        <link rel="icon" type="image/svg+xml" sizes="16x16" href="/favicon-amp.svg" />
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
