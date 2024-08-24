interface SelectInputProps
	extends React.SelectHTMLAttributes<HTMLSelectElement> {
	children?: React.ReactNode;
	label?: string;
}

export const SelectInputComponent = ({
	children,
	label,
	...props
}: SelectInputProps) => {
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
				<select
					{...props}
					className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
				>
					{children}
				</select>
			</div>
		</>
	);
};
