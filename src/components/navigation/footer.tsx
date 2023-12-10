"use client";
// hooks
import { useRef } from "react";
import { useUnitedResize } from "../../hooks";
import { usePathname } from "next/navigation";
// utils
import React from "react";
// styles
import classnames from "classnames";

interface Props {}

export default function Footer({}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { width, height, isBreak } = useUnitedResize("mobileBreak", ref);
  const pathname = usePathname();

  return (
    <footer
      className={classnames(
        "flex w-full items-center justify-between",
        "transition-colors duration-500 ease-in-out",
        isBreak ? "h-14" : "h-0",
        { "bg-base-100 text-base-content": pathname !== "/profile" },
        {
          "bg-base-200 text-base-content": pathname === "/profile",
        },
      )}
      ref={ref}
    >
      {isBreak ? <div>I am footer, only show in mobile navigation</div> : ""}
    </footer>
  );
}
