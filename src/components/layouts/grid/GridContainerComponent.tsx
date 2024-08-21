interface GridContainerProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
}

export const GridContainerComponent = ({
	children,
	customClass = "",
}: GridContainerProps) => {
	return (
		<>
			<div className={`px-2 grid grid-cols-12 gap-3 ${customClass}`}>
				{children}
			</div>
		</>
	);
};
