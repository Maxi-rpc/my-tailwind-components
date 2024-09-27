import { ExampleProps } from "./Type";

export const ExampleComponent = ({ children, customClass }: ExampleProps) => {
	return (
		<>
			<div className={`${customClass}`}>
				<h1>Example Component</h1>
			</div>
		</>
	);
};
