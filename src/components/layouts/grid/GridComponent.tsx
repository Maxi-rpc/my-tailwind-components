import { GridContainerComponent } from "./GridContainerComponent";
import { GridItemComponent } from "./GridItemComponent";

interface GridProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	container?: boolean;
	item?: boolean;
	itemRow?: boolean;
	itemColumn?: boolean;
}

export const GridComponent = ({
	children,
	customClass = "",
	container = false,
	item,
	itemRow,
	itemColumn,
}: GridProps) => {
	if (container) {
		return (
			<>
				<GridContainerComponent customClass={customClass}>
					{children}
				</GridContainerComponent>
			</>
		);
	} else {
		return (
			<GridItemComponent
				customClass={customClass}
				row={itemRow}
				column={itemColumn}
			>
				{children}
			</GridItemComponent>
		);
	}
};
