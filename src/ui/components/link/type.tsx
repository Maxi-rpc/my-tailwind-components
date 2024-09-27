import { AnchorHTMLAttributes } from "react";

export interface LinkProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	href: string;
}
