"use client";
import { Parallax } from "../../components/parallax";
import { AUTHOR_DATA_2k24, AUTHOR_DATA_2k25, CHIEF_AUTHOR_DATA_2k24, CHIEF_AUTHOR_DATA_2k25 } from "../../lib/constant";
import { Authors2k25 } from "../common/authors2k25";


import { ChancellorMessage } from "./chancellor-message";
// import { Collaborators } from "./collaborators";
import { HeroSection } from "./hero-section";
import { Itinerary } from "./itinerary";
// import { Itinerary } from "./itinerary";
import { ItineraryComingSoon } from "./itinerarycomingsoon";

interface Page2k25Props {}

export const Page2k25: React.FC<Page2k25Props> = ({}) => {
  return (
    <>
      <HeroSection />
      <ChancellorMessage />
      {/* <AuthorsComingSoon
        authors={AUTHOR_DATA_2k24}
        chiefAuthors={CHIEF_AUTHOR_DATA_2k24}
      /> */}
      <Authors2k25 
      authors={AUTHOR_DATA_2k25}
      chiefAuthors={CHIEF_AUTHOR_DATA_2k25} 
      />
      <Parallax image="/parallax-2.webp" />
      {/* <ItineraryComingSoon />
       */}
      <Itinerary />
      <Parallax image="/parallax-4.webp" />
      {/* <Collaborators /> */}
    </>
  );
};
