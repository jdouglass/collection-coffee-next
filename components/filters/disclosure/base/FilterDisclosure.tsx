'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import useSWR from 'swr';
import { FilterCategory } from '../../../../lib/enums/filterCategory';

export interface IFilterDisclosure {
  section: string;
}

async function getFilterOptions(category: string): Promise<string[]> {
  const API_BASE_URL = process.env.API_BASE_URL as string;
  const res = await fetch(
    `${API_BASE_URL}/api/filterOptions?category=${category.toLowerCase()}`,
    {
      cache: 'no-store',
    }
  );
  if (
    category === FilterCategory.Country ||
    category === FilterCategory.Vendor
  ) {
    return res.json().then((options) => {
      return options.map((elements: any) => {
        return elements[category.toLowerCase()];
      });
    });
  } else if (category === FilterCategory.Process) {
    return res.json().then((options) => {
      return options.map((elements: any) => elements.process_category);
    });
  }
  return res.json().then((options) => {
    const varietySet = new Set<string>();
    options.map((optionsSubArr: { variety: string[] }) => {
      optionsSubArr.variety.map((element) => {
        varietySet.add(element);
      });
    });
    return Array.from(varietySet);
  });
}

const FilterDisclosure: React.FC<IFilterDisclosure> = ({ section }) => {
  const fetcher = () => getFilterOptions(section);
  const filterOptions = useSWR(
    `/api/filterOptions?category=${section.toLowerCase()}`,
    fetcher
  );
  const router = useRouter();
  const pathname = usePathname() as string;
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams!.toString());

  const handleSelectedChange = (e: any) => {
    e.preventDefault();
    if (!params.getAll(section).includes(e.target.value)) {
      params.append(section, e.target.value);
    } else {
      const options = params
        .getAll(section)
        .filter((value) => value !== e.target.value);
      params.delete(section);
      for (const option of options) params.append(section, option);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Disclosure as="div" className="border-b border-gray-200 bg-white py-4">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-2 text-sm text-gray-400 hover:text-gray-500">
            <span className="font-medium text-gray-900">{section}</span>
            <ChevronDownIcon
              className={`${
                open
                  ? 'rotate-180 transform duration-300'
                  : 'transform duration-300'
              } mr-2 h-5 w-5 text-gray-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="pt-4 pl-3">
            <div className="space-y-2">
              {!filterOptions.data ? (
                <div>Loading...</div>
              ) : (
                filterOptions.data.map((option) => (
                  <span key={option} className="flex items-center">
                    <input
                      id={option}
                      type="checkbox"
                      value={option}
                      name={option}
                      className="h-4 w-4 rounded border-gray-300 pr-2 text-indigo-600 hover:cursor-pointer focus:ring-0 focus:ring-offset-0"
                      onChange={(e) => handleSelectedChange(e)}
                      checked={params.getAll(section).includes(option)}
                    />
                    <label
                      htmlFor={option}
                      className="grow items-center px-4 pl-2 text-sm text-gray-600 hover:cursor-pointer"
                    >
                      {option}
                    </label>
                  </span>
                ))
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default FilterDisclosure;
