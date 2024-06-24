"use client";
import Link from "next/link";
import { SelectBox } from "../UI";
import styles from "./LanguagesSelectBox.module.css";
import { useParams, usePathname } from "next/navigation";
import { Language } from "@/types";
import { getDictionary } from "@/lib/getDictionary";

const languages = [
  {
    id: Math.random(),
    label: "Türkçe",
    href: "/tr",
  },
  {
    id: Math.random(),
    label: "English",
    href: "/en",
  },
];

const LanguagesSelectBox = () => {
  const { language } = useParams<{ language: Language }>();
  const { name } = getDictionary(language);
  const pathname = usePathname();
  let [, , path] = pathname.split("/");
  if (!path) path = "";
  return (
    <div className={styles["languages-container"]}>
      <SelectBox>
        <SelectBox.Button>{name}</SelectBox.Button>
        <SelectBox.Items>
          {languages.map((language) => (
            <SelectBox.Item key={language.id}>
              <Link href={`${language.href}/${path}`}>{language.label}</Link>
            </SelectBox.Item>
          ))}
        </SelectBox.Items>
      </SelectBox>
    </div>
  );
};

export default LanguagesSelectBox;
