import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base  font-semibold ring-offset-white transition-colors",
  {
    variants: {
      variant: {
        default: "bg-[#39e629] text-primary hover:bg-green-hover",
       primary:'bg-primary text-white',
       outline:'border border-[#39e629] bg-transparent text-[#39e629] hover:bg-[#39e629] hover:text-primary'
      },
      size: {
        default: "h-[44px] px-6",
        md: "h-[48px] px-6",
        lg: "h-[50px] px-6 text-sm uppercase tracking-[2px]",
      
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
