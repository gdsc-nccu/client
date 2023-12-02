"use client";
// hooks
import { useRef, createContext } from "react";
import { useUnitedResize } from "../../../hooks";
import { usePathname } from "next/navigation";
// styles
import classnames from "classnames";

const BreakPointRecoder = createContext({
  isBreak: false,
});

export default function Main({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { width, height, isBreak } = useUnitedResize("mobileBreak", ref);
  const pathname = usePathname();

  return (
    <main
      className={classnames(
        "flex flex-col h- w-full items-center justify-between",
        "transition-colors duration-200 ease-in-out",
        isBreak ? "h-[calc(100vh_-_4rem)]" : "h-[calc(100vh_-_8rem)]",
        isBreak
          ? ["bg-base-300 text-base-content"]
          : [
              { "bg-base-100 text-base-content": pathname !== "/profile" },
              {
                "bg-base-200 text-base-content delay-500":
                  pathname === "/profile",
              },
            ],
      )}
      ref={ref}
    >
      <BreakPointRecoder.Provider value={{ isBreak }}>
        {children}
      </BreakPointRecoder.Provider>
    </main>
  );
}

export { BreakPointRecoder };
