import Link from 'next/link';
import Logo from '../../../public/collection-coffee-logo.svg';

export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <nav className="h-20 border-b">
      <div className="grid grid-cols-3 h-20 items-center px-4">
        <div className="flex shrink-0">
          <Link href="/">
            <a>
              <Logo
                className="h-12 hover:cursor-pointer"
                alt="Collection Coffee logo"
              />
            </a>
          </Link>
        </div>
        <div className="flex text-sm text-black font-semibold space-x-14 justify-center">
          <Link href="/collection">
            <a className="hover:text-blue-600">COLLECTION</a>
          </Link>
          <Link href="/contact">
            <a className="hover:text-blue-600">CONTACT</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
