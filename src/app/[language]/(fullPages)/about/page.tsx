"use client";
import AdventureStep from "@/components/AdventureStep/AdventureStep";
import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";
import { getDictionary } from "@/lib/getDictionary";
import { Language } from "@/types";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const { language } = useParams<{ language: Language }>();
  const { adventureEpisods } = getDictionary(language);
  return (
    <div>
      <MusicPlayer />
      <AdventureStep adventures={adventureEpisods} />
    </div>
  );
};

export default Page;
