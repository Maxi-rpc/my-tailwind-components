interface CardProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	name?: string;
}

export const CardComponent = ({
	children,
	customClass = "",
	name = "",
}: CardProps) => {
	return (
		<>
			<div className="min-w-60 rounded bg-neutral-900 text-white">
				<h1>Example Component</h1>
				<div>Card header</div>
				<div>Card Body</div>
				<div>Card footer</div>
			</div>
		</>
	);
};
