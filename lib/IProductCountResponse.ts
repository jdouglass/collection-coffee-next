export interface IProductCountResponse {
  brand: string;
  process_category: string;
  variety: string[];
  country: string;
  vendor: string;
  tasting_notes: string[];
  vendor_location: string | null;
}
