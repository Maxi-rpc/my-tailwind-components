interface GridProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	cols?: string;
	gap?: string;
}

export const GridComponent = ({
	children,
	customClass,
	cols,
	gap = '4',
}: GridProps) => {
	return (
		<>
			<div className={`grid grid-cols-${cols} gap-${gap}`}>{children}</div>
		</>
	);
};
