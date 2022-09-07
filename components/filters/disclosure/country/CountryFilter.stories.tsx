import { ComponentMeta, ComponentStory } from '@storybook/react';
import CountryFilter, { ICountryFilter } from './CountryFilter';
import { mockCountryFilterProps } from './CountryFilter.mocks';

export default {
  title: 'filters/CountryFilter',
  component: CountryFilter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CountryFilter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CountryFilter> = (args) => (
  <CountryFilter {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCountryFilterProps.base,
} as ICountryFilter;
