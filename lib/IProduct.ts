export interface IProduct {
  id: number;
  brand: string;
  title: string;
  weight: number;
  price: string;
  process: string;
  variety: string;
  country: string;
  product_url: string;
  image_url: string;
  sold_out: boolean;
  date_added: Date;
  vendor: string;
  handle: string;
  tasting_notes: string;
  vendor_location: string;
  default_currency: string;
}
