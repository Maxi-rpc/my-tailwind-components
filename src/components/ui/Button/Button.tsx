import { tv, type VariantProps } from 'tailwind-variants';

const button = tv({
  base: 'hover:opacity-80',
  variants: {
    color: {
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-zinc-500 text-black dark:text-white',
      success: 'bg-emerald-500 text-white',
      warning: 'bg-amber-500 text-white',
      danger: 'bg-red-500 text-white',
      info: 'bg-lightBlue-500 text-white',
    },
    variant: {
      text: 'background-transparent outline-none focus:outline-none',
      contained: 'rounded',
      outlined: 'bg-transparent border border-solid',
    },
    flat: {
      true: 'bg-transparent',
    },
    size: {
      small: 'text-xs px-4 py-2',
      regular: 'text-sm px-6 py-3',
      large: 'text-base px-8 py-3',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'regular',
  },
  compoundVariants: [
    {
      color: 'primary',
      flat: true,
      class: 'bg-blue-500/40',
    },
    {
      color: 'secondary',
      flat: true,
      class: 'bg-zinc-500/20',
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
  children: React.ReactNode;
  onClick?: () => {};
}

export const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick} className={button(props)}>
      {props.children}
    </button>
  );
};
