import { ComponentMeta, ComponentStory } from '@storybook/react';
import CollectionLayout, { ICollectionLayout } from './CollectionLayout';
import { mockCollectionLayoutProps } from './CollectionLayout.mocks';

export default {
  title: 'layouts/CollectionLayout',
  component: CollectionLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CollectionLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CollectionLayout> = (args) => (
  <CollectionLayout {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCollectionLayoutProps.base,
} as ICollectionLayout;
