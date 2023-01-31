import { globby } from 'globby';
import { NextApiResponse } from 'next';

async function generateSiteMap() {
  const pages = await globby([
    'pages/*.ts*',
    'data/**/*.mdx',
    '!data/*.mdx',
    '!pages/_*.ts*',
    '!pages/api',
    '!pages/404.ts*',
  ]);
  console.log(pages);

  return `<?xml version="1.0" encoding="UTF-8"?>
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
          </url>
        `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: { res: NextApiResponse }) {
  const sitemap = await generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
