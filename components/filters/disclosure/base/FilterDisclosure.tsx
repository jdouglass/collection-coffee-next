import { Disclosure } from '@headlessui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ChevronDownIcon from '../../../../public/icons/chevron-down.svg';

export interface IFilterDisclosure {
  section: string;
  options: string[];
}

const FilterDisclosure: React.FC<IFilterDisclosure> = ({
  section,
  options,
}) => {
  const router = useRouter();
  const { pathname, query } = router;
  const initialFilterParams = Array.isArray(query[section])
    ? query[section]
    : query[section]
    ? [query[section]]
    : [];
  const [selected, setSelected]: any[] = useState(initialFilterParams);
  const handleSelectedChange = (e: any) => {
    if (!selected.includes(e.target.value)) {
      setSelected([...selected, e.target.value]);
      router.push({
        pathname,
        query: { ...query, [section]: [...selected, e.target.value] },
      });
    } else {
      setSelected(selected.filter((item: string) => item !== e.target.value));
      router.push({
        pathname,
        query: {
          ...query,
          [section]: selected.filter((item: string) => item !== e.target.value),
        },
      });
    }
  };

  useEffect(() => {
    setSelected([]);
  }, [router.query]);

  return (
    <Disclosure as="div" className="bg-white border-b border-gray-200 py-4">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-2 text-sm text-gray-400 hover:text-gray-500">
            <span className="font-medium text-gray-900">{section}</span>
            <ChevronDownIcon
              className={`${
                open
                  ? 'rotate-180 transform duration-300'
                  : 'transform duration-300'
              } h-5 w-5 text-gray-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="pt-4 pl-3">
            <div className="space-y-2">
              {options.map((option) => (
                <span key={option} className="flex items-center">
                  <input
                    id={option}
                    type="checkbox"
                    value={option}
                    name={option}
                    className="h-4 w-4 pr-2 border-gray-300 rounded text-indigo-600 hover:cursor-pointer focus:ring-0 focus:ring-offset-0"
                    onChange={(e) => handleSelectedChange(e)}
                    defaultChecked={selected.includes(option)}
                  />
                  <label
                    htmlFor={option}
                    className="grow text-sm text-gray-600 px-4 pl-2 items-center hover:cursor-pointer"
                  >
                    {option}
                  </label>
                </span>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default FilterDisclosure;
