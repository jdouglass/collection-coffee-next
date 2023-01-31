import { NextApiResponse } from 'next';

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://collection.coffee</loc>
      </url>
      <url>
        <loc>https://collection.coffee/about</loc>
      </url>
      <url>
        <loc>https://collection.coffee/contact</loc>
      </url>
      <url>
        <loc>https://collection.coffee/sitemap.xml</loc>
      </url>
   </urlset>`;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: { res: NextApiResponse }) {
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
