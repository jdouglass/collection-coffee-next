import { Disclosure } from '@headlessui/react';
import { useState } from 'react';
import ChevronDownIcon from '../../../public/icons/chevron-down.svg';

export interface IFilterDisclosure {
  section: string;
  options: string[];
}

const FilterDisclosure: React.FC<IFilterDisclosure> = ({
  section,
  options,
}) => {
  const [selected, setSelected] = useState<any>([]);
  const handleSelectedChange = (e: any) => {
    if (e.target.value) {
      if (!selected.includes(e.target.value)) {
        setSelected([...selected, e.target.value]);
      } else {
        setSelected(selected.filter((item: string) => item !== e.target.value));
      }
    }
  };

  return (
    <div className="w-64 px-4 pt-16">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure as="div" className="border-b border-gray-200 py-4">
          {({ open }) => (
            <>
              <Disclosure.Button className="bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                <span className="font-medium text-gray-900">{section}</span>
                <ChevronDownIcon
                  className={`${
                    open
                      ? 'rotate-180 transform duration-300'
                      : 'transform duration-300'
                  } h-5 w-5 text-gray-900`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pt-4">
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
      </div>
    </div>
  );
};

export default FilterDisclosure;
