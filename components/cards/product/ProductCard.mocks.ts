import { IProductCard } from './ProductCard';

const base: IProductCard = {
  brand: 'Monogram',
  title: 'Maximino Gutiérrez Tejada',
  price: '20.00',
  weight: 340,
  process: 'Washed',
  variety: ['Gesha', 'Pink Bourbon'],
  country: 'Mexico',
  product_url:
    'https://monogramcoffee.com/collections/whole-bean-coffee/products/florestales-filter?variant=40434093817909',
  image_url:
    'https://collection-coffee-product-images-dev.s3.ca-central-1.amazonaws.com/https%3A//monogramcoffee.com/collections/whole-bean-coffee/products/rafael-amaya-filter%3Fvariant%3D40583905607733',
  sold_out: false,
  vendor: 'Monogram',
  date_added: new Date(),
  handle: 'florestales-filter',
};

export const mockProductCardProps = {
  base,
};
