interface TextInputProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	label?: string;
	id?: string;
	name?: string;
	placeHolder?: string;
	autoComplete?: string;
	type?: string;
}

export const TextInputComponent = ({
	children,
	customClass,
	label,
	id,
	name,
	placeHolder,
	autoComplete,
	type = "text",
}: TextInputProps) => {
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
					<input
						id={id}
						name={name}
						type={type}
						autoComplete={autoComplete}
						className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>
		</>
	);
};
