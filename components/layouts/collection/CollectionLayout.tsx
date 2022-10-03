import Head from 'next/head';
import Header from '../../navigation/header/Header';
import FilterBar from '../../utility/filter-bar/FilterBar';

export interface ICollectionLayout {}

const CollectionLayout: React.FC<ICollectionLayout> = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Collection Coffee</title>
      </Head>
      <Header />
      <div className="flex overflow-y-scroll h-[calc(100vh-80px)] justify-center">
        <FilterBar />
        <main className="min-w-[1280px]">{children}</main>
      </div>
    </>
  );
};

export default CollectionLayout;
