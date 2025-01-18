import { tv, type VariantProps } from 'tailwind-variants';

const button = tv({
  base: 'hover:opacity-80',
  variants: {
    color: {
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-gray-500 text-black dark:text-white',
      success: 'bg-green-500 text-white',
      warning: 'bg-yellow-500 text-white',
      danger: 'bg-red-500 text-white',
      info: 'bg-cyan-500 text-white',
    },
    variant: {
      text: 'bg-transparent outline-none focus:outline-none',
      contained: 'rounded',
      outlined: 'bg-transparent rounded border border-solid',
    },
    size: {
      sm: 'text-xs px-4 py-2',
      md: 'text-sm px-6 py-3',
      lg: 'text-base px-8 py-3',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
  compoundVariants: [
    {
      color: 'primary',
      variant: 'text',
      class: 'bg-transparent text-blue-500',
    },
    {
      color: 'secondary',
      variant: 'text',
      class: 'bg-transparent text-gray-500 dark:text-gray-500',
    },
    {
      color: 'success',
      variant: 'text',
      class: 'bg-transparent text-green-500',
    },
    {
      color: 'warning',
      variant: 'text',
      class: 'bg-transparent text-yellow-500',
    },
    {
      color: 'danger',
      variant: 'text',
      class: 'bg-transparent text-red-500',
    },
    {
      color: 'info',
      variant: 'text',
      class: 'bg-transparent text-cyan-500',
    },
    {
      color: 'primary',
      variant: 'outlined',
      class: 'text-blue-500 border-blue-500',
    },
    {
      color: 'secondary',
      variant: 'outlined',
      class: 'text-gray-500 border-gray-500 dark:text-gray-500',
    },
    {
      color: 'success',
      variant: 'outlined',
      class: 'text-green-500 border-green-500',
    },
    {
      color: 'warning',
      variant: 'outlined',
      class: 'text-yellow-500 border-yellow-500',
    },
    {
      color: 'danger',
      variant: 'outlined',
      class: 'text-red-500 border-red-500',
    },
    {
      color: 'info',
      variant: 'outlined',
      class: 'text-cyan-500 border-cyan-500',
    },
  ],
});

/**
 * Result:
 * color?: "primary" | "neutral"
 * flat?: boolean
 */

type ButtonVariants = VariantProps<typeof button>;

interface ButtonProps extends ButtonVariants {
  children?: React.ReactNode;
  onClick?: () => {};
  label?: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick} className={button(props)}>
      {props.label ? props.label : props.children}
    </button>
  );
};
