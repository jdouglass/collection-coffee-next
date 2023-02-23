import { ComponentMeta, ComponentStory } from '@storybook/react';
import LandingStatsContainer, {
  ILandingStatsContainer,
} from './LandingStatsContainer';
import { mockFilterCategoryProps } from './LandingStatsContainer.mocks';

export default {
  title: 'LandingStatsContainer',
  component: LandingStatsContainer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LandingStatsContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LandingStatsContainer> = (args) => (
  <LandingStatsContainer {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFilterCategoryProps.base,
} as ILandingStatsContainer;
