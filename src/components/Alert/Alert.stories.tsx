import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = { component: Alert, title: 'Components/Alert' };
export default meta;

type Story = StoryObj<typeof Alert>;

export const Primary: Story = { args: { children: '' } };
