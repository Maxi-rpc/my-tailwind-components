export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
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
}
