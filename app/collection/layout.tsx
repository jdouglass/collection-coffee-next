'use client';

import { Dialog, Transition } from '@headlessui/react';
import { useAtom } from 'jotai';
import { Fragment } from 'react';
import FilterBar from '../../components/utility/filter-bar/FilterBar';
import FilterBarMobile from '../../components/utility/filter-bar/mobile/FilterBarMobile';
import { mobileFilters } from '../../lib/store';

export default function CollectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [viewMobileFilers, setViewMobileFilters] = useAtom(mobileFilters);
  return (
    <section className="max-w-screen-2xl mx-auto flex">
      <Transition.Root show={viewMobileFilers} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-20 xl:hidden"
          onClose={setViewMobileFilters}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <FilterBarMobile />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <FilterBar />
      <section className="w-full">{children}</section>
    </section>
  );
}
