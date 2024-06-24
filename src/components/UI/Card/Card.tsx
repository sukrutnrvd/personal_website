import { ProgrammingLanguage } from "@/types";
import styles from "./Card.module.css";
import Image from "next/legacy/image";
import { FC, useEffect, useState } from "react";
import { Heading, Text } from "@/components/UI";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { SiTypescript, SiSolidity, SiPug } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  language: ProgrammingLanguage;
  src: string;
  link: string;
  homepage?: string | null;
}

const logoByLanguage: Record<ProgrammingLanguage, JSX.Element> = {
  JavaScript: <IoLogoJavascript size={25} />,
  TypeScript: <SiTypescript size={25} />,
  CSS: <IoLogoCss3 size={25} />,
  Solidity: <SiSolidity size={25} />,
  Pug: <SiPug size={25} />,
};

const Card: FC<CardProps> = ({
  description,
  language,
  title,
  src,
  link,
  homepage,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <Link className={styles.card} href={link} target="_blank">
        {homepage && (
          <span>
            <Link
              href={homepage}
              target="_blank"
              className={styles.card__homepage}
            >
              <FaExternalLinkAlt size={15} color="black" />
            </Link>
          </span>
        )}

        <Image src={src} width="300" height="200" alt="GitHub Logo" />
        <div className={styles.card__header}>
          <Heading size="s">{title}</Heading>
          {logoByLanguage[language]}
        </div>
        <Text>{description}</Text>
      </Link>
    )
  );
};

export default Card;
