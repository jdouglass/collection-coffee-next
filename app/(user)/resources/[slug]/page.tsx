import { groq } from 'next-sanity';
import { previewData } from 'next/headers';
import { lazy } from 'react';
import PreviewSuspense from '../../../../components/PreviewSuspense';
import { client, getClient } from '../../../../lib/sanity.client';
import { Post } from '../../../../typings';

type Props = {
  params: {
    slug: string;
  };
};

const ResourcePage = lazy(() => import('../../../../components/ResourcePage'));

export async function generateMetadata({ params: { slug } }: Props) {
  return {
    alternates: {
      canonical: `${
        process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'
      }/${slug}`,
    },
  };
}

export const revalidate = 60;

export async function generateStaticParams() {
  const query = groq`*[_type=='post']
  {
    slug
  }`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);
  return slugRoutes.map((slug) => ({
    slug,
  }));
}

export default async function Page({ params: { slug } }: Props) {
  const query = groq`
    *[_type=='post' && slug.current == $slug][0]
    {
      ...,
      categories[]->
    }
  `;

  const post: Post = await getClient(previewData() ? true : false).fetch(
    query,
    { slug }
  );

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
        {post && <ResourcePage post={post} />}
      </PreviewSuspense>
    );
  }

  return post && <ResourcePage post={post} />;
}
