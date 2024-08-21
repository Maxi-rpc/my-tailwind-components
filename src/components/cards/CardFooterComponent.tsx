interface CardFooterProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
}

export const CardFooterComponent = ({
	children,
	customClass,
}: CardFooterProps) => {
	return (
		<>
			<div className={`p-4 ${customClass}`}>
				{children ? children : "Card Footer Example"}
			</div>
		</>
	);
};
