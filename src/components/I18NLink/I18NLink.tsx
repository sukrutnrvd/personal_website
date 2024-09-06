"use client";

import React, { forwardRef } from "react";

import Link from "next/link";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
interface I18NLinkProps extends React.ComponentProps<typeof Link> {}

const I18NLink = motion(
  forwardRef(({ href, children, ...props }: I18NLinkProps, ref) => {
    const { language } = useParams();

    if (href === "/") {
      href = `/${language}`;
    } else {
      href = `/${language}${href}`;
    }

    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  })
);
I18NLink.displayName = "I18NLink";
export default I18NLink;
