"use client";

import Image from "next/image";

import { LrcSection } from "./lrc-section";

import { BERKSHIRE_SWASH } from "@/app/fonts";
import { Parallax } from "@/components/parallax";
import { Wrapper } from "@/components/wrapper";
import { cn } from "@/utils/cn";


interface AboutLrcProps {}

export const AboutLrc: React.FC<AboutLrcProps> = ({}) => {
  return (
  <>
    <LrcSection />
    <Parallax image="/parallax-4.webp" />
    <Wrapper className={`py-10 md:py-16`} id="memorial">
        <div className={`pb-16 min-[920px]:pb-24`}>
          <Image
            alt="Aalekh Logo"
            src={`/aalekh-logo.png`}
            width={289}
            height={100}
          />
          <span
            className={cn(
              BERKSHIRE_SWASH.className,
              `text-4xl ml-12 sm:ml-20 sm:text-5xl block font-bold text-primary`
            )}
          >
            A memorial
          </span>
        </div>
        <div
          className={`flex gap-10 md:gap-4 justify-between flex-col md:flex-row`}
        >
          <div className={`leading-6 font-semibold w-[100%] para`}>
            <p className={`mb-4`}>
              Bennett University Learning Resource Centre (Library) serves as a gateway
              to academic discovery, offering a wealth of knowledge. Equipped with
              state-of-the-art infrastructure, it seamlessly supports reading and
              research needs.
            </p>
            <p className={`mb-2`}>
              The library provides a diverse collection of contemporary educational
              resources in both digital and print formats, including databases, books,
              journals, periodicals, e-journals, and publications from esteemed
              international publishers.
            </p>
          </div>
          <div
            className={`w-full grid place-items-center translate-y-0 lg:translate-y-[-80px]`}
          >
            <Image
              alt="Sample Photo"
              src={`/memorial-masonry-3.webp`}
              width={400}
              height={400}
              quality={100}
            />
          </div>
        </div>
        <div
          className={`flex gap-10 md:gap-4 justify-between flex-col-reverse md:flex-row mt-20 mb-20 md:mb-0`}
        >
          <div
            className={`w-full grid place-items-center translate-y-0 lg:translate-y-[-80px]`}
          >
            <Image
              alt="Sample Photo"
              src={`/memorial-masonry-2.webp`}
              width={400}
              height={400}
              quality={100}
            />
          </div>
          <div className={`leading-6 font-semibold w-[100%] para`}>
            <p className={`mb-4`}>
              The library is committed to offering state-of-the-art facilities, including
              24/7 access to online learning tools. It operates on the automated KOHA
              Integrated Library Management System, leveraging modern technology for
              seamless functionality.
            </p>
            <p className={`mb-4`}>
              To preserve and share intellectual contributions, the library utilizes
              DSpace, an open-source software, to develop its institutional repository,
              BU DRS—an initiative inspired by its academic partner, Georgia Tech, USA.
              BU DRS is designed to collect, organize, preserve, and disseminate
              scholarly work at both local and global levels.
            </p>
            <p className={`mb-4`}>
              With several innovative initiatives on the horizon, the library is set to
              evolve into a dynamic hub for education and learning.
            </p>
          </div>

        </div>
      </Wrapper>
  </>
    );
}; 