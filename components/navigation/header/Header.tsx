import Link from 'next/link';
import Logo from '../../../public/collection-coffee-logo.svg';

export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <nav className="flex h-20 border-b justify-center">
      <div className="flex h-20 px-4 shrink-0 items-center justify-center max-w-[1920px]">
        <Link href="/">
          <a>
            <Logo
              className="h-12 hover:cursor-pointer"
              alt="Collection Coffee logo"
            />
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
