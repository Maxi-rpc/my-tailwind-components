import Link from "next/link";

interface SesionSectioMobilenProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	name?: string;
}

export const SesionSectioMobilenComponent = ({
	children,
	customClass = "",
	name = "",
}: SesionSectioMobilenProps) => {
	return (
		<>
			<div className="py-6">
				<Link
					href="#"
					className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
				>
					Log in
				</Link>
			</div>
		</>
	);
};
