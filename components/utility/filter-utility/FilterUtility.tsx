'use client';

import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { useAtom } from 'jotai';
import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';
import useScroll from '../../../lib/hooks/useScroll';
import { ICombinedResultsCount } from '../../../lib/ICombinedResultsCounts';
import { mobileFilters } from '../../../lib/store';
import SortSelect from '../../filters/select/sort/SortSelect';

export interface IFilterUtility {}

const getProductCount = async (
  searchParams: string
): Promise<ICombinedResultsCount> => {
  const API_BASE_URL = process.env.API_BASE_URL as string;
  const res = await fetch(
    `${API_BASE_URL}/api/productResultsCount?${searchParams}`,
    { cache: 'no-store' }
  );
  return res.json();
};

const FilterUtility: React.FC<IFilterUtility> = () => {
  const searchParams = useSearchParams();
  const fetcher = () => getProductCount(searchParams!.toString());
  const productCount = useSWR(
    `/api/productResultsCount?${searchParams!.toString()}`,
    fetcher
  );
  const [, setViewMobileFilters] = useAtom(mobileFilters);
  const scrolled = useScroll(50);

  return (
    <section
      className={`grid max-md:grid-cols-2 xl:grid-cols-2 grid-cols-3 bg-white w-full items-center sticky top-16 py-1 z-10 ${
        scrolled ? 'border-b border-gray-200' : 'bg-white'
      }
      `}
    >
      <div className="pl-5 min-w-fit w-fit max-md:hidden">
        <SortSelect />
      </div>
      <span className="flex xl:justify-end justify-center xl:pr-5 max-md:justify-start">
        <p className="flex pl-4 font-semibold text-sm">
          {productCount.data?.total ? productCount.data.total : 0}
        </p>
        <p className="text-sm pl-2">products found</p>
      </span>
      <div className="flex grow-0 xl:hidden justify-end pr-5">
        <button
          className="flex items-center"
          onClick={() => setViewMobileFilters(true)}
        >
          <AdjustmentsHorizontalIcon className="h-5 w-5 mr-2" />
          <p className="font-semibold">View Filters</p>
        </button>
      </div>
    </section>
  );
};

export default FilterUtility;
