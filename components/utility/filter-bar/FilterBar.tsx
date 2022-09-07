import { mockFilterDisclosureProps } from '../../filters/disclosure/base/FilterDisclosure.mocks';
import CountryFilter from '../../filters/disclosure/country/CountryFilter';
import ProcessFilter from '../../filters/disclosure/process/ProcessFilter';
import VarietyFilter from '../../filters/disclosure/variety/VarietyFilter';
import VendorFilter from '../../filters/disclosure/vendor/VendorFilter';
import SortSelect from '../../filters/select/sort/SortSelect';

export interface IFilterBar {}

const FilterBar: React.FC<IFilterBar> = () => {
  return (
    <section className="h-[calc(100vh-80px)] sticky bg-white overflow-auto top-0 w-72">
      <div className="pt-4 px-4">
        <SortSelect />
      </div>
      <div className="pt-4 px-4">
        <VendorFilter options={mockFilterDisclosureProps.base.options} />
      </div>
      <div className="pt-4 px-4">
        <ProcessFilter options={mockFilterDisclosureProps.base.options} />
      </div>
      <div className="pt-4 px-4">
        <CountryFilter options={mockFilterDisclosureProps.base.options} />
      </div>
      <div className="pt-4 px-4">
        <VarietyFilter options={mockFilterDisclosureProps.base.options} />
      </div>
    </section>
  );
};

export default FilterBar;
