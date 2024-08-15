import Link from "next/link";

interface NavItemMobileProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	href?: string;
}

export const NavItemMobileComponent = ({
	children,
	customClass = "",
	href = "",
}: NavItemMobileProps) => {
	return (
		<>
			<Link
				href={href}
				className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
			>
				{children}
			</Link>
		</>
	);
};
