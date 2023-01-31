import { globby } from 'globby';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const pages = await globby([
    'pages/*.ts*',
    'data/**/*.mdx',
    '!data/*.mdx',
    '!pages/_*.ts*',
    '!pages/api',
    '!pages/404.ts*',
  ]);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/xml');

  // Instructing the Vercel edge to cache the file
  res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600');

  // generate sitemap here
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const path = page
            .replace('pages', '')
            .replace('data', '')
            .replace('.tsx', '')
            .replace('.mdx', '');
          const route = path === '/index' ? '' : path;

          return `
            <url>
                <loc>${`https://collection.coffee${route}`}</loc>
                <changefreq>hourly</changefreq>
            </url>
          `;
        })
        .join('')}
    </urlset>
    `;
  res.end(xml);
}
