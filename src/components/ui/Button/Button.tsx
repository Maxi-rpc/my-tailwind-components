import { tv, type VariantProps } from 'tailwind-variants';
 
const button = tv({
  base: 'px-4 py-1.5 rounded hover:opacity-80',
  variants: {
    color: {
      primary: 'bg-blue-500 text-white',
      neutral: 'bg-zinc-500 text-black dark:text-white'
    },
    flat: {
      true: 'bg-transparent'
    }
  },
  defaultVariants: {
    color: 'primary'
  },
  compoundVariants: [
    {
      color: 'primary',
      flat: true,
      class: 'bg-blue-500/40'
    },
    {
      color: 'neutral',
      flat: true,
      class: 'bg-zinc-500/20'
    }
  ]
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
  return <button onClick={props.onClick} className={button(props)}>{props.children}</button>;
};