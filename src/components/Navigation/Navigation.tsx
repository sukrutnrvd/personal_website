"use client";
import styles from "./Navigation.module.css";
import I18NLink from "../I18NLink/I18NLink";
import LanguagesSelectBox from "../LanguagesSelectBox/LanguagesSelectBox";
import { IoMenu } from "react-icons/io5";
import { useParams, usePathname } from "next/navigation";
import { getDictionary } from "@/lib/getDictionary";
import { Language } from "@/types";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import useKeyPress from "@/lib/hooks/useKeyPress";
import { AnimatePresence, motion } from "framer-motion";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useParams<{ language: Language }>();
  const pathname = usePathname().split("/")[2];

  const { aboutMe, contactMe, links, projects, home } = getDictionary(language);

  const linkList = [
    {
      href: "/",
      label: home,
    },
    {
      href: "/about",
      label: aboutMe,
    },
    {
      href: "/projects",
      label: projects,
    },

    {
      href: "/links",
      label: links,
    },
  ];

  const open = () => {
    setIsMenuOpen(true);
  };

  const close = () => {
    setIsMenuOpen(false);
  };

  useKeyPress("Escape", close);
  return (
    <nav className={styles.navigation}>
      <button onClick={open}>
        <IoMenu size={30} />
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ bounce: 0 }}
            className={styles.navigation__items}
          >
            <button className={styles.navigation__close} onClick={close}>
              <IoMdClose size={30} />
            </button>
            {linkList.map(({ href, label }) => (
              <li
                onClick={close}
                key={href}
                className={`${styles.navigation__item} ${
                  pathname === href.split("/")[1] ? styles.active : ""
                }`}
              >
                <I18NLink href={href}>{label}</I18NLink>
              </li>
            ))}
            <LanguagesSelectBox />
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
