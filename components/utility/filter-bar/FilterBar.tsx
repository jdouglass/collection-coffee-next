import { Transition } from '@headlessui/react';
import { useAtom } from 'jotai';
import { Fragment } from 'react';
import { isFilterBarDisplayed } from '../../../lib/atom';
import FilterClose from '../../buttons/filter-close/FilterClose';
import FilterDisclosure from '../../filters/disclosure/FilterDisclosure';
import { mockFilterDisclosureProps } from '../../filters/disclosure/FilterDisclosure.mocks';
import SortSelect from '../../filters/select/sort/SortSelect';

export interface IFilterBar {}

const FilterBar: React.FC<IFilterBar> = () => {
  const [open] = useAtom(isFilterBarDisplayed);

  return (
    <Transition
      as={Fragment}
      show={open}
      enter="transform transition ease-in-out duration-500"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transform transition ease-in-out duration-500"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
    >
      <section className="h-[calc(100vh-136px)] sticky bg-white overflow-auto top-14 w-72">
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
    </Transition>
  );
};

export default FilterBar;
