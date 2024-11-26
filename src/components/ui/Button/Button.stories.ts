import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn(), children: 'Click me' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    color: 'primary',
    variant: 'contained',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    variant: 'contained',
  },
};

export const Success: Story = {
  args: {
    color: 'success',
    variant: 'contained',
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
    variant: 'contained',
  },
};

export const Danger: Story = {
  args: {
    color: 'danger',
    variant: 'contained',
  },
};

export const Info: Story = {
  args: {
    color: 'info',
    variant: 'contained',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
  },
};
