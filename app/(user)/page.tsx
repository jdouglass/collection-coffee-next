import LeftSideGradient from '../../components/backgrounds/leftSideGradient/LeftSideGradient';
import RightSideGradient from '../../components/backgrounds/rightSideGradient/RightSideGradient';
import ExploreTheCollectionButton from '../../components/buttons/exploreTheCollection/ExploreTheCollectionButton';
import LandingFeatures from '../../components/featuresSections/landingFeatures/LandingFeatures';
import Hero from '../../components/hero/Hero';
import LandingStatsContainer from '../../components/stats/LandingStatsContainer';

async function getCount(type?: string): Promise<number> {
  const API_BASE_URL = process.env.API_BASE_URL as string;
  if (type === 'brand' || type === 'vendor') {
    const res = await fetch(
      `${API_BASE_URL}/api/landingPageStats?type=${type}`,
      {
        cache: 'no-store',
      }
    );
    return res.json();
  }
  const res = await fetch(`${API_BASE_URL}/api/landingPageStats`, {
    cache: 'no-store',
  });
  return res.json();
}

export default async function Page() {
  const totalProducts = await getCount();
  const totalVendors = await getCount('vendor');
  const totalBrands = await getCount('brand');

  return (
    <>
      <LeftSideGradient />
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-5xl pt-56">
          <Hero />
          <LandingStatsContainer
            totalProducts={totalProducts}
            totalVendors={totalVendors}
            totalBrands={totalBrands}
          />
          <LandingFeatures />
          <ExploreTheCollectionButton />
        </div>
        <RightSideGradient />
      </div>
    </>
  );
}
