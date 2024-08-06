import { link } from "fs";

interface NavItemProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	container?: boolean;
	title?: string;
	url?: string;
}

export const NavItemComponent = ({
	children,
	customClass = "",
	container = false,
	title,
	url,
}: NavItemProps) => {
	return (
		<>
			<a href={url} className="text-sm font-semibold leading-6 text-gray-900">
				{children}
			</a>
		</>
	);
};
