interface RowProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	justifyContent?: "center" | "between" | "around";
	alignContent?: "start" | "center" | "end";
}

export const RowComponent = ({
	children,
	customClass,
	justifyContent,
	alignContent,
}: RowProps) => {
	const cssJustifyContent = {
		center: "justify-center",
		between: "justify-between",
		around: "justify-around",
	};

	const cssAlignContent = {
		start: "items-start",
		center: "items-center",
		end: "items-end",
	};

	const addJustify = justifyContent ? cssJustifyContent[justifyContent] : "";
	const addAlign = alignContent ? cssAlignContent[alignContent] : "";

	return (
		<>
			<div className={`flex ${addJustify} ${addAlign} ${customClass}`}>
				{children}
			</div>
		</>
	);
};
