import { SITE } from "@/lib/constants";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressCountry: SITE.address.country,
    },
    sameAs: [
      SITE.social.linkedin,
      SITE.social.twitter,
      SITE.social.youtube,
    ],
    areaServed: {
      "@type": "Country",
      name: "Ghana",
    },
    slogan: SITE.tagline,
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    publisher: {
      "@type": "Organization",
      name: SITE.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
