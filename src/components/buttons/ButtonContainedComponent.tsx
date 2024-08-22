interface ButtonContainedProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	name?: string;
	id?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonContainedComponent = ({
	children,
	customClass,
	name,
	id,
	onClick,
}: ButtonContainedProps) => {
	return (
		<>
			<button
				name={name}
				id={id}
				onClick={onClick}
				className={`rounded-md px-3 py-2 text-sm font-semibold ${customClass}`}
			>
				<div className="text-center">
					{children ? children : "Button Contained"}
				</div>
			</button>
		</>
	);
};
