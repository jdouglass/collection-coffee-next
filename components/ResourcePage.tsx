import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import urlFor from '../lib/urlFor';
import { Post } from '../typings';
import { RichTextComponents } from './RichTextComponents';

type Props = {
  post: Post;
};

export default function ResourcePage({ post }: Props) {
  return (
    <div
      data-content="main"
      className="px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg !pt-0"
    >
      <div className="max-w-screen-md mx-auto">
        <div className="flex justify-center pt-5">
          {post.categories.map((category) => (
            <p
              key={post._id}
              className="inline-block mt-5 text-xs font-medium tracking-wider uppercase  text-blue-600"
            >
              {category.title}
            </p>
          ))}
        </div>
        <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
          {post.title}
        </h1>
      </div>
      <div className="relative z-0 max-w-screen-lg mx-auto overflow-hidden lg:rounded-lg aspect-video">
        <span className="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={'Thumbnail'}
            loading="eager"
            className="object-contain"
            fill
          />
        </span>
      </div>
      <div className="px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
        <article className="max-w-screen-lg mx-auto">
          <div className="mx-auto my-3 prose prose-base dark:prose-invert prose-a:text-blue-500">
            {post.body && (
              <PortableText value={post.body} components={RichTextComponents} />
            )}
          </div>
        </article>
        <div className="flex justify-center mt-7 mb-7">
          <Link
            href="/resources"
            className="px-5 py-2 text-sm text-blue-600 rounded-full dark:text-blue-500 bg-brand-secondary/20"
          >
            ← View all posts
          </Link>
        </div>
      </div>
    </div>
  );
}
