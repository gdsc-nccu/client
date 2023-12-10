"use client";
// hooks
import { useUnitedResize, usePrevious } from "../../../hooks";
import { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
// components
import DevUtils from "../../DevPannel";
import HeaderBurger from "./nav/mobileBurger";
import DesktopNav from "./nav/desktopNav";
import HeaderLoading from "./loading";
// styles
import classnames from "classnames";
import "./header.css";
// utils
import { signOut } from "next-auth/react";

interface Props {
  outerRef?: React.MutableRefObject<HTMLDivElement | null>;
}

export default function Header({ outerRef }: Props) {
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

  const DevGroup = () => <DevUtils anchorRef={outerRef ? outerRef : ref} />;

  return (
    <header
      className={classnames(
        "flex flex-row w-full items-center justify-between",
        "transition-colors duration-200 ease-in-out",
        isBreak && width !== 0
          ? ["bg-base-300 text-base-content h-16"]
          : [
              { "bg-base-100 text-base-content": pathname !== "/profile" },
              {
                "bg-base-200 text-base-content delay-500":
                  pathname === "/profile",
              },
              "h-32 px-8",
            ],
      )}
      ref={ref}
    >
      <div className="flex w-full justify-between h-full z-10">
        {isLoading ? (
          <HeaderLoading />
        ) : isBreak ? (
          <>
            <HeaderBurger />
            <div className="grow"></div>
            <div className="header-links justify-center flex">
              <button
                className={classnames(
                  "m-2 p-2 px-4 rounded-badge justify-center items-center flex text-xl",
                  "tracking-widest",
                )}
                id="logOut"
                onClick={() => signOut()}
              >
                登出
              </button>
              <DevGroup />
            </div>
          </>
        ) : (
          <DesktopNav pathname={pathname} devGroupButton={<DevGroup />} />
        )}
      </div>
      {!isBreak && (
        <div
          className={classnames("clip", {
            "clip-open": pathname === "/profile",
          })}
        ></div>
      )}
    </header>
  );
}
