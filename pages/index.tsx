import axios from 'axios';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import useSWRInfinite from 'swr/infinite';
import ProductCard from '../components/cards/product/ProductCard';
import CollectionLayout from '../components/layouts/collection/CollectionLayout';
import LoadingSpinner from '../components/spinner/LoadingSpinner';
import { IProduct } from '../lib/IProduct';

export interface IProductProps {
  products: IProduct[];
}

export function Collection() {
  const [isAtTheEnd, setIsAtTheEnd] = useState<boolean>(false);
  const router = useRouter();
  const { ref, inView } = useInView();
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const getKey = (pageIndex: number, previousPageData: any) => {
    let lastId: number | string = '';

    // reached the end
    if (pageIndex >= 1 && previousPageData.length === 0) {
      setIsAtTheEnd(true);
      return null;
    }

    // first page, we don't have `previousPageData`
    if (pageIndex === 0) {
      return `/api/products${router.asPath}`;
    } else {
      lastId = previousPageData[previousPageData.length - 1].id;
    }

    // add the cursor to the API endpoint
    if (router.asPath !== '/') {
      return `/api/products${router.asPath}&cursor=${lastId}`;
    }
    return `/api/products?cursor=${lastId}`;
  };

  const { data, size, setSize, error, isValidating } = useSWRInfinite<
    IProduct[]
  >(getKey, fetcher);

  useEffect(() => {
    if (!isAtTheEnd && inView) {
      setSize(size + 1);
    }
    console.log(isAtTheEnd);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  if (error) return <div>Failed to load</div>;
  if (!data) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className="flex grow">
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-y-3 place-items-center pt-4 basis-full content-start">
          {data.flat(1).map((product: any) => {
            return <ProductCard key={product.id} {...product} />;
          })}
        </div>
      </div>
      {isValidating ? (
        <div className="flex justify-center pb-10">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="flex justify-center">End of results</div>
      )}
      <span className="invisible" ref={ref}>
        Intersection Observer Marker
      </span>
    </>
  );
}

Collection.getLayout = function getLayout(page: ReactElement) {
  return <CollectionLayout>{page}</CollectionLayout>;
};

export async function getServerSideProps(context: any) {
  return {
    props: {
      query: context.query,
    },
  };
}

export default Collection;
