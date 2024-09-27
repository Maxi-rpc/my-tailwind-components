export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "contained" | "outlined";
	fullWidth?: boolean;
}
