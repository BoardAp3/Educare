/** @format */

import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", type, label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={props.id}
            className="text-[16px] font-montserrat font-normal text-slate"
          >
            {label}
          </label>
        )}
        <input
          type={type}
          className={`flex h-[40px] w-full rounded-[16px] bg-[#F8F5F5] px-[17px] py-[11px] text-[16px] font-montserrat text-slate placeholder:text-slate/40 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all border-none ${
            error ? "ring-2 ring-red-500" : ""
          } ${className}`}
          ref={ref}
          {...props}
        />
        {error && <span className="text-red-500 text-xs">{error}</span>}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
