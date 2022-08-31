import { ReactElement } from 'react';
import ProductCard from '../components/cards/product/ProductCard';
import { mockProductCardProps } from '../components/cards/product/ProductCard.mocks';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import FilterBar from '../components/utility/filter-bar/FilterBar';
import { mockFilterBarProps } from '../components/utility/filter-bar/FilterBar.mocks';
import FilterUtility from '../components/utility/filter-utility/FilterUtility';
import { mockFilterUtilityProps } from '../components/utility/filter-utility/FilterUtility.mocks';
import { NextPageWithLayout } from './_app';

const Collection: NextPageWithLayout = () => {
  return (
    <>
      <FilterUtility {...mockFilterUtilityProps.base} />
      <div className="flex">
        <FilterBar {...mockFilterBarProps.base} />
        <div className="flex grow">
          <div className="grid grid-cols-4 place-items-center pt-4 basis-full content-start">
            {[...new Array(4)].map((_, idx) => {
              return <ProductCard key={idx} {...mockProductCardProps.base} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

Collection.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Collection;
