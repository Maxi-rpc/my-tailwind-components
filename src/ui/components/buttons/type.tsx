export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "contained" | "outlined" | "default";
	fullWidth?: boolean;
}
