interface TextAreaInputProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	label?: string;
	id?: string;
	name?: string;
	rows?: number;
	defaultValue?: string;
	textAuxiliar?: string;
}

export const TextAreaInputComponent = ({
	children,
	customClass,
	label,
	id,
	name,
	rows = 3,
	defaultValue,
	textAuxiliar,
}: TextAreaInputProps) => {
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
					<textarea
						id={id}
						name={name}
						rows={rows}
						className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						defaultValue={defaultValue}
					/>
				</div>
				{textAuxiliar && (
					<p className="mt-3 text-sm leading-6 text-gray-600">{textAuxiliar}</p>
				)}
			</div>
		</>
	);
};
