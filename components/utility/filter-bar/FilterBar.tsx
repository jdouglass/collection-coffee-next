import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { FilterCategory } from '../../../lib/enums/filterCategory';
import FilterDisclosure from '../../filters/disclosure/base/FilterDisclosure';
import SortSelect from '../../filters/select/sort/SortSelect';

export interface IFilterBar {}

const FilterBar: React.FC<IFilterBar> = () => {
  return (
    <section className="h-[calc(100vh-80px)] float-left w-[340px] sticky bg-white overflow-auto hidden xl:block px-4 scrollbar top-20">
      <div className="flex text-xl font-semibold text-gray-800 items-center space-x-1 pt-5">
        <AdjustmentsHorizontalIcon className="h-5 w-5" />
        <h1>Filters</h1>
      </div>
      <div className="mt-3">
        <SortSelect />
        <FilterDisclosure section={FilterCategory.Roaster} />
        <FilterDisclosure section={FilterCategory.Vendor} />
        <FilterDisclosure section={FilterCategory.Process} />
        <FilterDisclosure section={FilterCategory.Country} />
        <FilterDisclosure section={FilterCategory.Variety} />
        <FilterDisclosure section={FilterCategory.TastingNotes} />
      </div>
    </section>
  );
};

export default FilterBar;
