import { createClient } from 'next-sanity';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn:
    typeof document !== 'undefined' && process.env.NODE_ENV === 'production',
});

export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  // Fallback to using the WRITE token until https://www.sanity.io/docs/vercel-integration starts shipping a READ token.
  // As this client only exists on the server and the token is never shared with the browser, we don't risk escalating permissions to untrustworthy users
  token:
    process.env.SANITY_API_READ_TOKEN || process.env.SANITY_API_WRITE_TOKEN,
});

export const getClient = (preview: any) => (preview ? previewClient : client);
