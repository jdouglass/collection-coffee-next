import { ReactElement } from 'react';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';

export function About() {
  return (
    <section className="bg-white">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-14 text-4xl tracking-tight font-bold text-center text-gray-900">
          Welcome to Collection Coffee!
        </h2>
        <p className="mb-8 lg:mb-16 text-gray-600">
          We are a Canadian-based company that is dedicated to helping coffee
          lovers discover the latest and greatest beans on the market. Our
          platform aggregates data from a wide range of third wave coffee
          vendors across the country and brings it all together in one place for
          easy browsing and comparison. <br />
          <br />
          At Collection Coffee, we believe in the power of choice. That&apos;s
          why we allow users to sort and filter our products to find exactly
          what they&apos;re looking for. And when you find a coffee that
          interests you, simply click on it to be redirected to the
          vendor&apos;s website to view more information about it or to make a
          purchase. <br />
          <br />
          Our website is constantly being updated with new coffee products, so
          you can be sure you&apos;re always seeing the most current selection
          of beans available. We search for new products every hour, so you can
          trust that you&apos;re getting the most up-to-date information. <br />
          <br />
          We are passionate about supporting small, independent coffee vendors
          and promoting the art and craft of specialty coffee. Thank you for
          choosing Collection Coffee as your go-to resource for finding the
          perfect beans.
        </p>
      </div>
    </section>
  );
}

About.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default About;
