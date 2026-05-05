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
            logo: {
              "@type": "ImageObject",
              url: "https://www.codefynix.com/LOGO-Black-png.png",
            },
            email: "codefynix@gmail.com",
            telephone: "+91-9400035616",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kochi",
              addressRegion: "Kerala",
              addressCountry: "IN",
            },
            publisher: {
              "@type": "Organization",
              name: "Codefynix",
              logo: {
                "@type": "ImageObject",
                url: "https://www.codefynix.com/LOGO-Black-png.png",
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "20",
            },
            review: [
              {
                "@type": "Review",
                author: { "@type": "Person", name: "Ayesha Rahman" },
                reviewBody:
                  "Codefynix transformed our digital funnel. Traffic quality improved and conversion rate increased significantly.",
                reviewRating: { "@type": "Rating", ratingValue: "5" },
              },
              {
                "@type": "Review",
                author: { "@type": "Person", name: "Santhosh Narayan" },
                reviewBody:
                  "Their web app architecture and execution speed were exceptional. We launched faster than expected.",
                reviewRating: { "@type": "Rating", ratingValue: "5" },
              },
            ],
          }),
        }}
      />

      {/* LocalBusiness — unchanged */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Codefynix",
            telephone: "+91-9400035616",
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

      {/* WebSite — unchanged */}
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