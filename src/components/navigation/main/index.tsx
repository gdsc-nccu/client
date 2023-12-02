"use client";
// hooks
import { useRef } from "react";
import { useUnitedResize } from "../../../hooks";
import { usePathname } from "next/navigation";
// styles
import classnames from "classnames";

export default function Main({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { width, height, isBreak } = useUnitedResize("mobileBreak", ref);
  const pathname = usePathname();

  return (
    <main
      className={classnames(
        "flex flex-col h- w-full items-center justify-between",
        "transition-colors duration-200 ease-in-out",
        "h-[calc(100vh_-_4rem)]",
        // isBreak ? "h-[calc(100vh_-_7.5rem)]" : "h-[calc(100vh_-_4rem)]",
        { "bg-base-100 text-base-content": pathname !== "/profile" },
        {
          "bg-base-200 text-base-content delay-500": pathname === "/profile",
        },
      )}
      ref={ref}
    >
      {children}
    </main>
  );
}
