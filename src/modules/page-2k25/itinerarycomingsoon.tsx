"use client";

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { BERKSHIRE_SWASH } from "@/app/fonts";
// import {
//   Table,
//   TableHeader,
//   TableRow,
//   TableHead,
//   TableBody,
//   TableCell,
// } from "@/components/table";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/tabs";
import { Wrapper } from "@/components/wrapper";
import { cn } from "@/utils/cn";
import { minWidth } from "@/utils/media-query";

interface ItineraryProps {}

export const ItineraryComingSoon: React.FC<ItineraryProps> = ({}) => {
  const isLargeScreen = useMediaQuery({ query: minWidth(620) });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <Wrapper className={`py-10 md:py-16`} id="itinerary">
      <div className={`pb-16 min-[920px]:pb-24`}>
        <span className={cn(BERKSHIRE_SWASH.className, `heading`)}>
          Itiner<span className={`text-primary`}>a</span>ry
        </span>
      </div>

      <div className="flex flex-col items-center mt-48 mb-48">
        <p
          className={cn(
            BERKSHIRE_SWASH.className,
            `text-7xl text-primary text-center`
          )}
        >
          Coming Soon...
        </p>
      </div>
    </Wrapper>
  ) : null;
};
