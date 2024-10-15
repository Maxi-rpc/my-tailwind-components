import { RowProps } from "./Type";

export const RowComponent = ({
	children,
	itemsAlign,
	justify = "normal",
	direction = "row",
	className = "",
}: RowProps) => {
	const itemVariant = {
		start: "items-start",
		end: "items-end",
		center: "items-center",
		baseline: "items-baseline",
		stretch: "items-stretch",
	};

	const justifyVariant = {
		normal: "justify-normal",
		start: "justify-start",
		end: "justify-end",
		center: "justify-center",
		between: "justify-between",
		around: "justify-around",
		evenly: "justify-evenly",
		stretch: "justify-stretch",
	};

	const directionVariant = {
		row: "flex-row",
		row_reverse: "flex-row-reverse",
		column: "flex-col",
		column_reverse: "flex-col-reverse",
	};

	const classJustifyVariant = justify ? justifyVariant[justify] : "";
	const classItemVariant = itemsAlign ? itemVariant[itemsAlign] : "";

	return (
		<>
			<div
				className={`${className} flex ${directionVariant[direction]} ${classItemVariant} ${classJustifyVariant}`}
			>
				{children}
			</div>
		</>
	);
};
