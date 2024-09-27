//import { TextInputProps } from "./type";
interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	id?: string;
	name?: string;
	type?: React.HTMLInputTypeAttribute;
	autoComplete?: string;
	required?: boolean;
}

export const InputComponent = ({
	children,
	customClass,
	id,
	name,
	type,
	autoComplete,
	required,
	...props
}: InputProps) => {
	return (
		<>
			<input
				id={id}
				name={name}
				type={type}
				autoComplete={autoComplete}
				required={required}
				{...props}
				className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
			/>
		</>
	);
};
