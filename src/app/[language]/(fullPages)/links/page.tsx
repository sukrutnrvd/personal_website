import { FaGithub, FaInstagram } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { Heading } from "@/components/UI";
import Image from "next/image";
import { IoIosMail } from "react-icons/io";
import { LiaLinkedin } from "react-icons/lia";
import { Metadata } from "next";
import { SiFrontendmentor } from "react-icons/si";
import UserLink from "@/components/UserLink/UserLink";
import styles from "./page.module.css";

const links = [
  {
    id: 1,
    href: "https://github.com/sukrutnrvd/",
    icon: <FaGithub size={40} />,
    text: "Github",
  },
  {
    id: 2,
    href: "https://x.com/sukrutnrvd/",
    icon: <FaXTwitter size={40} />,
    text: "X",
  },

  {
    id: 3,
    href: "https://www.instagram.com/sukrutnrvd/",
    icon: <FaInstagram size={40} />,
    text: "Instagram",
  },
  {
    id: 4,
    href: "https://linkedin.com/in/sukrutanriverdi",
    icon: <LiaLinkedin size={40} />,
    text: "Linkedin",
  },
  {
    id: 5,
    href: "https://www.frontendmentor.io/profile/Hugo0o0",
    icon: <SiFrontendmentor size={40} />,
    text: "Fronted Mentor",
  },
];

const Page = () => {
  return (
    <div className={styles.links}>
      <Image
        className={styles.links__character}
        src="/character.png"
        alt="Character"
        width={300}
        height={300}
      />

      <Heading>sukrutnrvd</Heading>
      <Heading size="s">Full Stack Developer</Heading>
      <Heading size="s">sukrutanriverdi10@gmail.com</Heading>

      <div className={styles.links__buttons}>
        {links.map((link) => (
          <UserLink
            key={link.id}
            href={link.href}
            icon={link.icon}
            text={link.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
