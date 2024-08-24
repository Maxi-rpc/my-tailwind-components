interface SelectInputProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	label?: string;
	id?: string;
	name?: string;
	placeHolder?: string;
	autoComplete?: string;
	type?: string;
}

export const SelectInputComponent = ({
	children,
	customClass,
	label,
	id,
	name,
	placeHolder,
	autoComplete,
	type = "text",
}: SelectInputProps) => {
	return (
		<>
			<div className={`${customClass}`}>
				{label && (
					<label
						htmlFor={id}
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						{label}
					</label>
				)}
				<div className="mt-2">
					<select
						id={id}
						name={name}
						autoComplete={autoComplete}
						className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
					>
						{children}
					</select>
				</div>
			</div>
		</>
	);
};
