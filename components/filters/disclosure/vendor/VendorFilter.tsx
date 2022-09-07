import { Disclosure } from '@headlessui/react';
import { useAtom } from 'jotai';
import { initialVendorFilter } from '../../../../lib/atom';
import ChevronDownIcon from '../../../../public/icons/chevron-down.svg';

export interface IVendorFilter {
  options: string[];
}

const VendorFilter: React.FC<IVendorFilter> = ({ options }) => {
  const [selectedVendor, setSelectedVendor] = useAtom(initialVendorFilter);
  const handleSelectedChange = (e: any) => {
    if (e.target.value) {
      if (!selectedVendor.includes(e.target.value)) {
        setSelectedVendor([...selectedVendor, e.target.value]);
      } else {
        setSelectedVendor(
          selectedVendor.filter((item: string) => item !== e.target.value)
        );
      }
    }
  };

  return (
    <div className="w-full">
      <div className="w-full bg-white">
        <Disclosure as="div" className="py-3">
          {({ open }) => (
            <>
              <Disclosure.Button className=" border border-gray-300 rounded bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500 pl-3 pr-2 py-2 drop-shadow-sm">
                <span className="font-medium text-gray-900">Vendor</span>
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

export default VendorFilter;
