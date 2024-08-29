interface HeaderPageProps {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	title?: string;
}

export const HeaderPageComponent = ({
	children,
	customClass,
	title,
}: HeaderPageProps) => {
	return (
		<>
			<header className="bg-white shadow">
				<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
					{title ? (
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 capitalize">
							{title}
						</h1>
					) : (
						children
					)}
				</div>
			</header>
		</>
	);
};
