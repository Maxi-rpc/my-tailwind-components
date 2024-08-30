interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	children?: React.ReactNode;
	customClass?: React.ComponentProps<"div">["className"];
	src?: string;
	alt?: string;
}

export const LogoComponent = ({
	children,
	customClass,
	src,
	alt,
	...props
}: LogoProps) => {
	return (
		<>
			<img alt={alt} src={src} {...props} />
		</>
	);
};
