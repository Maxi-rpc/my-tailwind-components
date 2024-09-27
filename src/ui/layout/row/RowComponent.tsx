import { RowProps } from "./Type";

export const RowComponent = ({
	children,
	customClass,
	itemsAlign = "center",
	justify = "between",
}: RowProps) => {
	const classItemsAlign = `items-${itemsAlign}`;
	const classJustify = `justify-${justify}`;
	return (
		<>
			<div className={`${customClass} flex ${classItemsAlign} ${classJustify}`}>
				{children}
			</div>
		</>
	);
};
