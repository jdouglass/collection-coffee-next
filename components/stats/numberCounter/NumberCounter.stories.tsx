import { ComponentMeta, ComponentStory } from '@storybook/react';
import NumberCounter, { INumberCounter } from './NumberCounter';
import { mockFilterCategoryProps } from './NumberCounter.mocks';

export default {
  title: 'NumberCounter',
  component: NumberCounter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof NumberCounter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NumberCounter> = (args) => (
  <NumberCounter {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFilterCategoryProps.base,
} as INumberCounter;
