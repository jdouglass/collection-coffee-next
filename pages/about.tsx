import { ReactElement } from 'react';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';

export function About() {
  return <div className="flex justify-center mt-5">Coming soon!</div>;
}

About.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default About;
