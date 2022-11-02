import { useRouter } from 'next/router';

export interface ISortSelect {}

const SortSelect: React.FC<ISortSelect> = () => {
  const router = useRouter();
  const { pathname, query } = router;
  const sortOptions = [
    { value: 'newest', label: 'Newest to Oldest' },
    { value: 'oldest', label: 'Oldest to Newest' },
    { value: 'ascending', label: 'Price Ascending' },
    { value: 'descending', label: 'Price Descending' },
  ];

  const handleSort = (e: any) => {
    router.push({
      pathname,
      query: { ...query, sort: e.currentTarget.value },
    });
  };

  return (
    <div className="flex items-center">
      <p className="text-sm font-semibold text-gray-800">Sort:</p>
      <select
        defaultValue={query.sort}
        onChange={(e) => handleSort(e)}
        className="w-full text-gray-800 hover:text-gray-900 appearance-none text-sm font-semibold border-none hover:cursor-pointer focus:outline-none focus:ring-0"
      >
        {sortOptions.map((sortOption) => {
          return (
            <option key={sortOption.value} value={sortOption.value}>
              {sortOption.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SortSelect;
