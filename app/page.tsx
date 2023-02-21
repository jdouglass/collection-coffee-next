import {
  AdjustmentsHorizontalIcon,
  ClockIcon,
  GlobeAmericasIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import LandingStats from '../components/stats/LandingStats';

async function getCount(type?: string): Promise<number> {
  const API_BASE_URL = process.env.API_BASE_URL as string;
  if (type === 'brand' || type === 'vendor') {
    const res = await fetch(
      `${API_BASE_URL}/api/landingPageStats?type=${type}`,
      {
        cache: 'no-store',
      }
    );
    return res.json();
  }
  const res = await fetch(`${API_BASE_URL}/api/landingPageStats`, {
    cache: 'no-store',
  });
  return res.json();
}

export default async function Page() {
  const totalProducts = await getCount();
  const totalVendors = await getCount('vendor');
  const totalBrands = await getCount('brand');
  const features = [
    {
      name: 'Updated hourly.',
      description:
        'With hourly web crawling, stay up to date with the latest coffee beans available in the market and never miss out on a new release.',
      icon: ClockIcon,
    },
    {
      name: 'Advanced filtering.',
      description:
        'Easily sort and filter through hundreds of coffee beans in several different ways to find your perfect match.',
      icon: AdjustmentsHorizontalIcon,
    },
    {
      name: 'Extensive collection.',
      description:
        'Discover a vast collection of coffee beans from different specialty coffee roasters across North America, all in one centralized hub, and never run out of options for your next cup of coffee.',
      icon: GlobeAmericasIcon,
    },
  ];

  return (
    <>
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-5xl pt-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Discover coffee beans from around the world, all in one place
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Experience the thrill of discovering new coffee beans every hour
              with our coffee bean aggregator. Our advanced web crawling
              technology ensures that you never miss out on the latest and
              greatest beans, while our powerful filters help you find the
              perfect cup for your morning routine.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/collection"
                className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Explore the collection
              </Link>
            </div>
          </div>
          <LandingStats
            totalProducts={totalProducts}
            totalVendors={totalVendors}
            totalBrands={totalBrands}
          />
          <div className="overflow-hidden pt-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-8 lg:pt-4">
                  <div className="lg:max-w-lg">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      Your one-stop shop
                    </p>
                    <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                      {features.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                          <dt className="inline font-semibold text-gray-900">
                            <feature.icon
                              className="absolute top-1 left-1 h-5 w-5 text-indigo-600"
                              aria-hidden="true"
                            />
                            {feature.name}
                          </dt>{' '}
                          <dd className="inline">{feature.description}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
                <Image
                  src="/collection-coffee-product-page.png"
                  alt="Product screenshot"
                  className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
          <div className="mt-20 flex items-center justify-center gap-x-6">
            <Link
              href="/collection"
              className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Explore the collection
            </Link>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <svg
            className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
}
