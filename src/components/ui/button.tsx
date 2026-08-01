import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-center text-sm font-medium tracking-wide uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-cocoa text-white hover:bg-[#3a2518] shadow-sm hover:shadow-md",
        forest:
          "bg-forest text-white hover:bg-[#2d4f32] shadow-sm hover:shadow-md",
        gold: "bg-gold text-cocoa hover:bg-[#d4a84a] shadow-sm hover:shadow-md",
        outline:
          "border border-gold bg-transparent text-gold hover:bg-gold/10",
        "outline-cocoa":
          "border border-cocoa/20 bg-transparent text-cocoa hover:border-cocoa hover:bg-cocoa/5",
        ghost: "bg-transparent text-cocoa hover:bg-cocoa/5",
        link: "bg-transparent text-gold underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-11 px-6 py-2",
        // Compact only once there is a precise pointer; stays tappable on phones.
        sm: "h-11 px-4 text-xs md:h-9",
        lg: "h-12 px-8 text-sm",
        xl: "h-14 px-10 text-sm",
        icon: "h-11 w-11 md:h-10 md:w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
