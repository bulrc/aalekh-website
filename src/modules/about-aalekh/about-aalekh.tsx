"use client";

import { MemorialSection } from "./memorial-section";
import { WhatIsAalekh } from "./what-is-aalekh";

import { Parallax } from "@/components/parallax";

interface AboutAalekhProps {}

export const AboutAalekh: React.FC<AboutAalekhProps> = ({}) => {
  return (
  <>
    <WhatIsAalekh />
    <Parallax image="/parallax-2.webp" />
    <MemorialSection />
  </>
    );
}; 