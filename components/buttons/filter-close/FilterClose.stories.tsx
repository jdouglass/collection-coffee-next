import { ComponentMeta, ComponentStory } from '@storybook/react';
import FilterClose, { IFilterClose } from './FilterClose';
import { mockFilterCloseProps } from './FilterClose.mocks';

export default {
  title: 'buttons/FilterClose',
  component: FilterClose,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FilterClose>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FilterClose> = (args) => (
  <FilterClose {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFilterCloseProps.base,
} as IFilterClose;
