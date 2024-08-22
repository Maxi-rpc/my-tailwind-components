interface ButtonOutlinedProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	name?: string;
	id?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonOutlinedComponent = ({
	children,
	customClass,
	name,
	id,
	onClick,
}: ButtonOutlinedProps) => {
	return (
		<>
			<button
				name={name}
				id={id}
				onClick={onClick}
				className={`rounded-md px-3 py-2 text-sm font-semibold shadow-sm ${customClass}`}
			>
				<div className="text-center">
					{children ? children : "Button Outlined"}
				</div>
			</button>
		</>
	);
};
