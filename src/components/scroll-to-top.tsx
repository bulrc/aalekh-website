"use client";

import { ArrowUpIcon } from "@radix-ui/react-icons";
import { useWindowScroll } from "@uidotdev/usehooks";

import { Button } from "@/components/button";
import { cn } from "@/utils/cn";

interface ScrollToTopProps {}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({}) => {
  const [{ y }, scrollTo] = useWindowScroll();

  return (
    <Button
      variant={"floating"}
      size={"rounded"}
      className={cn(
        `z-[2000] bottom-10 right-10`,
        y && y >= 600 ? "fixed" : "hidden"
      )}
      onClick={() => scrollTo({ left: 0, top: 0, behavior: "smooth" })}
    >
      <span>
        <ArrowUpIcon width={26} height={26} />
      </span>
    </Button>
  );
};
