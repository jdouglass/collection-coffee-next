import { ReactElement } from 'react';
import ProductCard from '../components/cards/product/ProductCard';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import FilterBar from '../components/utility/filter-bar/FilterBar';
import { mockFilterBarProps } from '../components/utility/filter-bar/FilterBar.mocks';
import { prisma } from '../lib/prisma';
import { Product } from '../lib/Product';

export interface ProductProps {
  products: Product[];
}

export function Collection({ products }: any) {
  return (
    <>
      <div className="flex">
        <FilterBar {...mockFilterBarProps.base} />
        <div className="flex grow">
          <div className="grid grid-cols-4 place-items-center pt-4 basis-full content-start">
            {products.map((product: any) => {
              return <ProductCard key={product.id} {...product} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

Collection.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export async function getServerSideProps() {
  const response = await prisma.products.findMany();
  return {
    props: {
      products: JSON.parse(JSON.stringify(response)),
    },
  };
}

export default Collection;
