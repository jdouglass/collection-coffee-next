import { ComponentMeta, ComponentStory } from '@storybook/react';
import FilterReset, { IFilterReset } from './FilterReset';
import { mockFilterResetProps } from './FilterReset.mocks';

export default {
  title: 'buttons/FilterReset',
  component: FilterReset,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FilterReset>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FilterReset> = (args) => (
  <FilterReset {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFilterResetProps.base,
} as IFilterReset;
