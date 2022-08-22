export interface IFilterOptions {
  filterOptions: Array<string>;
}

const FilterOptions: React.FC<IFilterOptions> = ({ filterOptions }) => {
  return (
    <div className="mb-2">
      {filterOptions.map((option) => {
        return (
          <div key={option} className="flex items-center mb-2">
            <input
              key={option}
              id={option}
              name="option[]"
              type="checkbox"
              className="h-[17px] w-[17px] border-gray-300 rounded text-stone-600 focus:ring-0 focus:ring-offset-0"
            />
            <label
              key={option}
              htmlFor={option}
              className="ml-2 text-sm text-gray-700 dark:text-gray-300"
            >
              {option}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default FilterOptions;
