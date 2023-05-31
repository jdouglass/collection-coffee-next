import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { FilterCategory } from '../../../lib/enums/filterCategory';
import { ICombinedResultsCount } from '../../../lib/ICombinedResultsCounts';
import ClearFiltersButton from '../../buttons/clearFilters/ClearFiltersButton';
import FilterDisclosure from '../../filters/disclosure/base/FilterDisclosure';

export interface IFilterBar {
  productCounts: ICombinedResultsCount;
}

const FilterBar: React.FC<IFilterBar> = ({ productCounts }) => {
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
        <FilterDisclosure
          section={FilterCategory.Roaster}
          productCounts={productCounts}
        />
        <FilterDisclosure
          section={FilterCategory.Vendor}
          productCounts={productCounts}
        />
        <FilterDisclosure
          section={FilterCategory.VendorLocation}
          productCounts={productCounts}
        />
        <FilterDisclosure
          section={FilterCategory.Process}
          productCounts={productCounts}
        />
        <FilterDisclosure
          section={FilterCategory.Country}
          productCounts={productCounts}
        />
        <FilterDisclosure
          section={FilterCategory.Variety}
          productCounts={productCounts}
        />
        <FilterDisclosure
          section={FilterCategory.TastingNotes}
          productCounts={productCounts}
        />
      </div>
    </section>
  );
};

export default FilterBar;
