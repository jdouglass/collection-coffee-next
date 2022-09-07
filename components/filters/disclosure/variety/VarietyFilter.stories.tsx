import { ComponentMeta, ComponentStory } from '@storybook/react';
import VarietyFilter, { IVarietyFilter } from './VarietyFilter';
import { mockVarietyFilterProps } from './VarietyFilter.mocks';

export default {
  title: 'filters/VarietyFilter',
  component: VarietyFilter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof VarietyFilter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VarietyFilter> = (args) => (
  <VarietyFilter {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockVarietyFilterProps.base,
} as IVarietyFilter;
