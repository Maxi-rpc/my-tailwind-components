interface CardProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
}

export const CardComponent = ({
	children,
	customClass = "",
}: CardProps) => {
	return (
		<>
			<div className={`min-w-60 rounded bg-neutral-900 text-white ${customClass}`}>
				{children}
			</div>
		</>
	);
};
