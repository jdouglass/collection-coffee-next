import { Dialog, Transition } from '@headlessui/react';
import Head from 'next/head';
import { Fragment, useState } from 'react';
import FunnelIcon from '../../../public/icons/funnel-solid.svg';
import XMarkIcon from '../../../public/icons/x-mark.svg';
import SortSelect from '../../filters/select/sort/SortSelect';
import Header from '../../navigation/header/Header';
import FilterBar from '../../utility/filter-bar/FilterBar';
import FilterBarMobile from '../../utility/filter-bar/mobile/FilterBarMobile';

export interface ICollectionLayout {}

const CollectionLayout: React.FC<ICollectionLayout> = ({ children }: any) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Collection Coffee</title>
      </Head>
      <Header />

      <div className="bg-white">
        <div>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
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

              <div className="fixed inset-0 z-40 flex">
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
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    <FilterBarMobile />
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <main className="mx-auto max-w-[1700px] px-4 bg-white">
            <div className="sticky top-0 z-40 bg-white">
              <div className="flex items-center pl-4">
                <SortSelect />
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="col-span-1">
                  <FilterBar />
                </div>
                <div className="col-span-4">
                  <div>{children}</div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default CollectionLayout;
