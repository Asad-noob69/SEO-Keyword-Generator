import { cn } from "@/lib/utils"


const Badge = ({ className, variant = "secondary", ...props }) => {
    return (
      <div
        className={cn(
          "inline-flex items-center rounded-md border border-gray-700 px-2.5 py-0.5 text-xs font-semibold",
          "transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2",
          "bg-black/40 text-white backdrop-blur-sm hover:bg-black/60",
          className
        )}
        {...props}
      />
    );
  };

export { Badge }