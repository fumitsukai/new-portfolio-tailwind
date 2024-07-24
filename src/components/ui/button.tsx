import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default:
          "bg-raisinBlack text-linen hover:bg-raisinBlack/90 dark:bg-linen dark:text-raisinBlack dark:hover:bg-linenDark",
        destructive:
          "bg-red-500 text-linen hover:bg-red-500/90 dark:bg-red-900 dark:text-linen dark:hover:bg-red-900/90",
        outline:
          "border border-slate-200 bg-linen hover:bg-linenDark hover:text-raisinBlack dark:border-slate-800 dark:bg-raisinBlack dark:hover:bg-slate-800 dark:hover:text-linen dark:text-linen",
        secondary:
          "bg-slate-100 text-raisinBlack hover:bg-slate-100/80 dark:bg-slate-800 dark:text-linen dark:hover:bg-slate-800/80",
        ghost:
          "hover:bg-slate-100 hover:text-raisinBlack dark:hover:bg-slate-800 dark:hover:text-linen",
        link: "text-raisinBlack underline-offset-4 hover:underline dark:text-linen",
        transparent: "bg-transparent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
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
