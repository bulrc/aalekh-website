import { DetailedHTMLProps } from "react";

import { cn } from "@/utils/cn";

interface WrapperProps
  extends DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  children: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section
      className={cn(
        `max-w-[1536px] mx-auto px-10 md:px-14 lg:px-16 scroll-mt-16`,
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};
