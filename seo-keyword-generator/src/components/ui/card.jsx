import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Card = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border border-gray-700 bg-black/40 text-gray-400 shadow-lg",
        "backdrop-blur-none sm:backdrop-blur-sm", // No blur on mobile, small blur on larger screens
        className
      )}
      {...props}
    />
  );
});
Card.displayName = "Card";

const CardHeader = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  );
});
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef(({ className, ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={cn(
        "font-semibold leading-none tracking-tight text-white",
        className
      )}
      {...props}
    />
  );
});
CardTitle.displayName = "CardTitle";

const CardContent = forwardRef(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  );
});
CardContent.displayName = "CardContent";

export { Card, CardHeader, CardTitle, CardContent };
