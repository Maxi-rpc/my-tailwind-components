import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Components/Accordion',
};
export default meta;

type Story = StoryObj<typeof Accordion>;

export const Primary: Story = {
  args: {
    label: 'Click me',
    children: <>Soy un texto de prueba</>,
  },
};
