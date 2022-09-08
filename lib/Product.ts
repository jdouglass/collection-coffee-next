export interface Product {
  id: number;
  brand: string;
  title: string;
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
