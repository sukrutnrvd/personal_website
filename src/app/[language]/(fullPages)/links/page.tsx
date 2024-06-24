import UserLink from "@/components/UserLink/UserLink";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiFrontendmentor } from "react-icons/si";
import { IoIosMail } from "react-icons/io";
import styles from "./page.module.css";
import Image from "next/image";
import { Heading } from "@/components/UI";
import { Metadata } from "next";

const links = [
  {
    id: 1,
    href: "https://github.com/hugo0o0/",
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
