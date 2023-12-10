"use client";
// hooks
import { useRef, useState, useEffect, createContext } from "react";
import { useUnitedResize, usePrevious } from "../../../hooks";
import { usePathname } from "next/navigation";
// styles
import classnames from "classnames";
// components
import MainLoading from "./loading";

const BreakPointRecoder = createContext({
  width: 0,
  heightMain: 0,
  isBreak: false,
});

export default function Main({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const { width, height, isBreak } = useUnitedResize("mobileBreak", ref);
  const [isLoading, setIsLoading] = useState(true);
  const prevBreak = usePrevious(isBreak);
  const pathname = usePathname();

  useEffect(() => {
    if (!prevBreak) {
      setIsLoading(false);
    }
  }, [prevBreak]);

  return (
    <main
      className={classnames(
        "flex flex-col w-full items-center justify-between",
        "transition-colors duration-200 ease-in-out",
        "text-base-content",
        pathname === "/profile"
          ? "bg-base-200"
          : [{ "bg-base-300": isBreak }, { "bg-base-100": !isBreak }],
        isBreak ? "h-[calc(100vh_-_4rem)]" : "h-[calc(100vh_-_8rem)]",
        {
          "delay-500": pathname === "/profile" && !isBreak,
        },
      )}
      ref={ref}
    >
      <BreakPointRecoder.Provider
        value={{
          width: width ? width : 0,
          heightMain: height ? height : 0,
          isBreak: isBreak ? isBreak : false,
        }}
      >
        {isLoading ? <MainLoading /> : <>{children}</>}
      </BreakPointRecoder.Provider>
    </main>
  );
}

export { BreakPointRecoder };
