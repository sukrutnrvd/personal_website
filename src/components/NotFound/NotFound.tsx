import { Button, Heading } from "../UI";
import { getDictionary } from "@/lib/getDictionary";
import styles from "./NotFound.module.css";
import { Language } from "@/types";
import Link from "next/link";

const NotFound = (props: any) => {
  const { pageNotFound, goBackHome } = getDictionary("en");
  return (
    <div className={styles["not-found"]}>
      <Heading>404</Heading>
      <Heading>{pageNotFound}</Heading>
      <Link href={`/en`}>
        <Button>{goBackHome}</Button>
      </Link>
    </div>
  );
};

export default NotFound;
