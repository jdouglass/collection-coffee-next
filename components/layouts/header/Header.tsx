import Link from 'next/link';
import Logo from '../../../public/collection-coffee-logo.svg';

export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <nav className="h-[80px] border-b">
      <div className="grid grid-cols-3 flex h-[80px] items-center">
        <div className="flex shrink-0">
          <Link href="/">
            <Logo className="h-[50px]" alt="Collection Coffee logo" />
          </Link>
        </div>
        <div className="flex text-sm text-lime-800 font-semibold space-x-14 justify-center">
          <Link href="/collection">
            <a className="hover:text-amber-900">COLLECTION</a>
          </Link>
          <Link href="/blog">
            <a className="hover:text-amber-900">BLOG</a>
          </Link>
          <Link href="/about">
            <a className="hover:text-amber-900">ABOUT</a>
          </Link>
          <Link href="/contact">
            <a className="hover:text-amber-900">CONTACT</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
