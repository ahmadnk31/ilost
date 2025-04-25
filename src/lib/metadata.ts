// This file contains site configuration and metadata helpers
// It should not export the metadata object directly as Next.js needs it in the layout.tsx file

export const siteConfig = {
  name: "iLost",
  description: "iLost - The trusted platform connecting finders of lost items with their rightful owners through secure verification.",
  url: "https://ilost-app.vercel.app",
  ogImage: "/og-image.jpg",
}

// These values can be imported and used in the layout.tsx file
export const metadataConfig = {
  title: {
    default: `${siteConfig.name} - Find Lost Items`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "lost and found",
    "find lost items",
    "report found items",
    "lost property",
    "item recovery",
    "lost belongings",
    "found items platform",
    "secure item verification",
    "return lost items",
    "lost item database"
  ],
  authors: [
    {
      name: "iLost Team",
      url: siteConfig.url,
    },
  ],
  creator: "iLost Team",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "iLost - Reuniting People With Lost Items",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@ilost",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};
