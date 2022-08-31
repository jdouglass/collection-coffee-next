import { useState } from 'react';

export interface ISortSelect {}

const SortSelect: React.FC<ISortSelect> = () => {
  const sortOptions = [
    'Newest to Oldest',
    'Oldest to Newest',
    'Price Ascending',
    'Price Descending',
  ];
  const [selected, setSelected] = useState(sortOptions[0]);

  return (
    <select className="w-full appearance-none text-sm font-semibold drop-shadow-sm rounded border-gray-300 py-2 mb-2 hover:cursor-pointer focus:outline-none focus:ring-0 focus:border-gray-300">
      {sortOptions.map((sortOption) => {
        return (
          <option key={sortOption} value={sortOption}>
            {sortOption}
          </option>
        );
      })}
    </select>
  );
};

export default SortSelect;
