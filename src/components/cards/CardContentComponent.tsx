interface CardContentProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
}

export const CardContentComponent = ({
	children,
	customClass,
}: CardContentProps) => {
	return (
		<>
			<div className={`p-4 ${customClass}`}>{children ? children : "Card Content Example"}</div>
		</>
	);
};
