export interface TextPathInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	title?: string;
	label?: string;
	path?: string;
}

export const TextPathInputComponent = ({
	children,
	label,
	path,
	...props
}: TextPathInputProps) => {
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
				<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
					<span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
						{path}
					</span>
					<input
						{...props}
						className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>
		</>
	);
};
