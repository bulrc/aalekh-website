"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { useMediaQuery } from "react-responsive";

import { AuthorData, ChiefAuthorData } from "../../lib/types";

import { BERKSHIRE_SWASH } from "@/app/fonts";
import { Wrapper } from "@/components/wrapper";
import { cn } from "@/utils/cn";
import { minWidth } from "@/utils/media-query";

interface AuthorsProps {
  chiefAuthors: ChiefAuthorData[];
  authors: AuthorData[];
  guestOfHonor?: ChiefAuthorData[];
  children?: React.ReactNode;
}

// Single card for any author (chief or special)
const AuthorCard: React.FC<{ name: string; image: string; designation?: string }> = ({
  name,
  image,
  designation,
}) => {
  return (
    <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105">
      <div className="relative overflow-hidden rounded-lg shadow-md border border-red-500/20">
        <div className="absolute inset-0 border-2 border-red-500/10 rounded-lg z-10 pointer-events-none"></div>
        <Image
          alt={`Photo of ${name}`}
          src={image}
          width={200}
          height={250}
          className="rounded-lg object-cover w-[200px] h-[250px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="text-center mt-4">
        <h4 className="text-xl font-bold text-gray-800">{name}</h4>
        {designation && (
          <p className="text-sm text-gray-600 mt-1 italic">{designation}</p>
        )}
      </div>
    </div>
  );
};

// Section title component for consistency
const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
  <h3
    className={cn(
      BERKSHIRE_SWASH.className,
      "text-3xl font-black text-primary text-center mb-10 relative"
    )}
  >
    <span className="relative z-10">
      {title}
      <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-red-500/70 rounded-full"></span>
    </span>
  </h3>
);

// Decorative element
const Divider = () => (
  <div className="flex items-center justify-center my-12">
    <div className="h-[1px] bg-red-300/30 w-1/4"></div>
    <div className="mx-4 p-2 rounded-full border border-red-500/20 bg-white/20 backdrop-blur-sm">
      <Image
        src="/aalekh-logo.png" 
        alt="Divider icon"
        width={30}
        height={30}
        className="opacity-80"
      />
    </div>
    <div className="h-[1px] bg-red-300/30 w-1/4"></div>
  </div>
);

export const Authors2k25: React.FC<AuthorsProps> = ({
  authors,
  chiefAuthors,
  guestOfHonor = [],
  children,
}) => {
  const [changeButton, setChangeButton] = useState<boolean>(false);
  const isLaptop = useMediaQuery({ query: minWidth("lg") });
  
  // Auto-scroll carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  
  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [emblaApi]);
  
  useEffect(() => {
    if (emblaApi) {
      autoplay();
    }
  }, [emblaApi, autoplay]);

  useEffect(() => {
    setChangeButton(isLaptop);
  }, [isLaptop]);

  return (
    <div
      style={{ backgroundImage: "url(./testimonial-bg.webp)" }}
      className="bg-cover overflow-hidden py-16 bg-purple-100 relative"
      id="authors"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-red-500/30"></div>
      
      <Wrapper>
        {/* Top Section */}
        <div className="text-center mb-12">
          <div className="flex flex-col items-center mb-8">
            <Image
              alt="Aalekh Logo"
              src="/aalekh-logo.png"
              width={289}
              height={100}
              className="drop-shadow-md"
            />
            <span
              className={cn(
                BERKSHIRE_SWASH.className,
                "text-4xl sm:text-5xl font-bold text-primary mt-2 drop-shadow-sm"
              )}
            >
              Carnival of books
            </span>
            <div className="flex items-center mt-3 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full border border-red-500/20 shadow-sm">
              <span className="text-2xl font-bold">2</span>
              <span className="text-2xl font-bold text-red-600">0</span>
              <span className="text-2xl font-bold">25</span>
              <span className="mx-4 text-xl italic border-r border-red-300/30 pr-4">the power of ink</span>
              <span className="text-xl font-bold">21-22 MARCH</span>
            </div>
          </div>
          
          <SectionTitle title="Welcomes The Dignitaries" />
        </div>

        {/* Chief Authors Section - Fixed to have 3 authors with equal spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {chiefAuthors.slice(0, 3).map((person, i) => (
            <div key={i} className="flex justify-center">
              <AuthorCard
                name={person.name}
                image={person.image}
                designation={person.designation}
              />
            </div>
          ))}
        </div>

        {/* Guest of Honor Section */}
        {guestOfHonor.length > 0 && (
          <>
            <Divider />
            <SectionTitle title="Guest of Honor" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {guestOfHonor.map((person, i) => (
                <div key={i} className="flex justify-center">
                  <AuthorCard
                    name={person.name}
                    image={person.image}
                    designation={person.designation}
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {/* Guest Authors Section */}
        <Divider />
        <SectionTitle title="Guest Authors" />

        <div className="w-full lg:w-3/4 mx-auto mt-8 overflow-hidden rounded-lg border border-red-500/10" ref={emblaRef}>
          <div className="flex">
            {authors.map((person, i) => (
              <div key={i} className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] px-2 py-4">
                <div className="flex flex-col items-center p-4 backdrop-blur-sm rounded-xl transition-all duration-300 hover:shadow-lg border border-red-500/10">
                  <div className="relative overflow-hidden rounded-2xl border border-red-500/20">
                    <div className="absolute inset-0 border border-red-500/10 rounded-2xl z-10 pointer-events-none"></div>
                    <Image
                      alt={`Photo of ${person.name}`}
                      src={person.image}
                      width={220}
                      height={220}
                      className="rounded-2xl object-cover w-[220px] h-[220px] transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h4 className="text-xl font-bold text-gray-800">{person.name}</h4>
                    {person.designation && (
                      <p className="text-sm text-gray-600 mt-1 italic">
                        {person.designation}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: Math.ceil(authors.length / 3) }).map((_, i) => (
            <button 
              key={i}
              className="w-2 h-2 rounded-full bg-red-500/30 hover:bg-red-500/60 transition-colors"
              onClick={() => emblaApi?.scrollTo(i * 3)}
            />
          ))}
        </div>
        
        {/* Bottom decorative element */}
        <div className="mt-16 text-center">
          <span className="inline-block px-8 py-2 bg-white/80 backdrop-blur-sm border border-red-500/20 rounded-full text-sm font-medium text-gray-700 shadow-sm">
            Join us for an incredible literary journey
          </span>
        </div>
      </Wrapper>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500/30"></div>
    </div>
  );
};