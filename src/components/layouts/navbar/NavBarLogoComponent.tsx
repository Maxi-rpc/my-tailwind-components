import Link from "next/link";
import Image from "next/image";

interface NavBarLogoProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	href?: string;
	src: string;
	alt: string;
}

export const NavBarLogoComponent = ({
	children,
	customClass = "",
	href = "#",
	src = "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
	alt = "",
}: NavBarLogoProps) => {
	return (
		<>
			<div className="flex lg:flex-1">
				<Link href={href} className="-m-1.5 p-1.5">
					<span className="sr-only">Your Company</span>
					<img alt={alt} src={src} className="h-8 w-auto" />
				</Link>
			</div>
		</>
	);
};
