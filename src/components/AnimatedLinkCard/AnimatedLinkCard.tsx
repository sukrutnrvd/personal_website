"use client";

import Image, { StaticImageData } from "next/legacy/image";

import { FC } from "react";
import { Heading } from "../UI";
import { Language } from "@/types";
import Link from "next/link";
import styles from "./AnimatedLinkCard.module.css";

interface AnonymousProps {
  src: StaticImageData;
  text: string;
  link: string;
  language: Language;
}
const AnimatedLinkCard: FC<AnonymousProps> = ({
  language,
  link,
  src,
  text,
}) => {
  return (
    <Link href={`${language}${link}`} className={styles["animated-link-card"]}>
      <Image
        objectPosition="center"
        objectFit="cover"
        layout="fill"
        src={src}
        alt={text}
        width={0}
        height={0}
        sizes="100vw"
        unoptimized
        priority
      />
      <div className={styles["animated-link-card__text"]}>
        <Heading size="m">{text}</Heading>
      </div>
    </Link>
  );
};

export default AnimatedLinkCard;
