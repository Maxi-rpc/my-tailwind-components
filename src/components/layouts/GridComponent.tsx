interface GridProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	container?: boolean;
	cols?: string;
	gap?: string;
}

export const GridComponent = ({
	children,
	customClass = "",
	container = false,
	cols = "4",
	gap = "4",
}: GridProps) => {
	const isContainer = container && "px-5";
	return (
		<>
			<div
				className={`${isContainer} grid grid-cols-${cols} gap-${gap} ${customClass}`}
			>
				{children}
			</div>
		</>
	);
};
