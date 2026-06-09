import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98]",
        accent:
          "bg-accent text-accent-foreground hover:brightness-110 active:scale-[0.98]",
        gold: "bg-gold text-gold-foreground hover:brightness-105 active:scale-[0.98]",
        outline:
          "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground active:scale-[0.98]",
        ghost: "text-primary hover:bg-secondary active:scale-[0.98]",
        navCta:
          "text-foreground bg-nav-button text-white hover:bg-nav-button/85 active:scale-[0.97]",
        hero: "bg-accent text-accent-foreground hover:brightness-110 active:scale-[0.97]",
        heroOutline:
          "bg-white text-primary hover:brightness-95 active:scale-[0.97]",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 px-4",
        lg: "h-12 px-7 text-base",
        xl: "h-14 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
