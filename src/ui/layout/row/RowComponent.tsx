import { RowProps } from "./Type";

export const RowComponent = ({
	children,
	itemsAlign,
	justify,
	direction = "row",
	className,
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

	return (
		<>
			<div
				className={`${className} flex ${directionVariant[direction]} ${itemVariant[itemsAlign]} ${justifyVariant[justify]}`}
			>
				{children}
			</div>
		</>
	);
};
