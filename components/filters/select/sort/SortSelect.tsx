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
    <select
      defaultValue={query.sort}
      onChange={(e) => handleSort(e)}
      className="w-full appearance-none text-sm font-semibold drop-shadow-sm rounded border-gray-300 py-2 mb-2 hover:cursor-pointer focus:outline-none focus:ring-0 focus:border-gray-300"
    >
      {sortOptions.map((sortOption) => {
        return (
          <option key={sortOption.value} value={sortOption.value}>
            {sortOption.label}
          </option>
        );
      })}
    </select>
  );
};

export default SortSelect;
