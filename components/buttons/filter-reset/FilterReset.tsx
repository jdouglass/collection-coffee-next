import { useAtom } from 'jotai';
import {
  initialCountryFilter,
  initialProcessFilter,
  initialSort,
  initialVarietyFilter,
  initialVendorFilter,
} from '../../../lib/atom';

export interface IFilterReset {}

const FilterReset: React.FC<IFilterReset> = () => {
  const [sortBy, setSortBy] = useAtom(initialSort);
  const [vendorFilter, setVendorFilter] = useAtom(initialVendorFilter);
  const [varietyFilter, setVarietyFilter] = useAtom(initialVarietyFilter);
  const [countryFilter, setCountryFilter] = useAtom(initialCountryFilter);
  const [processFilter, setProcessFilter] = useAtom(initialProcessFilter);

  const resetFilters = () => {
    setSortBy('Newest to Oldest');
    setVendorFilter([]);
    setVarietyFilter([]);
    setCountryFilter([]);
    setProcessFilter([]);
  };

  return (
    <div className="bg-white w-full items-center px-4 py-4">
      <button
        className="border font-semibold rounded w-24 h-9 bg-white text-sm text-red-700 hover:border-gray-500 drop-shadow-sm disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:font-normal"
        disabled={
          sortBy === 'Newest to Oldest' &&
          vendorFilter.length === 0 &&
          varietyFilter.length === 0 &&
          countryFilter.length === 0 &&
          processFilter.length === 0
        }
        onClick={() => resetFilters()}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterReset;
