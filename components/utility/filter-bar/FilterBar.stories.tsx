import { ComponentMeta, ComponentStory } from '@storybook/react';
import FilterBar, { IFilterBar } from './FilterBar';
import { mockFilterBarProps } from './FilterBar.mocks';

export default {
  title: 'utility/FilterBar',
  component: FilterBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FilterBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FilterBar> = (args) => (
  <FilterBar {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFilterBarProps.base,
} as IFilterBar;
