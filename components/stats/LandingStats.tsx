'use client';

import { useEffect, useState } from 'react';

export interface ILandingStats {
  totalProducts: number;
  totalVendors: number;
  totalBrands: number;
}

const easeOutQuad = (t: number, b: number, c: number, d: number) => {
  t /= d;
  return Math.round(-c * t * (t - 2) + b);
};

const LandingStats: React.FC<ILandingStats> = ({
  totalProducts,
  totalVendors,
  totalBrands,
}: {
  totalProducts: number;
  totalVendors: number;
  totalBrands: number;
}) => {
  const start = 0;
  const productDuration = 3000;
  const vendorDuration = 2000;
  const brandDuration = 2750;

  const [totalProductsCount, setTotalProductsCount] = useState(start);
  const [totalVendorsCount, setTotalVendorsCount] = useState(start);
  const [totalBrandsCount, setTotalBrandsCount] = useState(start);

  useEffect(() => {
    let startTime: number | undefined;
    const animateProductCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const timePassed = timestamp - startTime;
      const progress = timePassed / productDuration;
      const currentCount = easeOutQuad(progress, 0, totalProducts, 1);
      if (currentCount >= totalProducts) {
        setTotalProductsCount(totalProducts);
        return;
      }
      setTotalProductsCount(currentCount);
      requestAnimationFrame(animateProductCount);
    };
    requestAnimationFrame(animateProductCount);
    const animateVendorCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const timePassed = timestamp - startTime;
      const progress = timePassed / vendorDuration;
      const currentCount = easeOutQuad(progress, 0, totalVendors, 1);
      if (currentCount >= totalVendors) {
        setTotalVendorsCount(totalVendors);
        return;
      }
      setTotalVendorsCount(currentCount);
      requestAnimationFrame(animateVendorCount);
    };
    requestAnimationFrame(animateVendorCount);
    const animateBrandCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const timePassed = timestamp - startTime;
      const progress = timePassed / brandDuration;
      const currentCount = easeOutQuad(progress, 0, totalBrands, 1);
      if (currentCount >= totalBrands) {
        setTotalBrandsCount(totalBrands);
        return;
      }
      setTotalBrandsCount(currentCount);
      requestAnimationFrame(animateBrandCount);
    };
    requestAnimationFrame(animateBrandCount);
  }, [
    totalProducts,
    totalVendors,
    totalBrands,
    productDuration,
    vendorDuration,
    brandDuration,
  ]);

  return (
    <div className="py-10 my-56 rounded-xl shadow-xl ring-1 ring-gray-400/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">
              Coffee products found
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {Intl.NumberFormat().format(totalProductsCount)}
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">
              Vendors across North America
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {Intl.NumberFormat().format(totalVendorsCount)}
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">
              Unique coffee roasters
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {Intl.NumberFormat().format(totalBrandsCount)}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default LandingStats;
