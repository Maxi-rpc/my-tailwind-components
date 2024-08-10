interface ExampleProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	name?: string;
}

export const ExampleComponent = ({
	children,
	customClass = "",
	name = "",
}: ExampleProps) => {
	return (
		<>
			<div className="">
				<h1>Example Component</h1>
			</div>
		</>
	);
};
