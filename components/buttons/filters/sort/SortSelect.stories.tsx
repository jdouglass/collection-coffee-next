import { ComponentMeta, ComponentStory } from '@storybook/react';
import SortSelect, { ISortSelect } from './SortSelect';
import { mockFilterCategoryProps } from './SortSelect.mocks';

export default {
  title: 'templates/SortSelect',
  component: SortSelect,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SortSelect>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SortSelect> = (args) => (
  <SortSelect {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFilterCategoryProps.base,
} as ISortSelect;
