/** @format */

import React from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={props.id}
            className="text-[18px] font-montserrat font-semibold text-slate"
          >
            {label}
          </label>
        )}
        <textarea
          className={`flex min-h-[120px] w-full rounded-[16px] bg-[#F8F5F5] px-[17px] py-[11px] text-[16px] font-montserrat text-slate placeholder:text-slate/40 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all border-none resize-none ${
            error ? "ring-2 ring-red-500" : ""
          } ${className}`}
          ref={ref}
          {...props}
        />
        {error && <span className="text-red-500 text-xs">{error}</span>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
