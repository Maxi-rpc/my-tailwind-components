import Link from "next/link";

interface NavBarLogoMobileProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	href?: string;
	src: string;
	alt: string;
}

export const NavBarLogoMobileComponent = ({
	children,
	customClass = "",
	href = "#",
	src,
	alt,
}: NavBarLogoMobileProps) => {
	return (
		<>
			<Link href={href} className="-m-1.5 p-1.5">
				<span className="sr-only">Your Company</span>
				<img alt={alt} src={src} className="h-8 w-auto" />
			</Link>
		</>
	);
};
