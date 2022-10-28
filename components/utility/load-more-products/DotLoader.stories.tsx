import { ComponentMeta, ComponentStory } from '@storybook/react';
import DotLoader, { IDotLoader } from './DotLoader';
import { mockDotLoaderProps } from './DotLoader.mocks';

export default {
  title: 'utility/DotLoader',
  component: DotLoader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DotLoader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DotLoader> = (args) => (
  <DotLoader {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockDotLoaderProps.base,
} as IDotLoader;
