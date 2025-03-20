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

// Single card for any author (chief or special)
const AuthorCard: React.FC<{ name: string; image: string; designation?: string }> = ({
  name,
  image,
  designation,
}) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        alt={`Photo of ${name}`}
        src={image}
        width={200}
        height={250}
        className="rounded-lg object-cover w-[200px] h-[250px]"
      />
      <div className="text-center mt-3">
        <h4 className="text-xl font-black">{name}</h4>
        {designation && (
          <p className="text-sm text-gray-600 mt-1">{designation}</p>
        )}
      </div>
    </div>
  );
};

export const Authors2k25: React.FC<AuthorsProps> = ({
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
      className="bg-cover overflow-hidden py-16 bg-purple-100"
      id="authors"
    >
      <Wrapper>
        {/* Top Section */}
        <div className="text-center mb-8">
          <div className="flex flex-col items-center mb-6">
            <Image
              alt="Aalekh Logo"
              src="/aalekh-logo.png"
              width={289}
              height={100}
            />
            <span
              className={cn(
                BERKSHIRE_SWASH.className,
                "text-4xl sm:text-5xl font-bold text-primary mt-2"
              )}
            >
              Carnival of books
            </span>
            <div className="flex items-center mt-2">
              <span className="text-2xl font-bold">2</span>
              <span className="text-2xl font-bold text-yellow-600">0</span>
              <span className="text-2xl font-bold">25</span>
              <span className="mx-4 text-xl italic">the power of ink</span>
              <span className="text-xl font-bold">21-22 MARCH</span>
            </div>
          </div>
          <h3
            className={cn(
              BERKSHIRE_SWASH.className,
              "text-3xl font-black text-primary text-center mb-10"
            )}
          >
            Welcomes The Dignitaries
          </h3>
        </div>

        {/* Chief Authors Section */}
        {/* Use a uniform layout: flex-wrap with consistent spacing */}
        <div className="flex flex-wrap items-center justify-center gap-12 my-8">
          {chiefAuthors.slice(0, 2).map((person, i) => (
            <AuthorCard
              key={i}
              name={person.name}
              image={person.image}
              designation={person.designation}
            />
          ))}
        </div>

        {/* Special Guests Section (remaining chief authors) */}
        <div className="flex flex-wrap items-center justify-center gap-12">
          {chiefAuthors.slice(2).map((person, i) => (
            <AuthorCard
              key={i}
              name={person.name}
              image={person.image}
              designation={person.designation}
            />
          ))}
        </div>

        {/* Guest Authors Section */}
        <h4
          className={cn(
            BERKSHIRE_SWASH.className,
            "text-3xl font-black text-primary text-center pt-12"
          )}
        >
          Guest Authors
        </h4>

        <Carousel
          className="w-full lg:w-2/3 mx-auto mt-4"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="pb-10 sm:pb-12 lg:pb-0">
            {authors.map((person, i) => (
              <CarouselItem key={i} className="basis-3/3 md:basis-1/3">
                <div className="flex flex-col items-center">
                  <Image
                    alt={`Photo of ${person.name}`}
                    src={person.image}
                    width={220}
                    height={220}
                    className="rounded-2xl object-cover w-[220px] h-[220px]"
                  />
                  <div className="text-center mt-4">
                    <h4 className="text-xl font-black">{person.name}</h4>
                    {person.designation && (
                      <p className="text-sm text-gray-600 mt-1">
                        {person.designation}
                      </p>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel Controls */}
          <CarouselPrevious
            variant="default"
            className={cn(
              carouselButtonClasses,
              !changeButton
                ? "top-[100%] left-[48%] translate-x-[-100%]"
                : "ml-[-40px]"
            )}
          />
          <CarouselNext
            variant="default"
            className={cn(
              carouselButtonClasses,
              !changeButton
                ? "top-[100%] right-[48%] translate-x-[100%]"
                : "mr-[-40px]"
            )}
          />
        </Carousel>
      </Wrapper>
    </div>
  );
};
