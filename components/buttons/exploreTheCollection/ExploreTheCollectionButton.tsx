import Link from 'next/link';

export interface IExploreTheCollectionButton {}

const ExploreTheCollectionButton: React.FC<
  IExploreTheCollectionButton
> = () => {
  return (
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <Link
        href="/collection"
        className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Explore the collection
      </Link>
    </div>
  );
};

export default ExploreTheCollectionButton;
