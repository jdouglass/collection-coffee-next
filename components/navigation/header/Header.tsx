'use client';

import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import CollectionCoffeeLogo from '../../../public/collection-coffee-logo.svg';
import DiscordIcon from '../../../public/discord-logo.svg';

export interface IHeader {}

const navigation = [
  { name: 'Collection', href: '/collection' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Header: React.FC<IHeader> = () => {
  const currentRoute = usePathname();
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-20 border-b backdrop-blur-lg shadow-sm bg-white/50"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-screen-2xl px-2 md:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 h-full items-center justify-center md:items-stretch md:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <Disclosure.Button>
                      <CollectionCoffeeLogo
                        className="block h-11 w-auto"
                        alt="Collection Coffee Logo"
                      />
                    </Disclosure.Button>
                  </Link>
                </div>
                <div className="hidden md:ml-10 md:block">
                  <div className="flex space-x-4 h-full items-center">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          `${item.href}` === currentRoute
                            ? 'border-b-2 border-gray-700'
                            : 'hover:border-b-2 hover:border-gray-700 border-b-2 border-transparent',
                          'px-3 py-2 text-sm font-medium h-full flex items-center text-black'
                        )}
                        aria-current={
                          `${item.href}` === currentRoute ? 'page' : undefined
                        }
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                <Link href="https://discord.gg/znAa5Z4Wg4" target="_blank">
                  <button
                    type="button"
                    className="rounded-full bg-gray-700 p-1 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700"
                  >
                    <span className="sr-only">Visit Discord</span>
                    <DiscordIcon
                      className="h-6 w-6 fill-white hover:fill-gray-200"
                      aria-hidden="true"
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    `${item.href}` === currentRoute
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-700 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={
                    `${item.href}` === currentRoute ? 'page' : undefined
                  }
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
