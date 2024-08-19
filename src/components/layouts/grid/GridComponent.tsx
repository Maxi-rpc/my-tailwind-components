import { GridContainerComponent } from "./GridContainerComponent";
import { GridItemComponent } from "./GridItemComponent";

interface GridProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	container?: boolean;
	gap?: string;
	item?: boolean;
	itemRow?: boolean;
	itemColumn?: boolean;
}

export const GridComponent = ({
	children,
	customClass = "",
	container = false,
	gap,
	item,
	itemRow,
	itemColumn,
}: GridProps) => {
	if (container) {
		return (
			<>
				<GridContainerComponent customClass={customClass} gap={gap}>
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
