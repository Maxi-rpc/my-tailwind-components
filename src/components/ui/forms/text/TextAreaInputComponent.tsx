interface TextAreaInputProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	children?: React.ReactNode;
	label?: string;
	textAuxiliar?: string;
}

export const TextAreaInputComponent = ({
	children,
	label,
	rows = 3,
	textAuxiliar,
	...props
}: TextAreaInputProps) => {
	return (
		<>
			{label && (
				<label
					htmlFor={label}
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					{label}
				</label>
			)}
			<div className="mt-2">
				<textarea
					{...props}
					className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>
			</div>
			{textAuxiliar && (
				<p className="mt-3 text-sm leading-6 text-gray-600">{textAuxiliar}</p>
			)}
		</>
	);
};