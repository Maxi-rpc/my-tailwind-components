export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<div className="min-h-full">
				<main>
					<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
						{/* Your content */}
						{children}
					</div>
				</main>
			</div>
		</>
	);
}
