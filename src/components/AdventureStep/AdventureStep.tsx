"use client";
import { FC, useEffect, useState } from "react";
import { Button, Heading, Text } from "../UI";
import Typewriter from "typewriter-effect";
import styles from "./AdventureStep.module.css";
import { Language } from "@/types";
import { useParams } from "next/navigation";
import { getDictionary } from "@/lib/getDictionary";
interface Adventure {
  title: string;
  description: string;
}
interface AdventureStepProps {
  adventures: Adventure[];
}

const getInitialStep = (adventures: Adventure[]) => {
  const savedStep = localStorage.getItem("currentStep");
  if (!savedStep) return 0;
  const step = parseInt(savedStep);
  if (!step) return 0;
  return step >= adventures.length ? 0 : step;
};

const AdventureStep: FC<AdventureStepProps> = ({ adventures }) => {
  const { language } = useParams<{ language: Language }>();
  const { next, previous } = getDictionary(language);
  const [currentStep, setCurrentStep] = useState(0);
  const currentAdventure = adventures[currentStep];

  useEffect(() => {
    const initialStep = getInitialStep(adventures);
    setCurrentStep(initialStep);
  }, [adventures]);

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1 >= adventures.length ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => (prev - 1 < 0 ? adventures.length - 1 : prev - 1));
  };

  useEffect(() => {
    localStorage.setItem("currentStep", currentStep.toString());
  }, [currentStep]);

  return (
    <div key={currentStep} className={styles["adventure-step"]}>
      <Typewriter
        component={Heading}
        onInit={(typewriter) => {
          typewriter.typeString(currentAdventure.title).start();
        }}
        options={{
          delay: 20,
        }}
      />
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString(currentAdventure.description).start();
        }}
        component={Text}
        options={{
          delay: 10,
        }}
      />

      <div className={styles["adventure-step__buttons"]}>
        <Button onClick={handlePrev}>{previous}</Button>
        <Button onClick={handleNext}>{next}</Button>
      </div>
    </div>
  );
};

export default AdventureStep;
