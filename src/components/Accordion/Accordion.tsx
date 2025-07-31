import React, { useState } from "react";

type AccordionProps = {
  label: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'info' | 'warning' | 'success' | 'error';
  variant?: 'filled' | 'outlined' | 'text';
};

export const Accordion = ({
  label,
  children,
}: AccordionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="block relative w-full">
      <button
        type="button"
        className="flex justify-between items-center w-full py-4 border-b border-b-blue-gray-100 text-blue-gray-700 antialiased font-sans text-xl text-left font-semibold leading-snug select-none hover:text-blue-gray-900 transition-colors"
        onClick={() => setOpen((prev) => !prev)}
      >
        {label}
        <span className={`ml-4 transition-transform ${open ? "rotate-180" : ""}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.085l3.71-3.855a.75.75 0 111.08 1.04l-4.24 4.4a.75.75 0 01-1.08 0l-4.24-4.4a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 py-4" : "max-h-0 py-0"}`}
      >
        <div className="block w-full text-gray-700 antialiased font-sans text-sm font-light leading-normal">
          {children}
        </div>
      </div>
    </div>
  );
};