import { IFilterBar } from './FilterBar';

const base: IFilterBar = {
  productCounts: {
    total: 100,
    roaster: {},
    vendor: {},
    country: {},
    process_category: {},
    vendor_location: {},
    tasting_notes: {},
    variety: {},
  },
};

export const mockFilterBarProps = {
  base,
};
