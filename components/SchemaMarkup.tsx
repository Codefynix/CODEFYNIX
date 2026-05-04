export default function SchemaMarkup() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Codefynix",
            url: "https://www.codefynix.com",
            logo: "https://www.codefynix.com/LOGO-Black-png.png",
            email: "codefynix@gmail.com",
            telephone: "+91-7025152628",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kochi",
              addressRegion: "Kerala",
              addressCountry: "IN",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Codefynix",
            telephone: "+91-7025152628",
            email: "codefynix@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kochi",
              addressRegion: "Kerala",
              postalCode: "682001",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 9.9312,
              longitude: 76.2673,
            },
            url: "https://www.codefynix.com",
            priceRange: "$$",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Codefynix",
            url: "https://www.codefynix.com",
          }),
        }}
      />
    </>
  );
}
