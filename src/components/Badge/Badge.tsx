import React from 'react';

type BadgeProps = {
  label?: string;
  bgColor?: 'primary' | 'secondary' | 'info' | 'warning' | 'success' | 'error';
  children?: React.ReactNode;
  textColor?: 'primary' | 'secondary' | 'info' | 'warning' | 'success' | 'error' | 'black' | 'white';
  withBorder?: boolean;
  placement?: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
};

const textColorClasses = {
  primary: 'text-blue',
  secondary: 'text-gray',
  info: 'text-cyan',
  warning: 'text-yellow',
  success: 'text-green',
  error: 'text-red',
  black: 'text-black',
  white: 'text-white',
};

const bgColorClasses = {
  primary: 'bg-blue-600',
  secondary: 'bg-gray-600',
  info: 'bg-cyan-600',
  warning: 'bg-yellow-500 text-black',
  success: 'bg-green-600',
  error: 'bg-red-600',
};

const placementClasses = {
  'top-start': 'grid place-items-center top-[4%] left-[2%]',
  'top-end': 'grid place-items-center top-[4%] right-[2%]',
  'bottom-start': 'grid place-items-center bottom-[4%] left-[2%]',
  'bottom-end': 'grid place-items-center bottom-[4%] right-[2%]',
};

export const Badge = ({
  label,
  bgColor = 'primary',
  children,
  textColor = 'white',
  withBorder = false,
  placement = 'top-end',
}: BadgeProps) => {
  const baseClass = `absolute rounded-full py-1 px-1 text-xs font-medium content-[''] leading-none ${placementClasses[placement]} translate-x-2/4 -translate-y-2/4`;
  const isLabel = label ? 'min-w-[24px] min-h-[24px]' : 'min-w-[12px] min-h-[12px]';
  const isBorder = withBorder && 'border-2 border-white';
  return (
    <div className="relative inline-flex">
      {children}
      <span className={`${baseClass} ${isLabel} ${textColorClasses[textColor]} ${bgColorClasses[bgColor]} ${isBorder}`}>
        {label}
      </span>
    </div>
  );
};
