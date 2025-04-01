
import React from 'react';

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "HubBud - Firma budowlana w Łodzi",
    "image": "https://hub-bud.site/og-image.png",
    "description": "Profesjonalna firma budowlana w Łodzi oferująca kompleksowe usługi budowlane dla inwestorów i deweloperów. Budujemy przyszłość Łodzi z pasją i profesjonalizmem.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Łódź",
      "postalCode": "91-045",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.7592",
      "longitude": "19.4560"
    },
    "telephone": "+48 664 946 333",
    "email": "contact@hub-bud.site",
    "url": "https://hub-bud.site",
    "sameAs": [
      "https://www.facebook.com/hubbud",
      "https://www.instagram.com/hubbud",
      "https://www.linkedin.com/company/hubbud"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "priceRange": "$$",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "51.7592",
        "longitude": "19.4560"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Usługi Budowlane w Łodzi",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kompleksowa budowa w Łodzi"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wykończenia wnętrz w Łodzi"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Instalacje elektryczne w Łodzi"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Instalacje hydrauliczne w Łodzi"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
