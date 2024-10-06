export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
	itemsAlign?: "start" | "end" | "center" | "baseline" | "stretch";
	justify?:
		| "normal"
		| "start"
		| "end"
		| "center"
		| "between"
		| "around"
		| "evenly"
		| "stretch";
	direction?: "row" | "column" | "row_reverse" | "column_reverse";
}
