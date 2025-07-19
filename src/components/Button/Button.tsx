type ButtonProps = {
  label: string;
  size?: 'sm' | 'md' | 'lg';
};

const sizeClasses = {
  sm: 'px-2 py-2 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
};

export const Button = ({ label, size = 'md' }: ButtonProps) => {
  return (
    <button className={`bg-blue-600 text-white rounded hover:bg-blue-700 transition ${sizeClasses[size]}`}>
      {label}
    </button>
  );
};
