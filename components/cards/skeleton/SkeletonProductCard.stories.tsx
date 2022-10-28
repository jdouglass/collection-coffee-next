import { ComponentMeta, ComponentStory } from '@storybook/react';
import SkeletonProductCard, {
  ISkeletonProductCard,
} from './SkeletonProductCard';
import { mockSkeletonProductCardProps } from './SkeletonProductCard.mocks';

export default {
  title: 'cards/SkeletonProductCard',
  component: SkeletonProductCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SkeletonProductCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SkeletonProductCard> = (args) => (
  <SkeletonProductCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSkeletonProductCardProps.base,
} as ISkeletonProductCard;
