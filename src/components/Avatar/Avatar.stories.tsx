import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = { component: Avatar, title: 'Components/Avatar' };
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = { args: { src: '' } };
