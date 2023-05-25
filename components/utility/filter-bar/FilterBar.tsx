import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { FilterCategory } from '../../../lib/enums/filterCategory';
import ClearFiltersButton from '../../buttons/clearFilters/ClearFiltersButton';
import FilterDisclosure from '../../filters/disclosure/base/FilterDisclosure';

export interface IFilterBar {}

const FilterBar: React.FC<IFilterBar> = () => {
  return (
    <section className="h-[calc(100vh-80px)] float-left w-[340px] sticky bg-white overflow-auto hidden xl:block px-4 scrollbar top-20 pt-5">
      <div className="flex justify-between items-center">
        <div className="flex text-xl font-semibold text-gray-800 items-center space-x-1">
          <AdjustmentsHorizontalIcon className="h-5 w-5" />
          <h1>Filters</h1>
        </div>
        <ClearFiltersButton />
      </div>
      <div className="mt-3">
        <FilterDisclosure section={FilterCategory.Roaster} />
        <FilterDisclosure section={FilterCategory.Vendor} />
        <FilterDisclosure section={FilterCategory.VendorLocation} />
        <FilterDisclosure section={FilterCategory.Process} />
        <FilterDisclosure section={FilterCategory.Country} />
        <FilterDisclosure section={FilterCategory.Variety} />
        <FilterDisclosure section={FilterCategory.TastingNotes} />
      </div>
    </section>
  );
};

export default FilterBar;
