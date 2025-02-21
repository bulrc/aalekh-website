"use client";
import { Parallax } from "../../components/parallax";
import { AUTHOR_DATA_2k24, CHIEF_AUTHOR_DATA_2k24 } from "../../lib/constant";
import { Authors } from "../common/authors";

import ImageGallery from "./ImageGallery";
import { ChancellorMessage } from "./chancellor-message";
import { Collaborators } from "./collaborators";
import { HeroSection } from "./hero-section";
import { Itinerary } from "./itinerary";

interface Page2k24Props {}

export const Page2k24: React.FC<Page2k24Props> = ({}) => {
  return (
    <>
      <HeroSection />
      <ChancellorMessage />
      <ImageGallery />
      <Authors
        authors={AUTHOR_DATA_2k24}
        chiefAuthors={CHIEF_AUTHOR_DATA_2k24}
      />
      <Parallax image="/parallax-2.webp" />
      <Itinerary />
      <Parallax image="/parallax-4.webp" />
      <Collaborators />
    </>
  );
};
