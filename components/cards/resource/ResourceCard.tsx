import Image from 'next/image';
import Link from 'next/link';
import urlFor from '../../../lib/urlFor';
import { Post } from '../../../typings';

export interface IResourceCard {
  post: Post;
}

const ResourceCard: React.FC<IResourceCard> = ({ post }) => {
  return (
    <Link href={`/resources/${post.slug.current}`}>
      <div key={post._id} className="cursor-pointer group">
        <div
          className={`relative overflow-hidden transition-all bg-white rounded-md dark:bg-gray-800 hover:scale-105 aspect-video`}
        >
          <Image
            className="object-contain w-full rounded-lg"
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            blurDataURL={urlFor(post.mainImage).url()}
            fill
          />
        </div>
        <div>
          <div>
            {post.categories.map((category) => (
              <p
                key={post._id}
                className="inline-block mt-5 text-xs font-medium tracking-wider uppercase  text-blue-600"
              >
                {category.title}
              </p>
            ))}
          </div>
          <h1 className="mt-2 text-lg font-semibold tracking-normal text-brand-primary dark:text-white">
            <span className="bg-gradient-to-r from-green-200 to-green-100 dark:from-purple-800 dark:to-purple-900 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
              {post.title}
            </span>
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default ResourceCard;
