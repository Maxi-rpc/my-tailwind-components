import { RowProps } from "./Type";

export const RowComponent = ({
	children,
	customClass,
	itemsAlign = "center",
	justify = "between",
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

	return (
		<>
			<div
				className={`${className} flex ${itemVariant[itemsAlign]} ${justifyVariant[justify]}`}
			>
				{children}
			</div>
		</>
	);
};
