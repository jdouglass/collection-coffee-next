import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { media, mediaAssetSource } from 'sanity-plugin-media';
import { deskTool } from 'sanity/desk';
import { defaultDocumentNode } from './lib/deskStructure';
import { schemaTypes } from './schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: '/studio',
  name: 'Collection_Coffee_Studio',
  title: 'Collection Coffee Studio',
  projectId,
  dataset,
  plugins: [
    deskTool({
      defaultDocumentNode: defaultDocumentNode,
    }),
    visionTool(),
    media(),
  ],
  schema: {
    types: schemaTypes,
  },
  form: {
    // Don't use this plugin when selecting files only (but allow all other enabled asset sources)
    file: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter(
          (assetSource) => assetSource !== mediaAssetSource
        );
      },
    },
  },
});
