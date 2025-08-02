import React from 'react';

type AlertProps = {
  color?: 'primary' | 'secondary' | 'info' | 'warning' | 'success' | 'error';
  variant?: 'filled' | 'outlined';
  children?: React.ReactNode;
};

const colorClasses = {
  filled: {
    primary: 'bg-blue-700 text-white flex',
    secondary: 'bg-gray-700 text-white flex',
    info: 'bg-cyan-600 text-white flex',
    warning: 'bg-yellow-600 text-black flex',
    success: 'bg-green-700 text-white flex',
    error: 'bg-red-700 text-white flex',
  },
  outlined: {
    primary: 'border border-blue-900 text-blue-900 flex',
    secondary: 'border border-gray-600 text-gray-600 hover:bg-gray-50',
    info: 'border border-cyan-600 text-cyan-600 hover:bg-cyan-50',
    warning: 'border border-yellow-500 text-yellow-600 hover:bg-yellow-50',
    success: 'border border-green-600 text-green-600 hover:bg-green-50',
    error: 'border border-red-600 text-red-600 hover:bg-red-50',
  },
};

export const Alert = ({ children, color = 'primary', variant = 'filled' }: AlertProps) => {
  return (
    <div
      role="alert"
      className={`relative block w-full text-base font-regular px-4 py-4 rounded-lg ${colorClasses[variant][color]}`}
      style={{ opacity: 1 }}
    >
      <div className=" mr-12">{children ? children : 'A simple alert for showing message.'}</div>
    </div>
  );
};
