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
      style={{ backgroundImage: "url(./2k25/books-with-bg.png)" }}
      className="h-screen bg-cover bg-center bg-no-repeat relative"
    >
      <Navigation />
      {mounted ? (
        <Wrapper className="relative h-[calc(100vh-100px)]">
          {/* <Image
            alt="feather 1"
            src="/2k25/books-logo.png"
            width={2000}
            height={400}
            priority
            quality={100}
            className={cn(
              "h-screen bg-cover bg-center bg-no-repeat relative",
              isLaptop ? "w-full" : "w-0"
            )}
            draggable={false}
          /> */}
          
          {/* Feather Images */}
          <Image
            alt="feather 1"
            src="/2k25/Leaf-only.png"
            width={2000}
            height={400}
            priority
            quality={100}
            className={cn(
              "absolute top-[-4%] left-[2%] z-0",
              isLaptop ? "w-[1180px]" : "w-0"
            )}
            draggable={false}
          />
          
          <Image
            alt="feather 2"
            src="/2k25/OpenBooks-only.png"
            width={2000}
            height={300}
            priority
            quality={100}
            className={cn(
              "absolute top-[-5%] right-[0%] z-10",
              isLaptop ? "w-[1180px]" : "w-32"
            )}
            draggable={false}
          />
          
          <Image
            alt="feather 3"
            src="/2k25/BookOnly.png"
            width={2000}
            height={300}
            priority
            quality={100}
            className={cn(
              "absolute bottom-[-25%] left-[14%] z-10 ",
              isLaptop ? "w-[1180px]" : "w-32"
            )}
            draggable={false}
          />

          {/* Middle Layer Image
          <Image
            alt="middle layer image"
            src="/2k25/Hero-Bg.png"
            width={1500}
            height={1080}
            priority
            quality={100}
            className={cn(
              "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20"
            )}
            draggable={false}
          /> */}

          {/* Top Layer Images */}
          <Image
            alt="Notes Icon"
            src="/2k25/notes-dark.png"
            width={400}
            height={422.17}
            priority
            quality={100}
            className={cn(
              "z-30 left-[25%] absolute translate-y-[-55%] top-[40%] min-[600px]:top-[50%]",
              !isLaptop ? "left-[53%] max-w-[80vw]" : null,
              "translate-x-[-55%]"
            )}
            draggable={false}
          />

          {isLaptop ? (
            <Image
              alt="Alaekh Logo"
              src="/2k25/aalekh-logo.png"
              width={(879 / 100) * (isLaptop ? 80 : 50)}
              height={(750 / 100) * (isLaptop ? 80 : 50)}
              priority
              quality={100}
              className={cn("bottom-[27%] right-[5%] absolute z-30")}
              draggable={false}
            />
          ) : null}
        </Wrapper>
      ) : null}
    </section>
  );
};