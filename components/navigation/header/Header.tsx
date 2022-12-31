import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from '../../../public/collection-coffee-logo.svg';

export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  const router = useRouter();
  return (
    <nav className="grid grid-cols-3 h-20 border-b sticky top-0 z-50 bg-white mx-4">
      <div className="flex w-72 h-20 shrink-0 items-center justify-center">
        <Link href="/">
          <Logo
            className="h-12 hover:cursor-pointer"
            alt="Collection Coffee logo"
            onClick={() => {
              if (router.pathname === '/') {
                router.replace('/');
                window.location.reload();
              }
            }}
          />
        </Link>
      </div>
      <div className="flex w-full items-center justify-center">
        <Link href="/">
          <button
            className="px-5"
            onClick={() => {
              if (router.pathname === '/') {
                router.replace('/');
                window.location.reload();
              }
            }}
          >
            Collection
          </button>
        </Link>
        <Link href="/about">
          <button className="px-5">About</button>
        </Link>
        <Link href="/contact">
          <button className="px-5">Contact</button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
