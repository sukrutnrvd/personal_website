import Link from "next/link";
import styles from "./UserLink.module.css";
import { FC } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Heading } from "../UI";

interface UserLinkProps {
  href: string;
  icon: React.ReactNode;
  text: string;
}

const UserLink: FC<UserLinkProps> = ({ href, icon, text }) => {
  return (
    <Link href={href} className={styles["user-link"]} target="_blank">
      <div className={styles["user-link__left"]}>
        {icon}
        <Heading size="m">{text}</Heading>
      </div>
      <FaArrowRightLong size={20} />
    </Link>
  );
};

export default UserLink;
