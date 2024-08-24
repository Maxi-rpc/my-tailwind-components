interface BadgeProps extends React.HtmlHTMLAttributes<HTMLSpanElement> {
	children?: React.ReactNode;
}

export const BadgeComponent = ({ children }: BadgeProps) => {
	return (
		<>
			<span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
				{children}
			</span>
		</>
	);
};
