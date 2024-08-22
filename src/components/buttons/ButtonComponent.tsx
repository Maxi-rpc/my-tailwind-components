import { ButtonContainedComponent } from "./ButtonContainedComponent";
import { ButtonOutlinedComponent } from "./ButtonOutlinedComponent";

const cssContained = "text-white bg-indigo-600 hover:bg-indigo-500";
const cssOutlined = "text-gray-900 bg-white hover:bg-gray-50";

interface ButtonProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	type?: string;
	name?: string;
	id?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonComponent = ({
	children,
	customClass,
	type,
	name,
	id,
	onClick,
}: ButtonProps) => {
	switch (type) {
		case "contained":
			return (
				<ButtonContainedComponent
					name={name}
					id={id}
					onClick={onClick}
					customClass={cssContained + customClass}
				>
					{children}
				</ButtonContainedComponent>
			);
		case "outlined":
			return (
				<ButtonOutlinedComponent
					name={name}
					id={id}
					onClick={onClick}
					customClass={cssOutlined + customClass}
				>
					{children}
				</ButtonOutlinedComponent>
			);
		default:
			return (
				<button name={name} id={id} onClick={onClick} className={customClass}>
					{children}
				</button>
			);
	}
};
