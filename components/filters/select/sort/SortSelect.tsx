import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export interface ISortSelect {}

const SortSelect: React.FC<ISortSelect> = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const router = useRouter();
  const pathname = usePathname();
  const sortOptions = [
    { value: 'newest', label: 'Newest to Oldest' },
    { value: 'oldest', label: 'Oldest to Newest' },
    { value: 'ascending', label: 'Price Ascending' },
    { value: 'descending', label: 'Price Descending' },
  ];

  const handleSort = (e: any) => {
    params.delete('sort');
    params.append('sort', e.currentTarget.value);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center">
      <p className="text-sm font-semibold text-gray-800 pr-2">Sort</p>
      <select
        value={params.get('sort') ? (params.get('sort') as string) : ''}
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
