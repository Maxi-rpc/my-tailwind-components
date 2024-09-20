const cssBtn = "rounded-md px-3 py-2 text-sm font-semibold shadow-sm";
const cssContained =
	cssBtn +
	" " +
	"text-white shadow-sm bg-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
const cssOutlined = cssBtn + " " + "text-gray-900 bg-white hover:bg-gray-50";
const cssDefault = cssBtn + " " + "font-semibold leading-6 text-gray-900";

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	title: string;
	showIcon?: boolean;
	variant?: "contained" | "outlined" | "default";
	fullWidth?: boolean;
}

export const ButtonComponent = ({
	children,
	title,
	showIcon,
	variant,
	fullWidth = false,
	...props
}: BtnProps) => {
	const isFullWidth = fullWidth ? "w-full" : "";
	switch (variant) {
		case "contained":
			return (
				<button className={cssContained + " " + isFullWidth} {...props}>
					{title}
				</button>
			);
		case "outlined":
			return (
				<button className={cssOutlined + " " + isFullWidth} {...props}>
					{title}
				</button>
			);
		default:
			return (
				<button className={cssDefault + " " + isFullWidth} {...props}>
					{title}
				</button>
			);
	}
};
