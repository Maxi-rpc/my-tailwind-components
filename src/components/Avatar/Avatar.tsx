type AvatarProps = {
  src?: string;
  variant?: 'circle' | 'rounded' | 'square';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
};

const variantClasses = {
  circle: 'inline-block relative object-cover object-center !rounded-full',
  rounded: 'inline-block relative object-cover object-center',
  square: 'inline-block relative object-cover object-center !rounded-none',
};

const sizeClasses = {
  xs: 'w-6 h-6 rounded-md',
  sm: 'w-9 h-9 rounded-md',
  md: 'w-12 h-12 rounded-lg',
  lg: 'w-[58px] h-[58px] rounded-lg',
  xl: 'w-[74px] h-[74px] rounded-xl',
  xxl: 'w-[110px] h-[110px] rounded-2xl',
};

export const Avatar = ({ src = '', variant = 'circle', size = 'md' }: AvatarProps) => {
  return (
    <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
      <img
        src={src ? src : `https://docs.material-tailwind.com/img/face-2.jpg`}
        alt="avatar"
        className={`${variantClasses[variant]} ${sizeClasses[size]}`}
      />
    </div>
  );
};
