'use client';

import { XMarkIcon } from '@heroicons/react/20/solid';
import { useAtom } from 'jotai';
import { FilterCategory } from '../../../../lib/enums/filterCategory';
import { mobileFilters } from '../../../../lib/store';
import FilterDisclosure from '../../../filters/disclosure/base/FilterDisclosure';
import SortSelect from '../../../filters/select/sort/SortSelect';

export interface IFilterBarMobile {}

const FilterBarMobile: React.FC<IFilterBarMobile> = () => {
  const [, setViewMobileFilters] = useAtom(mobileFilters);
  return (
    <div className="px-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
        <button
          type="button"
          className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
          onClick={() => setViewMobileFilters(false)}
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>
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
    </div>
  );
};

export default FilterBarMobile;
