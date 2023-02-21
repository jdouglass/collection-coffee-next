'use client';

import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import useSWRInfinite from 'swr/infinite';
import ProductCard from '../../components/cards/product/ProductCard';
import LoadingSpinner from '../../components/spinner/LoadingSpinner';
import FilterUtility from '../../components/utility/filter-utility/FilterUtility';
import { IProduct } from '../../lib/IProduct';

export interface IProductProps {
  products: IProduct[];
}

export default function Page() {
  const [isAtTheEnd, setIsAtTheEnd] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();
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
      return `/api/products?${searchParams.toString()}`;
    } else {
      lastId = previousPageData[previousPageData.length - 1].id;
    }

    // add the cursor to the API endpoint
    if (searchParams.values()) {
      return `/api/products?${searchParams.toString()}&cursor=${lastId}`;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  useEffect(() => {
    setIsAtTheEnd(false);
  }, [router]);

  if (error) {
    return (
      <div className="flex justify-center pt-20">Failed to load products</div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center pb-10">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      <div>
        <FilterUtility />
        {!data ? (
          <div className="flex justify-center">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 place-items-center basis-full items-start">
            {data.flat(1).map((product: any) => {
              return <ProductCard key={product.id} {...product} />;
            })}
          </div>
        )}
      </div>
      {isValidating ? (
        <div className="flex justify-center pb-10">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="flex justify-center my-10">End of results</div>
      )}
      <span className="invisible" ref={ref}>
        Intersection Observer Marker
      </span>
    </>
  );
}
