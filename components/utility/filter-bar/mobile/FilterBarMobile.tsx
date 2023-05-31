'use client';

import { XMarkIcon } from '@heroicons/react/20/solid';
import { useAtom } from 'jotai';
import { FilterCategory } from '../../../../lib/enums/filterCategory';
import { ICombinedResultsCount } from '../../../../lib/ICombinedResultsCounts';
import { mobileFilters } from '../../../../lib/store';
import ClearFiltersButton from '../../../buttons/clearFilters/ClearFiltersButton';
import FilterDisclosure from '../../../filters/disclosure/base/FilterDisclosure';
import SortSelect from '../../../filters/select/sort/SortSelect';

export interface IFilterBarMobile {
  productCounts: ICombinedResultsCount;
}

const FilterBarMobile: React.FC<IFilterBarMobile> = ({ productCounts }) => {
  const [, setViewMobileFilters] = useAtom(mobileFilters);
  return (
    <div className="px-4">
      <div className="flex items-center justify-between">
        <h2 className="pl-2 text-lg font-medium text-gray-900">Filters</h2>
        <div className="flex items-center">
          <div className="mr-3">
            <ClearFiltersButton />
          </div>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
            onClick={() => setViewMobileFilters(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="mt-3">
        <div className="pl-3">
          <SortSelect />
        </div>
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
    </div>
  );
};

export default FilterBarMobile;
