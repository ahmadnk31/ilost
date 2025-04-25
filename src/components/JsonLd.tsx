'use client';

import { siteConfig } from "@/lib/metadata";
import Script from "next/script";

export function JsonLdProvider() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "iLost",
    url: siteConfig?.url,
    logo: `${siteConfig?.url}/logo.png`,
    description: siteConfig?.description,
    sameAs: [
      "https://twitter.com/ilost",
      "https://facebook.com/ilost",
      "https://linkedin.com/company/ilost"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@ilost-app.com",
      contactType: "customer service"
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": siteConfig?.url
    },
    "potentialAction": {
      "@type": "JoinAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteConfig?.url}`
      },
      "result": {
        "@type": "JoinActionResponse",
        "name": "Waitlist Registration"
      },
      "actionStatus": "PotentialActionStatus"
    }
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig?.url}/#localbusiness`,
    name: "iLost Lost and Found Service",
    description: "Platform connecting finders and owners of lost items through secure verification",
    url: siteConfig?.url,
    image: `${siteConfig?.url}/logo.png`,
    priceRange: "Free",
    openingHours: "Mo,Tu,We,Th,Fr,Sa,Su 00:00-24:00",
    areaServed: {
      "@type": "Country",
      name: "United States"
    }
  };

  return (
    <>
      <Script
        id="json-ld-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="json-ld-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
    </>
  );
}
