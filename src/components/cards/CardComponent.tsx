interface CardProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
}

const bgColor = "bg-neutral-900 text-white";

export const CardComponent = ({ children, customClass = "" }: CardProps) => {
	return (
		<>
			<div className={`min-w-60 rounded bg-white ${customClass}`}>{children}</div>
		</>
	);
};
