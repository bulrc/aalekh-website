import { BREAKPOINTS } from "@/lib/constant";

export const minWidth = (breakpoint: keyof typeof BREAKPOINTS | number) =>
  `(min-width: ${
    typeof breakpoint == "string" ? BREAKPOINTS[breakpoint] : breakpoint
  }px)`;

export const maxWidth = (breakpoint: keyof typeof BREAKPOINTS | number) =>
  `(max-width: ${
    typeof breakpoint == "string" ? BREAKPOINTS[breakpoint] : breakpoint
  }px)`;
