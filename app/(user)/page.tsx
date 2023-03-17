import LeftSideGradient from '../../components/backgrounds/leftSideGradient/LeftSideGradient';
import RightSideGradient from '../../components/backgrounds/rightSideGradient/RightSideGradient';
import ExploreTheCollectionButton from '../../components/buttons/exploreTheCollection/ExploreTheCollectionButton';
import LandingFeatures from '../../components/featuresSections/landingFeatures/LandingFeatures';
import Hero from '../../components/hero/Hero';
import LandingStatsContainer from '../../components/stats/LandingStatsContainer';
import { LandingPageStats } from '../../typings';

async function getCount(): Promise<LandingPageStats> {
  const API_BASE_URL = process.env.API_BASE_URL!;
  const res = await fetch(`${API_BASE_URL}/api/landingPageStats`, {
    cache: 'no-store',
    next: { revalidate: 900 },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Page() {
  const landingPageStats = await getCount();

  return (
    <div>
      <LeftSideGradient />
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-5xl pt-56">
          <Hero />
          <LandingStatsContainer
            totalProducts={landingPageStats.totalProducts}
            totalVendors={landingPageStats.totalVendors}
            totalBrands={landingPageStats.totalRoasters}
          />
          <LandingFeatures />
          <ExploreTheCollectionButton />
        </div>
        <RightSideGradient />
      </div>
    </div>
  );
}
