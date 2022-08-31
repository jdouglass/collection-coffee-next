export interface IFilterUtility {
  numResults: number;
}

const FilterUtility: React.FC<IFilterUtility> = ({ numResults }) => {
  return (
    <section className="grid grid-cols-3 h-14 border-b items-center sticky top-0 bg-white z-10">
      <span className="flex">
        <p className="flex text-blue-500 pl-4">{numResults}</p>
        <p>&nbsp;results</p>
      </span>
    </section>
  );
};

export default FilterUtility;
