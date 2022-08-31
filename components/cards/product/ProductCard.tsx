import Image from 'next/image';
import Link from 'next/link';

export interface IProductCard {
  brand: string;
  title: string;
  price: string;
  weight: number;
  process: string;
  variety: Array<string>;
  country: string;
  product_url: string;
  image_url: string;
  sold_out: boolean;
  vendor: string;
}

const ProductCard: React.FC<IProductCard> = ({
  brand,
  title,
  price,
  weight,
  process,
  variety,
  country,
  product_url,
  image_url,
  sold_out,
  vendor,
}) => {
  return (
    <div className="w-80 h-[490px] bg-white dark:bg-gray-800">
      <Link href={product_url} target="_blank" rel="noopener noreferrer">
        <div className="flex justify-center">
          <Image
            className="object-contain hover:cursor-pointer"
            src={image_url}
            alt={`${brand} ${title} coffee beans`}
            height={210}
            width={270}
          />
        </div>
      </Link>
      <div className="m-4">
        <p className="mb-1 text-xs text-gray-400 dark:text-gray-300">
          Sold by {vendor}
        </p>
        <div className="mb-2 flex justify-between">
          <p className="text-sm align-middle dark:text-gray-200">{brand}</p>
          {sold_out ? (
            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-lg dark:bg-red-200 dark:text-red-900">
              Sold Out
            </span>
          ) : (
            <p className="align middle text-sm dark:text-gray-200">
              ${price} for {weight}g
            </p>
          )}
        </div>
        <div>
          <Link href={product_url} target="_blank" rel="noopener noreferrer">
            <p className="text-md mb-2 leading-5 font-semibold dark:text-gray-200 hover:cursor-pointer">
              {title}
            </p>
          </Link>
        </div>
        <div>
          <p className="text-xs text-gray-400 dark:text-gray-300">Country</p>
          <p className="text-sm mb-2 dark:text-gray-200">{country}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400 dark:text-gray-300">Process</p>
          <p className="text-sm mb-2 dark:text-gray-200">{process}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400 dark:text-gray-300">Variety</p>
          <p className="text-sm mb-2 dark:text-gray-200">
            {variety.join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
