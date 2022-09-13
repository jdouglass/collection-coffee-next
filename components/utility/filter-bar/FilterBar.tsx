import CountryFilter from '../../filters/disclosure/country/CountryFilter';
import ProcessFilter from '../../filters/disclosure/process/ProcessFilter';
import VarietyFilter from '../../filters/disclosure/variety/VarietyFilter';
import VendorFilter from '../../filters/disclosure/vendor/VendorFilter';
import SortSelect from '../../filters/select/sort/SortSelect';

export interface IFilterBar {
  products: any;
}

const FilterBar: React.FC<IFilterBar> = ({ products }: any) => {
  let uniqueVendorList: string[] = Array.from(
    new Set(products.map((product: { brand: string }) => product.brand))
  );
  uniqueVendorList.sort();

  let uniqueProcessList: string[] = Array.from(
    new Set(
      products.map(
        (product: { process_category: string }) => product.process_category
      )
    )
  );
  uniqueProcessList.sort();

  let uniqueCountryList: string[] = Array.from(
    new Set(products.map((product: { country: string }) => product.country))
  );
  uniqueCountryList.sort();

  let uniqueVarietyList: string[] = products
    .map((product: { variety: string[] }) =>
      product.variety.map((varietyElement) => varietyElement)
    )
    .flat();
  uniqueVarietyList = Array.from(new Set(uniqueVarietyList)).sort();

  return (
    <section className="h-[calc(100vh-80px)] sticky bg-white overflow-auto top-0 w-72">
      <div className="pt-4 px-4">
        <SortSelect />
      </div>
      <div className="pt-4 px-4">
        <VendorFilter options={uniqueVendorList} />
      </div>
      <div className="pt-4 px-4">
        <ProcessFilter options={uniqueProcessList} />
      </div>
      <div className="pt-4 px-4">
        <CountryFilter options={uniqueCountryList} />
      </div>
      <div className="pt-4 px-4">
        <VarietyFilter options={uniqueVarietyList} />
      </div>
    </section>
  );
};

export default FilterBar;
