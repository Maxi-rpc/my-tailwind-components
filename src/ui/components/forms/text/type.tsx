export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	id?: string;
	name?: string;
	type?: React.HTMLInputTypeAttribute;
	autoComplete?: string;
	required?: boolean;
}
