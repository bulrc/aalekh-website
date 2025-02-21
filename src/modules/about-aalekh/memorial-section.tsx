"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { BERKSHIRE_SWASH } from "@/app/fonts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel";
import { Parallax } from "@/components/parallax";
import { Wrapper } from "@/components/wrapper";
import { cn } from "@/utils/cn";
import { minWidth } from "@/utils/media-query";


interface MemorialSectionProps {}

const PREVIOUS_GUEST_DATA = [
  {
    image: "/previous-guests/previous-guest-1.webp",
    name: "Dr. Ramesh Pokhriyal 'Nishank'",
    title: "The Hon’ble Chief Guest and Former Union Minister of Education",
    message:
      "Having written and published more than 110 books across genres, Dr. Ramesh Pokhriyal 'Nishank' has been known as someone who always “listens” and is “open to ideas”. His compositions have been included in the curriculum of several universities in India as well as abroad.",
  },
  {
    image: "/previous-guests/previous-guest-2.webp",
    name: "Dr. Kiran Bedi",
    title: "IPS",
    message:
      "India's first and the highest ranked woman officer in the Indian Police Service, Dr. Kiran Bedi is also a brilliant author herself. Subject of her works include humane policing and leadership. She also contributes to leading newspapers and magazines as a columnist.",
  },
  {
    image: "/previous-guests/previous-guest-3.webp",
    name: "Mr. Harjeet Khanduja",
    title: "Author",
    message:
      "A prolific international author of two business and management books, a poet, and a well-known speaker, he is well known for his writing approach, writing philosophy, vision, and contribution to business literature.",
  },
  {
    image: "/previous-guests/previous-guest-4.webp",
    name: "Ms. Swapna Liddle",
    title: "Author",
    message:
      "Known for her books and love for the city of Delhi, Ms. Swapna Liddle is a celebrated author and historian who has worked hard to raise awareness about the city's historic neighborhoods and buildings – through her writing, heritage walks, lectures, mainstream and social media.",
  },
  {
    image: "/previous-guests/previous-guest-5.webp",
    name: "Mr. Ankit Jhamb",
    title: "Author",
    message:
      "Mr. Ankit Jhamb is a senior leader and an excellent author, working with one of the world’s largest consulting organizations, Grant Thornton Bharat LLP. He is well known for producing three bestsellers in a span of three years.",
  },
  {
    image: "/previous-guests/previous-guest-6.webp",
    name: "Ms. Sutapa Basu",
    title: "Author",
    message: `With awards such as Best Fiction Award by AutHer Awards 2020, and First Prize of TOI’s "Write India Campaign 2016" to her name, Ms. Sutapa Basu dabbles in historical fiction. She works with publishing houses such as Oxford University Press and Readomania.`,
  },
  {
    image: "/previous-guests/previous-guest-7.webp",
    name: "Dr. Harshali Singh",
    title: "Author",
    message:
      "Delhi based member of the District Consumer Dispute Redressal Commission, Dr. Harshali Singh is a writer, an academician and an occupational therapist. She has also presided over crucial discussions with eminent personalities in fields of world peace and meditation.",
  },
  {
    image: "/previous-guests/previous-guest-8.webp",
    name: "Mr. Vikas Dua",
    title: "Author",
    message:
      "A leading voice of the HR community in India, Vikas Dua has spent over 18 years in the domain holding leadership positions across industry sectors. An ardent Vlogger and Blogger on HR practices, his articles are regularly featured in leading magazines.",
  },
];

export const MemorialSection: React.FC<MemorialSectionProps> = ({}) => {
  const [changeButton, setChangeButton] = useState<boolean>(false);
  const isLaptop = useMediaQuery({ query: minWidth("lg") });
  const carouselButtonClasses = `h-[40px] w-[40px] lg:h-[60px] lg:w-[50px] rounded-[14px]`;

  useEffect(() => {
    setChangeButton(isLaptop);
  }, [isLaptop]);

  return (
    <>
      
      <div
        style={{ backgroundImage: "url(./testimonial-bg.webp)" }}
        className={`bg-cover overflow-hidden py-20 h-fit`}
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
              Previous Guests
            </span>
          </div>
          <Carousel
            className={`w-full lg:w-2/3 m-auto`}
            opts={{
              loop: true,
            }}
          >
            <CarouselContent className={`pb-10 sm:pb-12 lg:pb-0`}>
              {PREVIOUS_GUEST_DATA.map((g, i) => {
                return (
                  <CarouselItem key={i}>
                    <div className={`flex gap-4 flex-col lg:flex-row`}>
                      <div className={`flex-1 flex flex-col items-center`}>
                        <Image
                          alt={`Photo of ${g.name}`}
                          src={g.image}
                          width={360}
                          height={360}
                        />
                        <div className={`text-center`}>
                          <h4 className={`text-2xl font-black`}>{g.name}</h4>
                          <p className={`w-2/3 m-auto mt-1 font-semibold`}>
                            {g.title}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`leading-6 font-semibold flex-1 mt-6 lg:mt-[15%] text-center lg:text-left`}
                      >
                        <p className={`m-auto w-[90%] para`}>
                          <span
                            className={`text-primary text-5xl mr-1 leading-[0px] hidden lg:inline-block`}
                          >
                            &#x201C;
                          </span>
                          {g.message}
                        </p>
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
      
      <Parallax image="/parallax-1.webp" />

      <Wrapper className={`py-10 md:py-16 lg:pt-40 `}>
        <div
          className={`flex gap-10 md:gap-4 justify-between flex-col md:flex-row`}
        >
          <div className={`leading-6 font-semibold w-[100%] para`}>
  <p className={`mb-4`}>
    AALEKH 2K23 was honored to host Dr. Kiran Bedi, Former Lieutenant Governor
    of Puducherry and India&apos;s first woman IPS officer, as the Guest of Honour.
    The event was further distinguished by the presence of Dr. Ramesh
    Pokhriyal &lsquo;Nishank,&lsquo; Member of Parliament and Former Education Minister,
    who attended as the Chief Guest.
  </p>
  <p className={`mb-4`}>
    The festival also featured an esteemed lineup of speakers, including HR
    industry expert Mr. Vikas Dua, author and poet Dr. Harshali Singh, Chief
    Learning Officer at Grant Thornton Bharat, Mr. Ankit Jhamb, author Ms.
    Sutapa Basu, Delhi historian Ms. Swapna Liddle, and HR leader Dr. Harjeet
    Khanduja. These distinguished guests conducted insightful workshops and
    shared their expertise, covering diverse topics such as emotional
    intelligence and self-discovery through expressive writing.
  </p>
</div>

          <div
            className={`w-full grid place-items-center translate-y-0 lg:translate-y-[-80px]`}
          >
            <Image
              alt="Sample Photo"
              src={`/memorial-masonry-1.webp`}
              width={400}
              height={400}
              quality={100}
            />
          </div>
        </div>
      </Wrapper>
    </>
  );
};
