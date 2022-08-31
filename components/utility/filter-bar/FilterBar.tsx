import FilterClose from '../../buttons/filter-close/FilterClose';
import FilterDisclosure from '../../filters/disclosure/FilterDisclosure';
import { mockFilterDisclosureProps } from '../../filters/disclosure/FilterDisclosure.mocks';
import SortSelect from '../../filters/select/sort/SortSelect';

export interface IFilterBar {}

const FilterBar: React.FC<IFilterBar> = () => {
  return (
    <section className="h-[calc(100vh-80px)] sticky bg-white overflow-auto top-0 w-72">
      <FilterClose />
      <div className="pt-4 px-4">
        <SortSelect />
      </div>
      <div className="pt-4 px-4">
        <FilterDisclosure
          section="Vendor"
          options={mockFilterDisclosureProps.base.options}
        />
      </div>
      <div className="pt-4 px-4">
        <FilterDisclosure
          section="Varieties"
          options={mockFilterDisclosureProps.base.options}
        />
      </div>
      <div className="pt-4 px-4">
        <FilterDisclosure
          section="Country"
          options={mockFilterDisclosureProps.base.options}
        />
      </div>
      <div className="pt-4 px-4">
        <FilterDisclosure
          section="Process"
          options={mockFilterDisclosureProps.base.options}
        />
      </div>
    </section>
  );
};

export default FilterBar;
