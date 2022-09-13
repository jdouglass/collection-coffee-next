import { GetServerSidePropsContext } from 'next';
import { ReactElement } from 'react';
import ProductCard from '../components/cards/product/ProductCard';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import FilterBar from '../components/utility/filter-bar/FilterBar';
import { IProduct } from '../lib/IProduct';
import { prisma } from '../lib/prisma';

export interface IProductProps {
  products: IProduct[];
}

export function Collection({ products }: IProductProps) {
  return (
    <>
      <div className="flex overflow-y-scroll h-[calc(100vh-80px)]">
        <FilterBar products={products} />
        <div className="flex grow">
          <div className="grid grid-cols-4 gap-y-7 place-items-center pt-4 basis-full content-start">
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  console.log(context);
  const response = await prisma.products.findMany({
    orderBy: [
      {
        date_added: 'desc',
      },
    ],
  });
  return {
    props: {
      products: JSON.parse(JSON.stringify(response)),
    },
  };
}

export default Collection;
