import { useEffect, useState } from 'react';
import { FilterCategory } from '../../../lib/enums/filterCategory';
import { processCategoryOptions } from '../../../lib/processCategory';
import FilterDisclosure from '../../filters/disclosure/base/FilterDisclosure';

export interface IFilterBar {}

const FilterBar: React.FC<IFilterBar> = () => {
  const [vendorOptions, setVendorOptions] = useState<any>([]);
  const [countryOptions, setCountryOptions] = useState<any>([]);
  const [varietyOptions, setVarietyOptions] = useState<any>([]);
  const [isLoading, setLoading] = useState<any>(false);

  useEffect(() => {
    setLoading(true);
    fetch('/api/vendorList')
      .then((res) => res.json())
      .then((vendorResponse) => {
        const vendorList: string[] = vendorResponse.map(
          (vendorElement: any) => vendorElement.vendor
        );
        setVendorOptions(vendorList);
      });

    fetch('/api/countryList')
      .then((res) => res.json())
      .then((countryResponse) => {
        const countryList: string[] = countryResponse.map(
          (country: any) => country.country
        );
        setCountryOptions(countryList.sort());
      });

    fetch('/api/varietyList')
      .then((res) => res.json())
      .then((varietyResponse) => {
        const varietySet = new Set();
        varietyResponse.map((varietySubArray: { variety: any[] }) => {
          varietySubArray.variety.map((varietyElement: any) => {
            varietySet.add(varietyElement);
          });
        });
        setVarietyOptions(Array.from(varietySet).sort());
      });
    setLoading(false);
  }, []);

  return (
    <section className="h-[calc(100vh-120px)] float-left w-72 sticky top-[120px] bg-white overflow-auto hidden xl:block">
      {isLoading ? (
        <p>Loading filters...</p>
      ) : (
        <>
          <div className="px-4">
            <FilterDisclosure
              section={FilterCategory.Vendor}
              options={vendorOptions}
            />
          </div>
          <div className="px-4">
            <FilterDisclosure
              section={FilterCategory.Process}
              options={processCategoryOptions}
            />
          </div>
          <div className="px-4">
            <FilterDisclosure
              section={FilterCategory.Country}
              options={countryOptions}
            />
          </div>
          <div className="px-4">
            <FilterDisclosure
              section={FilterCategory.Variety}
              options={varietyOptions}
            />
          </div>
        </>
      )}
    </section>
  );
};

export default FilterBar;
