export interface ICombinedResultsCount {
  total: number;
  roaster: {
    [x: string]: string;
  };
  vendor: {
    [x: string]: string;
  };
  process_category: {
    [x: string]: string;
  };
  country: {
    [x: string]: string;
  };
  variety: {
    [x: string]: string;
  };
  tasting_notes: {
    [x: string]: string;
  };
  vendor_location: {
    [x: string]: string;
  };
}
