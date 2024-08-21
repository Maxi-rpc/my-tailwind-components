interface ButtonProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
}

export const ButtonComponent = ({ children, customClass }: ButtonProps) => {
	return (
		<>
			<div
				className={`pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500 ${customClass}`}
			>
				<div className="text-center">{children ? children : "Button A"}</div>
			</div>
		</>
	);
};
