import { useEffect, useState } from 'react';
import FilterDisclosure from '../../../filters/disclosure/base/FilterDisclosure';

export interface IFilterBarMobile {}

const FilterBarMobile: React.FC<IFilterBarMobile> = () => {
  const [vendorOptions, setVendorOptions] = useState<any>([]);
  const [processCategoryOptions, setProcessCategoryOptions] = useState<any>([]);
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

    fetch('/api/processCategoryList')
      .then((res) => res.json())
      .then((processCategoryResponse) => {
        const processCategoryList: string[] = processCategoryResponse.map(
          (processCategory: any) => processCategory.process_category
        );
        setProcessCategoryOptions(processCategoryList.sort());
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
    <section className="overflow-auto full">
      {isLoading ? (
        <p>Loading filters...</p>
      ) : (
        <>
          <div className="px-4">
            <FilterDisclosure section="Vendor" options={vendorOptions} />
          </div>
          <div className="px-4">
            <FilterDisclosure
              section="Process"
              options={processCategoryOptions}
            />
          </div>
          <div className="px-4">
            <FilterDisclosure section="Country" options={countryOptions} />
          </div>
          <div className="px-4">
            <FilterDisclosure section="Variety" options={varietyOptions} />
          </div>
        </>
      )}
    </section>
  );
};

export default FilterBarMobile;
