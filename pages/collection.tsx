import { Prisma } from '@prisma/client';
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
  type OrderByDate = {
    date_added: string;
  };

  type OrderByPrice = {
    price: string;
  };

  const { query } = context;
  const orderByQuery =
    query.sort === 'newest'
      ? Prisma.validator<OrderByDate>()({ date_added: 'desc' })
      : query.sort === 'oldest'
      ? Prisma.validator<OrderByDate>()({ date_added: 'asc' })
      : query.sort === 'descending'
      ? Prisma.validator<OrderByPrice>()({ price: 'desc' })
      : query.sort === 'ascending'
      ? Prisma.validator<OrderByPrice>()({ price: 'asc' })
      : Prisma.validator<OrderByDate>()({ date_added: 'desc' });

  const variety = query.Variety
    ? Prisma.validator<Prisma.StringNullableListFilter>()({
        hasSome: query.Variety,
      })
    : undefined;

  const response = await prisma.products.findMany({
    where: {
      AND: [
        {
          vendor: {
            in: query.Vendor,
          },
          process_category: {
            in: query.Process,
          },
          country: {
            in: query.Country,
          },
          variety,
        },
      ],
    },
    orderBy: [orderByQuery],
  });
  return {
    props: {
      products: JSON.parse(JSON.stringify(response)),
    },
  };
}

export default Collection;
