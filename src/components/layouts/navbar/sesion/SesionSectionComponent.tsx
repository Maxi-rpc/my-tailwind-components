import Link from "next/link";

interface SesionSectionProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	name?: string;
}

export const SesionSectionComponent = ({
	children,
	customClass = "",
	name = "",
}: SesionSectionProps) => {
	return (
		<>
			<div className="hidden lg:flex lg:flex-1 lg:justify-end">
				<Link
					href="#"
					className="text-sm font-semibold leading-6 text-gray-900"
				>
					Log in <span aria-hidden="true">&rarr;</span>
				</Link>
			</div>
		</>
	);
};
