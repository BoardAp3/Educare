import * as React from "react";
import { LucideIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "ghost";
  iconLeft?: LucideIcon;
  iconRight?: LucideIcon;
  iconSize?: number;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "solid", iconLeft: IconLeft, iconRight: IconRight, iconSize = 20, children, ...props }, ref) => {
    const baseStyles = "cursor-pointer inline-flex items-center justify-center font-plus font-medium rounded-[8px] transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none gap-[10px] px-[20px] py-[10px] text-[16px] leading-none";
    
    const variants = {
      solid: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
      ghost: "bg-white text-primary border border-primary/20 hover:bg-gray-50 focus:ring-gray-200",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    return (
      <button
        ref={ref}
        className={combinedClassName}
        {...props}
      >
        {IconLeft && <IconLeft size={iconSize} />}
        {children && <span>{children}</span>}
        {IconRight && <IconRight size={iconSize} />}
      </button>
    );
  }
);

Button.displayName = "Button";
