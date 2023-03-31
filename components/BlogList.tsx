import { Post } from '../typings';
import ResourceCard from './cards/resource/ResourceCard';

type Props = {
  posts: Post[];
};

export default function BlogList({ posts }: Props) {
  return (
    <div className="px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
      <div className="grid gap-10 lg:gap-10 md:grid-cols-2">
        {posts.slice(0, 2).map((post) => (
          <ResourceCard key={post._id} post={post} />
        ))}
      </div>
      <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3">
        {posts.slice(2).map((post) => (
          <ResourceCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
