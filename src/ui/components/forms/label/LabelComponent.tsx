interface LabelProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	htmlFor?: string;
}

export const LabelComponent = ({
	children,
	customClass,
	htmlFor,
}: LabelProps) => {
	return (
		<>
			<label
				htmlFor={htmlFor}
				className="block text-sm font-medium leading-6 text-gray-900"
			>
				{children}
			</label>
		</>
	);
};
