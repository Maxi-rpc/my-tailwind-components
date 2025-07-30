type ButtonProps = {
  label: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'info' | 'warning' | 'success' | 'error';
  variant?: 'filled' | 'outlined' | 'text';
};

const sizeClasses = {
  sm: 'px-2 py-2 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
};

const colorClasses = {
  filled: {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
    info: 'bg-cyan-600 hover:bg-cyan-700 text-white',
    warning: 'bg-yellow-500 hover:bg-yellow-600 text-black',
    success: 'bg-green-600 hover:bg-green-700 text-white',
    error: 'bg-red-600 hover:bg-red-700 text-white',
  },
  outlined: {
    primary: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
    secondary: 'border border-gray-600 text-gray-600 hover:bg-gray-50',
    info: 'border border-cyan-600 text-cyan-600 hover:bg-cyan-50',
    warning: 'border border-yellow-500 text-yellow-600 hover:bg-yellow-50',
    success: 'border border-green-600 text-green-600 hover:bg-green-50',
    error: 'border border-red-600 text-red-600 hover:bg-red-50',
  },
  text: {
    primary: 'text-blue-600 hover:underline',
    secondary: 'text-gray-600 hover:underline',
    info: 'text-cyan-600 hover:underline',
    warning: 'text-yellow-600 hover:underline',
    success: 'text-green-600 hover:underline',
    error: 'text-red-600 hover:underline',
  },
};

export const Button = ({ label, size = 'md', color = 'primary', variant = 'filled' }: ButtonProps) => {
  return <button className={`rounded transition ${sizeClasses[size]} ${colorClasses[variant][color]}`}>{label}</button>;
};
