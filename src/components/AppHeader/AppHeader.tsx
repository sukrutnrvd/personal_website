"use client";
import React from "react";
import LanguagesSelectBox from "../LanguagesSelectBox/LanguagesSelectBox";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import { usePathname } from "next/navigation";
import styles from "./AppHeader.module.css";

const AppHeader = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/tr" || pathname === "/en";
  return (
    <div className={styles["app-header"]}>
      {!isHomePage && <MusicPlayer />}
      <LanguagesSelectBox />
    </div>
  );
};

export default AppHeader;
