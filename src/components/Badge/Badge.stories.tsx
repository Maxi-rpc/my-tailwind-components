import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';
import { Button } from '../Button/Button';

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'Components/Badge',
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    label: '5',
    children: <Button label="Notification" />,
  },
};
