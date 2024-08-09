import Link from "next/link";

interface NavItemProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	href?: string;
}

export const NavItemComponent = ({
	children,
	customClass = "",
	href = "",
}: NavItemProps) => {
	return (
		<>
			<Link
				href={href}
				className="text-sm font-semibold leading-6 text-gray-900"
			>
				{children}
			</Link>
		</>
	);
};
