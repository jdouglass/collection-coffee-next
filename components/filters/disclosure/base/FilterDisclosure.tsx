'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useAtom } from 'jotai';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { FilterCategory } from '../../../../lib/enums/filterCategory';
import { filtersBeingUsed } from '../../../../lib/store';

export interface IFilterDisclosure {
  section: string;
}

async function getFilterOptions(category: string): Promise<string[]> {
  const API_BASE_URL = process.env.API_BASE_URL as string;
  const res = await fetch(
    `${API_BASE_URL}/api/filterOptions?category=${category
      .toLowerCase()
      .replaceAll(' ', '_')}`,
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
  } else if (category === FilterCategory.VendorLocation) {
    return res.json().then((options) => {
      return options.map((elements: any) => elements.vendor_location);
    });
  } else if (category === FilterCategory.Process) {
    return res.json().then((options) => {
      return options.map((elements: any) => elements.process_category);
    });
  } else if (category === FilterCategory.Roaster) {
    return res.json().then((options) => {
      return options.map((elements: any) => elements.brand);
    });
  } else if (category === FilterCategory.TastingNotes) {
    const tastingNotesSet = new Set<string>();
    await res.json().then((arrays) => {
      arrays.map((subArr: { tasting_notes: string[] }) => {
        subArr.tasting_notes.map((element) => tastingNotesSet.add(element));
      });
    });
    return Array.from(tastingNotesSet).sort();
  }
  return res.json().then((options) => {
    const varietySet = new Set<string>();
    options.map((optionsSubArr: { variety: string[] }) => {
      optionsSubArr.variety.map((element) => {
        varietySet.add(element);
      });
    });
    return Array.from(varietySet).sort();
  });
}

const FilterDisclosure: React.FC<IFilterDisclosure> = ({ section }) => {
  const fetcher = () => getFilterOptions(section);
  const filterOptions = useSWR(
    `/api/filterOptions?category=${section
      .toLowerCase()
      .replaceAll(' ', '_')!}`,
    fetcher
  );
  const router = useRouter();
  const pathname = usePathname() as string;
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams!.toString());
  const [checkedCount, setCheckedCount] = useState<number>(
    params.getAll(section).length
  );
  const [, setfiltersBeingUsedState] = useAtom(filtersBeingUsed);

  useEffect(() => {
    if (!searchParams!.toString().length) {
      setCheckedCount(0);
    }
  }, [searchParams]);

  const handleSelectedChange = (e: any) => {
    if (!params.getAll(section).includes(e.target.value)) {
      params.append(section, e.target.value);
      setfiltersBeingUsedState(true);
      setCheckedCount(checkedCount + 1);
    } else {
      const options = params
        .getAll(section)
        .filter((value) => value !== e.target.value);
      params.delete(section);
      for (const option of options) params.append(section, option);
      setCheckedCount(params.getAll(section).length);
    }
    router.push(`${pathname}?${params.toString()}`);
    setCheckedCount(params.getAll(section).length);
  };

  return (
    <Disclosure as="div" className="border-b border-gray-200 bg-white">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-6 pl-3 text-sm text-gray-400 hover:text-gray-500 hover:bg-slate-50">
            <span className="font-medium text-gray-900">{section}</span>
            <div>
              <div className="flex">
                {checkedCount ? (
                  <div className="bg-rose-100 w-6 h-4 rounded-full border border-red-500 text-red-700 font-semibold text-xs flex items-center justify-center mr-3">
                    {checkedCount}
                  </div>
                ) : undefined}
                <ChevronDownIcon
                  className={`${
                    open
                      ? 'rotate-180 transform duration-300'
                      : 'transform duration-300'
                  } mr-2 h-5 w-5 text-gray-500`}
                />
              </div>
            </div>
          </Disclosure.Button>
          <Disclosure.Panel className="pt-4 pl-3">
            <div className="space-y-2 pb-6">
              {!filterOptions.data ? (
                <div>Loading...</div>
              ) : (
                filterOptions.data.map((option) => (
                  <span
                    key={`${section} ${option}`}
                    className="flex items-center"
                  >
                    <input
                      id={`${section} ${option}`}
                      type="checkbox"
                      value={option}
                      name={`${section} ${option}`}
                      className="h-4 w-4 rounded border-gray-300 pr-2 text-indigo-600 hover:cursor-pointer focus:ring-0 focus:ring-offset-0"
                      onChange={(e) => handleSelectedChange(e)}
                      checked={params.getAll(section).includes(option)}
                    />
                    <label
                      htmlFor={`${section} ${option}`}
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
