'use client';

import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { useAtom } from 'jotai';
import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';
import { mobileFilters } from '../../../lib/store';

export interface IFilterUtility {}

const getProductCount = async (searchParams: string): Promise<number> => {
  const API_BASE_URL = process.env.API_BASE_URL as string;
  const res = await fetch(
    `${API_BASE_URL}/api/productResultsCount?${searchParams}`,
    { cache: 'no-store' }
  );
  return res.json();
};

const FilterUtility: React.FC<IFilterUtility> = () => {
  const searchParams = useSearchParams();
  const fetcher = () => getProductCount(searchParams.toString());
  const productCount = useSWR(
    `/api/productResultsCount?${searchParams.toString()}`,
    fetcher
  );
  const [, setViewMobileFilters] = useAtom(mobileFilters);

  return (
    <section className="grid grid-cols-2 bg-white w-full h-8 items-center">
      <span className="flex">
        <p className="flex text-blue-500 pl-4 font-semibold">
          {productCount.data ? productCount.data : 0}
        </p>
        <p className="pl-2">products found</p>
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
