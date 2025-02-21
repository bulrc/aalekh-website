"use client";

import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import { BERKSHIRE_SWASH } from "@/app/fonts";
import { Wrapper } from "@/components/wrapper";
import { cn } from "@/utils/cn";
import { maxWidth } from "@/utils/media-query";

interface ChancellorMessageProps {}

export const ChancellorMessage: React.FC<ChancellorMessageProps> = ({}) => {
  const isBreakpoint = useMediaQuery({ query: maxWidth(920) });

  return (
    <Wrapper className={`py-10 md:py-16`}>
      <div className={`pb-16 min-[920px]:pb-24`}>
        <span className={`text-4xl sm:text-5xl block font-medium`}>
          Chancellor’s
        </span>
        <span className={cn(BERKSHIRE_SWASH.className, `heading ml-10`)}>
          mess<span className={`text-primary`}>a</span>ge
        </span>
      </div>
      <div
        className={`flex min-[920px]:gap-20 xl:gap-28 flex-col min-[920px]:flex-row`}
      >
        <div className={`leading-6 font-semibold para`}>
          <p className={`mb-4`}>
            Literature has, for centuries, been a hugely powerful medium, with
            its commentaries on society inspiring countless revolutions and
            reformations. In honour of the impressions books have had on us and
            the world around, Bennett University proudly presents &quot;AALEKH
            2k24: The Carnival of Book&apos;s&quot; - the second edition of the
            two-day annual bilingual literary fest.
          </p>
          <p className={`mb-4`}>
            In its first edition in 2023, AALEKH celebrated literary texts with
            a stellar line-up of exemplary authors and public speakers. The
            guests shared their words of wisdom --and young minds at Bennett
            University experienced learning beyond the classroom, so necessary
            for their all-round development.
          </p>
          <p className={`mb-4`}>
            As we return with the second edition of AALEKH this March of 2024,
            we envision for it to connect all readers and writers in Bennett
            University with renowned, established academicians and authors,
            poets and publishers so as to foster appreciation for the power of
            the written word.
          </p>
          <p className={`mb-4`}>
            I hereby extend my invitation to writers, motivational speakers and
            publishing houses to join our celebration and be a part of AALEKH
            2k24: The Carnival of Books.
          </p>
          <p>
            Best Wishes,
            <br />
            Vineet Jain <br />
            Chancellor, Bennett University. <br />
            MD The Times Group <br />
          </p>
        </div>

        <div
          className={`w-full min-[920px]:w-[50%] min-[920px]:min-w-[400px] place-items-end min-[920px]:place-items-start grid mt-10 min-[490px]:mt-0`}
        >
          <Image
            alt="Photo of Mr. Vineet Jain"
            src={"/chancellor.png"}
            width={isBreakpoint ? 165 : 280}
            height={isBreakpoint ? 220 : 340}
            quality={100}
            draggable={false}
            className={`translate-y-0 min-[490px]:translate-y-[-100px] min-[920px]:translate-y-0`}
          />
        </div>
      </div>
    </Wrapper>
  );
};
