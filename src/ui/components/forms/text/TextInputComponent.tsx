//import { TextInputProps } from "./type";

import { ReactElement } from "react";

interface TextInputProps extends React.HTMLAttributes<HTMLInputElement> {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	label?: string;
	id?: string;
	name?: string;
	type: "email" | "text" | "password";
	required?: boolean;
	autoComplete?: string;
}

export const TextInputComponent = ({
	children,
	customClass,
	label,
	id,
	name,
	...props
}: TextInputProps) => {
	return (
		<>
			<h1>Component</h1>
		</>
	);
};
