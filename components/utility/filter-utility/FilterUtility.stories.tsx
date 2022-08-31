import { ComponentMeta, ComponentStory } from '@storybook/react';
import FilterUtility, { IFilterUtility } from './FilterUtility';
import { mockFilterUtilityProps } from './FilterUtility.mocks';

export default {
  title: 'utility/FilterUtility',
  component: FilterUtility,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FilterUtility>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FilterUtility> = (args) => (
  <FilterUtility {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFilterUtilityProps.base,
} as IFilterUtility;
