import Image from 'next/image';

export interface IProductCard {
  brand: string;
  title: string;
  price: string;
  weight: number;
  process: string;
  variety: string[];
  country: string;
  product_url: string;
  image_url: string;
  sold_out: boolean;
  date_added: Date;
  vendor: string;
  handle: string;
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
    <div className="max-w-80 xs:max-w-xs h-full bg-white m-2 p-2 border shadow-sm border-gray-200">
      <a href={product_url} target="_blank" rel="noopener noreferrer">
        <div className="flex justify-center h-60 w-full">
          <Image
            className={`${
              brand === 'Monogram' ||
              brand === 'Manhattan' ||
              vendor === 'Pallet Coffee Roasters'
                ? 'object-contain'
                : 'object-cover'
            } hover:cursor-pointer rounded-md`}
            src={image_url}
            alt={`${brand} ${title} coffee beans`}
            height={260}
            width={300}
            blurDataURL={image_url}
            placeholder="blur"
          />
        </div>
      </a>
      <div className="m-2 w-11/12">
        <p className="mb-1 text-xs text-gray-400">Sold by {vendor}</p>
        <div className="mb-2 flex justify-between">
          <p className="text-sm align-middle">{brand}</p>
          {sold_out ? (
            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-lg">
              Sold Out
            </span>
          ) : (
            <p className="align middle text-sm">
              ${price} for {weight}g
            </p>
          )}
        </div>
        <div>
          <a href={product_url} target="_blank" rel="noopener noreferrer">
            <p className="title-text text-md mb-2 leading-5 font-semibold hover:cursor-pointer group-hover:text-indigo-600">
              {title}
            </p>
          </a>
        </div>
        <div>
          <p className="text-xs text-gray-400">Country</p>
          <p className="text-sm mb-2 line-clamp-1">{country}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">Process</p>
          <p className="text-sm mb-2 line-clamp-2">{process}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">Variety</p>
          <p className="text-sm mb-2 line-clamp-2">
            {variety ? variety.join(', ') : 'Unknown'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
