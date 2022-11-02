import { ComponentMeta, ComponentStory } from '@storybook/react';
import FilterBarMobile, { IFilterBarMobile } from './FilterBarMobile';
import { mockFilterBarMobileProps } from './FilterBarMobile.mocks';

export default {
  title: 'utility/FilterBarMobile',
  component: FilterBarMobile,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FilterBarMobile>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FilterBarMobile> = (args) => (
  <FilterBarMobile {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFilterBarMobileProps.base,
} as IFilterBarMobile;
