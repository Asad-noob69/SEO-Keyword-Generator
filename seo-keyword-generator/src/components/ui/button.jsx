import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Button = forwardRef(({ className, ...props }, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white",
        "hover:from-blue-600 hover:via-blue-700 hover:to-blue-800",
        "h-13 px-8 py-1 shadow-lg shadow-blue-500/50 hover:shadow-blue-600/50",
        "transform transition-transform hover:scale-105 active:scale-95",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button };
