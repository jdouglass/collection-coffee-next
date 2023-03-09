import { groq } from 'next-sanity';
import { previewData } from 'next/headers';
import BlogList from '../../../components/BlogList';
import PreviewBlogList from '../../../components/PreviewBlogList';
import PreviewSuspense from '../../../components/PreviewSuspense';
import { client } from '../../../lib/sanity.client';

const query = groq`
  *[_type=='post'] {
    ...,
    categories[]->
  } | order(_createdAt desc)
`;

export const revalidate = 60;

export default async function Page() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse">
              Loading preview data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);

  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-lg">
      <h2 className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900">
        Resources
      </h2>
      <p className="mb-8 lg:mb-16 text-center text-gray-600">
        Explore our curated collection of coffee resources and articles, from
        detailed coffee guides to coffee bean reviews.
      </p>
      <BlogList posts={posts} />
    </div>
  );
}
