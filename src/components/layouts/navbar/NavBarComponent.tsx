interface NavBarProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	menu?: {};
}

export const NavBarComponent = ({
	children,
	customClass,
	menu,
}: NavBarProps) => {
	return (
		<>
			<div className={`${customClass}`}>
				<h1>Example Component</h1>
			</div>
		</>
	);
};
