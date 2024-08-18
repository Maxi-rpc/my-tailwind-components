interface GridContainerProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	container?: boolean;
	cols?: string;
	gap?: string;
}

export const GridContainerComponent = ({
	children,
	customClass = "",
	container = false,
	cols = "1",
	gap = "4",
}: GridContainerProps) => {
	const isContainer = container && "px-5";
	const cssClass = `${isContainer} grid grid-cols-${cols} gap-${gap} ${customClass}`;
	return (
		<>
			<div className={cssClass}>{children}</div>
		</>
	);
};
