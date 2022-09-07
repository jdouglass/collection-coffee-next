import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProcessFilter, { IProcessFilter } from './ProcessFilter';
import { mockProcessFilterProps } from './ProcessFilter.mocks';

export default {
  title: 'filters/ProcessFilter',
  component: ProcessFilter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ProcessFilter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProcessFilter> = (args) => (
  <ProcessFilter {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockProcessFilterProps.base,
} as IProcessFilter;
