import { groq } from 'next-sanity';
import { previewData } from 'next/headers';
import PreviewResourcePage from '../../../../components/PreviewResourcePage';
import PreviewSuspense from '../../../../components/PreviewSuspense';
import { ResourcePage } from '../../../../components/ResourcePage';
import { client } from '../../../../lib/sanity.client';
import { Post } from '../../../../typings';

type Props = {
  params: {
    slug: string;
  };
};

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
        <PreviewResourcePage query={query} />
      </PreviewSuspense>
    );
  }

  const post: Post = await client.fetch(query, { slug });

  return post && <ResourcePage post={post} />;
}
