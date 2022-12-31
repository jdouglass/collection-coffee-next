import Head from 'next/head';
import Header from '../../navigation/header/Header';

export interface IPrimaryLayout {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>
          Collection Coffee - Canadian Third Wave Coffee Bean Aggregator
        </title>
      </Head>
      <Header />
      <div className="flex flex-col">
        <main>{children}</main>
      </div>
    </>
  );
};

export default PrimaryLayout;
