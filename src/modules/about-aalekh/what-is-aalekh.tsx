import Image from "next/image";
import Marquee from "react-fast-marquee";

import { BERKSHIRE_SWASH } from "@/app/fonts";
import { Wrapper } from "@/components/wrapper";
import { cn } from "@/utils/cn";

interface WhatIsAalekhProps {}

export const WhatIsAalekh: React.FC<WhatIsAalekhProps> = ({}) => {
  const srollerImages = Array(11)
    .fill(0)
    .map((_, i) => {
      return (
        <Image
          alt={`What is Aalekh ${i + 1}`}
          src={`/what-is-aalekh/what-is-aalekh-${i + 1}.webp`}
          width={201}
          height={133}
          key={i}
          className={`ml-3`}
        />
      );
    });
  return (
    <Wrapper className={`py-10 md:py-16`} id="about-aalekh">
      <div className={`pb-16 min-[920px]:pb-24`}>
        <span className={`text-4xl sm:text-5xl block font-medium`}>
          What is
        </span>
        <span
          className={cn(BERKSHIRE_SWASH.className, `heading ml-14 sm:ml-16`)}
        >
          aale<span className={`text-primary`}>k</span>h?
        </span>
      </div>
      <div className={`leading-6 font-semibold para`}>
        <p className={`mb-4`}>
          Inspired by the Sanskrit word for ‘writing,’ <strong>AALKEH</strong> is
          Bennett University’s annual literary festival, dedicated to
          highlighting the transformative power of words. This dynamic two-day
          bilingual event fosters a love for reading, writing, and intellectual
          discourse, with strong backing from the publishing industry.
        </p>
        <p className={`mb-4`}>
          At the onset of spring, <strong>AALKEH</strong> is a celebration of
          literature, its timeless values, and the lasting impression it leaves
          on readers.
        </p>
        <p className={`mb-4`}>
          A collaborative effort between Bennett University’s Learning Resource
          Centre and <strong>CEREBRUM</strong>, the official Literary and
          Debating Society, <strong>AALKEH</strong> unites book enthusiasts,
          authors, and thinkers in a lively ‘Carnival of Books.’
        </p>
      </div>
      <div className={`mt-10 relative`}>
        <Marquee pauseOnHover speed={45}>
          {srollerImages}
        </Marquee>
        <Marquee pauseOnHover className={`mt-3`} speed={55} direction="right">
          {srollerImages}
        </Marquee>
        <div className="hidden sm:block absolute bottom-[-30px] right-[50px] z-50">
          <Image
            alt="Book Photo"
            src={`/what-is-aalekh-book.png`}
            width={320}
            height={189}
          />
        </div>
      </div>
    </Wrapper>
  );
};
