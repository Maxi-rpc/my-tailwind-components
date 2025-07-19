type ButtonProps = {
  label: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'info' | 'warning' | 'success' | 'error';
};

const sizeClasses = {
  sm: 'px-2 py-2 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
};

const colorClasses = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
  info: 'bg-cyan-600 hover:bg-cyan-700 text-white',
  warning: 'bg-yellow-500 hover:bg-yellow-600 text-black',
  success: 'bg-green-600 hover:bg-green-700 text-white',
  error: 'bg-red-600 hover:bg-red-700 text-white',
};

export const Button = ({ label, size = 'md', color = 'primary' }: ButtonProps) => {
  return <button className={`rounded transition ${sizeClasses[size]} ${colorClasses[color]}`}>{label}</button>;
};
