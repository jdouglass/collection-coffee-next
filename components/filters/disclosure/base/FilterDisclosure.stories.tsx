import { ComponentMeta, ComponentStory } from '@storybook/react';
import FilterDisclosure, { IFilterDisclosure } from './FilterDisclosure';
import { mockFilterDisclosureProps } from './FilterDisclosure.mocks';

export default {
  title: 'filters/FilterDisclosure',
  component: FilterDisclosure,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FilterDisclosure>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FilterDisclosure> = (args) => (
  <FilterDisclosure {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFilterDisclosureProps.base,
} as IFilterDisclosure;
