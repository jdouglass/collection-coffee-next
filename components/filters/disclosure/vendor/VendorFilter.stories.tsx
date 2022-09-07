import { ComponentMeta, ComponentStory } from '@storybook/react';
import VendorFilter, { IVendorFilter } from './VendorFilter';
import { mockVendorFilterProps } from './VendorFilter.mocks';

export default {
  title: 'filters/VendorFilter',
  component: VendorFilter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof VendorFilter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VendorFilter> = (args) => (
  <VendorFilter {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockVendorFilterProps.base,
} as IVendorFilter;
