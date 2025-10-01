import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-[48px] rounded-md border border-white/10 focus:border-[#39e629] font-light bg-primary py-4 px-4 text-base placeholder:text-white/60 outline-none",
        className
      )}
      {...props} />
  );
}

export { Input }
