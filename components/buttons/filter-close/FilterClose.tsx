export interface IFilterClose {}

const FilterClose: React.FC<IFilterClose> = () => {
  return (
    <div className="bg-white w-full items-center px-4 py-4">
      <button className="border font-semibold rounded w-24 h-9 bg-white text-sm text-red-700 hover:border-gray-500 drop-shadow-sm">
        Reset Filters
      </button>
    </div>
  );
};

export default FilterClose;
