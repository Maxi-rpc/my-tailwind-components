import Link from "next/link";
import { LinkProps } from "./type";

export const LinkComponent = ({ children, customClass, href }: LinkProps) => {
	return (
		<>
			<Link
				href={href}
				className="font-semibold text-indigo-600 hover:text-indigo-500"
			>
				{children}
			</Link>
		</>
	);
};
