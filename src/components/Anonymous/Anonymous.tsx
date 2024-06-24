"use client";
import { FC } from "react";
import styles from "./Anonymous.module.css";
import Link from "next/link";
import Image, { StaticImageData } from "next/legacy/image";
import { Language } from "@/types";
import { motion } from "framer-motion";
import { Heading } from "../UI";

interface AnonymousProps {
  src: StaticImageData;
  text: string;
  link: string;
  language: Language;
}
const Anonymous: FC<AnonymousProps> = ({ language, link, src, text }) => {
  return (
    <Link href={`${language}${link}`} className={styles.anonymous}>
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
      <div className={styles.anonymous__text}>
        <Heading size="m">{text}</Heading>
      </div>
    </Link>
  );
};

export default Anonymous;
