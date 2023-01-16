import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import Logo from '../../../public/collection-coffee-logo.svg';
import Bars3Icon from '../../../public/icons/bars3.svg';
import XMarkIcon from '../../../public/icons/x-mark.svg';

export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  const router = useRouter();
  return (
    <Popover className="sticky top-0 bg-white z-20">
      <nav className="grid grid-cols-3 h-20 border-b bg-white mx-4">
        <div className="flex h-20 items-center justify-start pl-2">
          <Link href="/">
            <a
              onClick={() => {
                if (router.asPath === '/') {
                  router.replace('/');
                  window.location.reload();
                }
              }}
            >
              <span className="sr-only">Collection Coffee</span>
              <Logo
                className="h-12 hover:cursor-pointer fill-gray-900"
                alt="Collection Coffee logo"
              />
            </a>
          </Link>
        </div>
        <div className="hidden lg:flex w-full items-center justify-center font-medium text-gray-900 space-x-20">
          <Link href="/">
            <button
              className="hover:text-indigo-500"
              onClick={() => {
                if (router.asPath === '/') {
                  router.replace('/');
                  window.location.reload();
                }
              }}
            >
              Collection
            </button>
          </Link>
          <Link href="/about">
            <button className="hover:text-indigo-500">About</button>
          </Link>
          <Link href="/contact">
            <button className="hover:text-indigo-500">Contact</button>
          </Link>
        </div>
        <div className="-my-2 -mr-2 inline-flex items-center justify-end w-full col-span-2 lg:col-span-1 lg:hidden">
          <Popover.Button className="rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
      </nav>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden z-20"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Logo
                    className="h-12 hover:cursor-pointer"
                    alt="Collection Coffee logo"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <button className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                    <Link href="/">
                      <span
                        className="ml-3 text-base font-medium text-gray-900 w-full h-full"
                        onClick={() => {
                          if (router.asPath === '/') {
                            router.replace('/');
                            window.location.reload();
                          }
                        }}
                      >
                        Collection
                      </span>
                    </Link>
                  </button>
                  <button className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                    <Link href="/about">
                      <span className="ml-3 text-base font-medium text-gray-900 w-full h-full">
                        About
                      </span>
                    </Link>
                  </button>
                  <button className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                    <Link href="/contact">
                      <span className="ml-3 text-base font-medium text-gray-900 w-full h-full">
                        Contact
                      </span>
                    </Link>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;
