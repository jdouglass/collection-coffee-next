import {
  AdjustmentsHorizontalIcon,
  ClockIcon,
  GlobeAmericasIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';

export interface ILandingFeatures {}

const LandingFeatures: React.FC<ILandingFeatures> = () => {
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
  );
};

export default LandingFeatures;
