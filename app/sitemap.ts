import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.codefynix.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://www.codefynix.com/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.codefynix.com/services', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.codefynix.com/services/seo-websites', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.codefynix.com/services/web-apps', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.codefynix.com/services/crm', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.codefynix.com/services/whatsapp-automation', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.codefynix.com/services/shopify', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.codefynix.com/services/ecommerce', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.codefynix.com/services/ui-ux-design', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.codefynix.com/projects', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: 'https://www.codefynix.com/blog', lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: 'https://www.codefynix.com/blog/it-company-kochi-why-codefynix', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.codefynix.com/blog/whatsapp-automation-small-business-india', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.codefynix.com/blog/nextjs-web-development-kerala', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.codefynix.com/contact', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
  ]
}
