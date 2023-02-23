import ExploreTheCollectionButton from '../buttons/exploreTheCollection/ExploreTheCollectionButton';

export interface IHero {}

const Hero: React.FC<IHero> = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Discover coffee beans from around the world, all in one place
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Experience the thrill of discovering new coffee beans every hour with
        our coffee bean aggregator. Our advanced web crawling technology ensures
        that you never miss out on the latest and greatest beans, while our
        powerful filters help you find the perfect cup for your morning routine.
      </p>
      <ExploreTheCollectionButton />
    </div>
  );
};

export default Hero;
