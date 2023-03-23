import Iframe from 'sanity-plugin-iframe-pane';
import { SEOPane } from 'sanity-plugin-seo-pane';
import type { DefaultDocumentNodeResolver } from 'sanity/desk';
import { resolveProductionUrl } from './resolveProductionUrl';

// Import this into the deskTool() plugin
export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  // Only show preview pane on `post` schema type documents
  switch (schemaType) {
    case 'post':
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: `${
              process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'
            }/api/preview`,
            defaultSize: 'desktop',
            reload: { button: true },
          })
          .title('Preview'),
        S.view
          .component(SEOPane)
          .options({
            // Retrieve the keywords and synonyms at the given dot-notated strings
            keywords: `seo.keywords`,
            synonyms: `seo.synonyms`,
            url: (doc: any) => resolveProductionUrl(doc),
          })
          .title('SEO'),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};
