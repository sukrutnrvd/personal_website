import Anonymous from "@/components/Anonymous/Anonymous";
import styles from "./page.module.css";
import { getDictionary } from "@/lib/getDictionary";
import { Language } from "@/types";
import bg1 from "../../../public/bg11.webp";
import bg2 from "../../../public/bg12.webp";
import bg3 from "../../../public/bg15.webp";
import AppHeader from "@/components/AppHeader/AppHeader";

export default function Page(props: { params: { language: Language } }) {
  const { aboutMe, projects, links, contactMe } = getDictionary(
    props.params.language
  );
  const anonymouses = [
    {
      id: 1,
      text: aboutMe,
      src: bg1,
      href: "/about",
    },
    {
      id: 2,
      text: projects,
      src: bg2,
      href: "/projects",
    },
    {
      id: 3,
      text: links,
      src: bg3,
      href: "/links",
    },
  ];

  return (
    <div className={styles.main}>
      <AppHeader />
      {anonymouses.map((anonymous) => (
        <Anonymous
          key={anonymous.id}
          src={anonymous.src}
          text={anonymous.text}
          link={anonymous.href}
          language={props.params.language}
        />
      ))}
    </div>
  );
}
