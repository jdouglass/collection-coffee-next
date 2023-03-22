import { useAtom } from 'jotai';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { filtersBeingUsed } from '../../../lib/store';

export interface IClearFitlersButton {}

const ClearFiltersButton: React.FC<IClearFitlersButton> = () => {
  const router = useRouter();
  const pathname = usePathname() as string;
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams!.toString());
  const [, setfiltersBeingUsedState] = useAtom(filtersBeingUsed);

  function handleClick() {
    setfiltersBeingUsedState(false);
    for (const key of Array.from(params.keys())) {
      params.delete(key);
    }
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex items-center justify-center">
      <button
        disabled={!searchParams!.toString().length}
        onClick={() => handleClick()}
        className="rounded-md disabled:opacity-75 border shadow-sm disabled:border-gray-300 enabled:border-rose-300 px-2 text-[13px] font-semibold leading-7 disabled:text-gray-700 disabled:bg-gray-200 enabled:bg-rose-100 enabled:text-rose-900 enabled:hover:bg-rose-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        Clear filters
      </button>
    </div>
  );
};

export default ClearFiltersButton;
