interface GridItemProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	row?: boolean;
	column?: boolean;
}

export const GridItemComponent = ({
	children,
	customClass = "",
	row = false,
	column,
}: GridItemProps) => {
	const cssClass = customClass;
	const rowOrColumn = row ? "flex-row" : "flex-col";
	return (
		<>
			<div
				className={`p-4 flex ${rowOrColumn} justify-around ${cssClass}`}
			>
				{children}
			</div>
		</>
	);
};
