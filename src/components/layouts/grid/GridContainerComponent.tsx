interface GridContainerProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	gap?: string;
}

export const GridContainerComponent = ({
	children,
	customClass = "",
	gap = "5",
}: GridContainerProps) => {
	const cssClass = customClass;
	return (
		<>
			<div
				className={`px-2 grid gap-${gap} grid-flow-col auto-cols-auto  ${cssClass}`}
			>
				{children}
			</div>
		</>
	);
};
