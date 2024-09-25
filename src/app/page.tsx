/** @format */

import FilterHero from "@/components/FilterHero";
import Hero from "@/components/Hero";
import MobileGallery from "@/components/MobileGallery";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <MobileGallery />
      <FilterHero />
      <Faq />
    </>
  );
}
