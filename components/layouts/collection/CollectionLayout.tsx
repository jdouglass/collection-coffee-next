import Head from 'next/head';
import Header from '../../navigation/header/Header';

export interface ICollectionLayout {}

const CollectionLayout: React.FC<ICollectionLayout> = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Collection Coffee</title>
      </Head>
      <Header />
      <div className="flex flex-col items-center">
        <main>{children}</main>
      </div>
    </>
  );
};

export default CollectionLayout;
