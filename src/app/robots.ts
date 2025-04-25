import { MetadataRoute } from 'next';

// Using a constant URL instead of importing from siteConfig to avoid any import issues
const SITE_URL = 'https://ilost-app.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
