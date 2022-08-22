import { ComponentMeta, ComponentStory } from '@storybook/react';
import FilterOptions, { IFilterOptions } from './FilterOptions';
import { mockFilterCategoryProps } from './FilterOptions.mocks';

export default {
  title: 'templates/FilterOptions',
  component: FilterOptions,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FilterOptions>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FilterOptions> = (args) => (
  <FilterOptions {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFilterCategoryProps.base,
} as IFilterOptions;
