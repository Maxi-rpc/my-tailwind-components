import Link from "next/link";
import { LinkProps } from "./type";

export const LinkComponent = ({ children, href, className }: LinkProps) => {
	return (
		<>
			<Link
				href={href}
				className={`${className} font-semibold text-indigo-600 hover:text-indigo-500`}
			>
				{children}
			</Link>
		</>
	);
};
