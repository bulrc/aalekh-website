"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import { AuthorData, ChiefAuthorData } from "../../lib/types";

import { BERKSHIRE_SWASH } from "@/app/fonts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/carousel";
import { Wrapper } from "@/components/wrapper";
import { cn } from "@/utils/cn";
import { minWidth } from "@/utils/media-query";

interface AuthorsProps {
  chiefAuthors: ChiefAuthorData[];
  authors: AuthorData[];
  children?: React.ReactNode;
}

interface ChiefAuthorCard {
  chiefAuthor: ChiefAuthorData;
}

export const ChiefAuthorCard: React.FC<ChiefAuthorCard> = ({ chiefAuthor }) => {
  return (
    <div className={`flex gap-4 flex-col lg:flex-row`}>
      <div className={`flex-1 flex flex-col items-center`}>
        <h4
          className={cn(
            BERKSHIRE_SWASH.className,
            `text-3xl font-black text-primary text-center mb-8`
          )}
        >
          {chiefAuthor.title}
        </h4>
        <Image
          alt={`Photo of ${chiefAuthor.name}`}
          src={chiefAuthor.image}
          width={215}
          height={277}
        />
        <div className={`text-center mt-4`}>
          <h4 className={`text-2xl font-black`}>{chiefAuthor.name}</h4>
        </div>
      </div>
    </div>
  );
};

export const Authors: React.FC<AuthorsProps> = ({
  authors,
  chiefAuthors,
  children,
}) => {
  const [changeButton, setChangeButton] = useState<boolean>(false);
  const isLaptop = useMediaQuery({ query: minWidth("lg") });
  const carouselButtonClasses = `h-[40px] w-[40px] lg:h-[60px] lg:w-[50px] rounded-[14px]`;

  useEffect(() => {
    setChangeButton(isLaptop);
  }, [isLaptop]);

  return (
    <div
      style={{ backgroundImage: "url(./testimonial-bg.webp)" }}
      className={`bg-cover overflow-hidden py-32 h-fit`}
      id="authors"
    >
      <Wrapper>
        <div className={`pb-6 min-[920px]:pb-10`}>
          <Image
            alt="Aalekh Logo"
            src={`/aalekh-logo.png`}
            width={289}
            height={100}
          />
          <span
            className={cn(
              BERKSHIRE_SWASH.className,
              `text-4xl ml-20 sm:ml-32 sm:text-5xl block font-bold text-primary`
            )}
          >
            Authors
          </span>
        </div>

        <div
          className={`my-8 flex justify-center flex-col gap-16 md:flex-row md:gap-36`}
        >
          {chiefAuthors.map((person, i) => {
            return <ChiefAuthorCard chiefAuthor={person} key={i} />;
          })}
        </div>

        <h4
          className={cn(
            BERKSHIRE_SWASH.className,
            `text-3xl font-black text-primary text-center pt-12 mb-6`
          )}
        >
          Guest Authors
        </h4>

        <Carousel
          className={`w-full lg:w-2/3 m-auto`}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className={`pb-10 sm:pb-12 lg:pb-0`}>
            {authors.map((person, i) => {
              return (
                <CarouselItem key={i} className={`basis-3/3 md:basis-1/3`}>
                  <div className={`flex gap-4 flex-col lg:flex-row`}>
                    <div className={`flex-1 flex flex-col items-center`}>
                      <Image
                        alt={`Photo of ${person.name}`}
                        src={person.image}
                        width={220}
                        height={220}
                        className={`rounded-2xl`}
                      />
                      <div className={`text-center mt-4`}>
                        <h4 className={`text-xl font-black`}>{person.name}</h4>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious
            variant={"default"}
            className={cn(
              carouselButtonClasses,
              !changeButton
                ? `top-[100%] left-[48%] translate-x-[-100%]`
                : "ml-[-40px]"
            )}
          />
          <CarouselNext
            variant={"default"}
            className={cn(
              carouselButtonClasses,
              !changeButton
                ? `top-[100%] right-[48%] translate-x-[100%]`
                : "mr-[-40px]"
            )}
          />
        </Carousel>
      </Wrapper>
    </div>
  );
};
