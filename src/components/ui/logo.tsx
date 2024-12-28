import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  showText?: boolean;
}

const Logo = ({ showText = true, className, ...props }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)} {...props}>
      <div className="relative w-8 h-8 md:w-10 md:h-10">
        <img
          src="/logo.svg"
          alt="Holy Cross School Kabuganj"
          className="w-full h-full object-contain"
        />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className="text-lg font-bold leading-none">HCSK</span>
          <span className="text-xs text-muted-foreground leading-none">
            Holy Cross School
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
