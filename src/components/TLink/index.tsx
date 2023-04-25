"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { PropsWithChildren, Ref } from "react";

export const TLink = (
  props: React.ComponentProps<typeof Link> & PropsWithChildren
) => {
  const { lang } = useParams();
  const { children, href, ...linkProps } = props;
  return (
    <Link href={`/${lang}${href}`} {...linkProps}>
      {children}
    </Link>
  );
};
