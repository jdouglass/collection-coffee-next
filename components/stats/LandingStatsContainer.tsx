import NumberCounter from './numberCounter/NumberCounter';

export interface ILandingStatsContainer {
  totalProducts: number;
  totalVendors: number;
  totalBrands: number;
}

const LandingStatsContainer: React.FC<ILandingStatsContainer> = ({
  totalProducts,
  totalVendors,
  totalBrands,
}: {
  totalProducts: number;
  totalVendors: number;
  totalBrands: number;
}) => {
  return (
    <div className="py-10 my-56 rounded-xl shadow-xl ring-1 ring-gray-400/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">
              Coffee products found
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              <NumberCounter value={totalProducts} />
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">
              Vendors across North America
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              <NumberCounter value={totalVendors} />
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">
              Unique coffee roasters
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              <NumberCounter value={totalBrands} />
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default LandingStatsContainer;
