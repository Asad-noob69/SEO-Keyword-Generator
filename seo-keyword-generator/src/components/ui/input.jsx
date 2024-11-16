import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Input = forwardRef(({ 
  className, 
  type = "text",
  error,
  icon: Icon,
  ...props 
}, ref) => {
  return (
    <div className="relative w-full">
      {Icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <Icon className="h-5 w-5" />
        </div>
      )}
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-lg border border-gray-700 bg-black/40 px-4 py-2 text-base",
          "text-white placeholder:text-gray-400",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "transition-all duration-200 backdrop-blur-sm",
          Icon && "pl-10",
          error && "border-red-500 focus:ring-red-500",
          className
        )}
        ref={ref}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
});


Input.displayName = "Input";

export { Input };