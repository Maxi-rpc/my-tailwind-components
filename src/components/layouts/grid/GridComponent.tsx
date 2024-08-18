import { GridContainerComponent } from "./GridContainerComponent";

interface GridProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	container?: boolean;
	cols?: string;
	gap?: string;
	item?: boolean;
}

export const GridComponent = ({
	children,
	customClass = "",
	container = false,
	cols = "4",
	gap = "4",
	item,
}: GridProps) => {
	if (container) {
		return (
			<>
				<GridContainerComponent container cols={cols} gap={gap}>
					{children}
				</GridContainerComponent>
			</>
		);
	} else {
		return <>{children}</>;
	}
};
