"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { Navigation } from "@/components/navigation";
import { Wrapper } from "@/components/wrapper";
import { cn } from "@/utils/cn";
import { minWidth } from "@/utils/media-query";

interface HeroSectionProps {}

export const HeroSection: React.FC<HeroSectionProps> = ({}) => {
  const isLaptop = useMediaQuery({ query: minWidth(1180) });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      style={{ backgroundImage: "url(./hero-section-bg.png)" }}
      className={`h-screen bg-cover`}
    >
      <Navigation />
      {mounted ? (
        <Wrapper className={`relative h-[calc(100vh-100px)]`}>
          <Image
            alt="aalekh logo and"
            src={"/aalekh-hero-banner.png"}
            width={580}
            height={422.17}
            priority
            quality={100}
            className={cn(
              `left-[30%] absolute translate-y-[-50%] top-[40%] min-[600px]:top-[50%]`,
              !isLaptop ? `left-[50%] max-w-[80vw]` : null,
              "translate-x-[-50%]"
            )}
            draggable={false}
          />
          <Image
            alt="feather 1"
            src="/hero-section-bg-2k23-book.png"
            width={1000}
            height={400}
            priority
            quality={100}
            className={cn(
              "absolute top-[-44%] left-[40%] z-0",
              isLaptop ? "w-[400px]" : "w-0"
            )}
            draggable={false}
          />

          {isLaptop ? (
            <Image
              alt="books"
              src={"/hero-section-books.png"}
              width={(629 / 100) * (isLaptop ? 80 : 50)}
              height={(650 / 100) * (isLaptop ? 80 : 50)}
              priority
              quality={100}
              className={cn(
                isLaptop ? `bottom-[-15%] right-12 absolute` : null
              )}
              draggable={false}
            />
          ) : null}
        </Wrapper>
      ) : null}
    </section>
  );
};
