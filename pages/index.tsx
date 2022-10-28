import axios from 'axios';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import useSWRInfinite from 'swr/infinite';
import ProductCard from '../components/cards/product/ProductCard';
import SkeletonProductCard, {
  ISkeletonProductCard,
} from '../components/cards/skeleton/SkeletonProductCard';
import CollectionLayout from '../components/layouts/collection/CollectionLayout';
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

  const { data, size, setSize, error } = useSWRInfinite<IProduct[]>(
    getKey,
    fetcher
  );

  useEffect(() => {
    if (!isAtTheEnd && inView) {
      setSize(size + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  if (error) return <div>Failed to load</div>;
  if (!data) {
    const limit = 12;
    const skeletonCards: ISkeletonProductCard[] = [];
    for (let i = 0; i < limit; i++) {
      skeletonCards.push(<SkeletonProductCard />);
    }
    return (
      <div className="flex grow">
        <div className="grid grid-cols-4 gap-y-7 place-items-center pt-4 basis-full content-start">
          {skeletonCards.map((_card: ISkeletonProductCard, index: number) => {
            // eslint-disable-next-line react/jsx-key
            return <SkeletonProductCard key={index} />;
          })}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex grow">
        <div className="grid grid-cols-4 gap-y-7 place-items-center pt-4 basis-full content-start">
          {data.flat(1).map((product: any) => {
            return <ProductCard key={product.id} {...product} />;
          })}
        </div>
      </div>
      <span className="invisible" ref={ref}>
        Intersection Observer Marker
      </span>
    </>
  );
}

Collection.getLayout = function getLayout(page: ReactElement) {
  return <CollectionLayout>{page}</CollectionLayout>;
};

export default Collection;
