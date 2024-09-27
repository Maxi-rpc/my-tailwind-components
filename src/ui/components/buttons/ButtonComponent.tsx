import { ButtonProps } from "./type";

export const ButtonComponent = ({
	children,
	variant,
	fullWidth = false,
	...props
}: ButtonProps) => {
	const classFullWidth = fullWidth ? "w-full" : "";
	return (
		<>
			<button
				className={`flex ${classFullWidth} justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
				{...props}
			>
				{children}
			</button>
			;
		</>
	);
};
