import { ComponentMeta, ComponentStory } from '@storybook/react';
import LandingStats, { ILandingStats } from './LandingStats';
import { mockFilterCategoryProps } from './LandingStats.mocks';

export default {
  title: 'LandingStats',
  component: LandingStats,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LandingStats>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LandingStats> = (args) => (
  <LandingStats {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFilterCategoryProps.base,
} as ILandingStats;
