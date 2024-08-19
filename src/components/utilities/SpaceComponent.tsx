interface SpaceProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	show?: boolean;
}

export const SpaceComponent = ({
	children,
	customClass = "",
	show = false,
}: SpaceProps) => {
	const isShow = show ? "" : "hidden";
	return (
		<>
			<div className="p-2">
				<h1 className={isShow}>Space Component</h1>
			</div>
		</>
	);
};
