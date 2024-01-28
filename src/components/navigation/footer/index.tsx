"use client";
// hooks
import { useRef, createContext } from "react";
import { useUnitedResize } from "../../../hooks";
import { usePathname } from "next/navigation";
// utils
import React from "react";
import IconLinkArray from "../../../assets/icon-link.json";
// components
import { Icon } from "@iconify/react";
import Image from "next/image";
import GDSCBracketWhite from "../../../assets/icon/gdsc-bracket-white";
import Logo from "/public/logo-white.png";
// styles
import classnames from "classnames";

const BreakPointRecoder = createContext({
  width: 0,
  heightMain: 0,
  isBreak: false,
});

interface Props {}

export default function Footer({}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { width, height, isBreak } = useUnitedResize("mobileBreak", ref);
  const pathname = usePathname();

  const hide = isBreak || pathname !== "/";

  return (
    <footer
      className={classnames(
        "flex w-full items-center justify-between",
        "transition-colors duration-500 ease-in-out",
        hide ? "h-0" : "h-[calc(50vh_-_4rem)]",
        { "bg-base-100 text-base-content": pathname !== "/profile" },
        {
          "bg-base-200 text-base-content": pathname === "/profile",
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
        {hide ? (
          <></>
        ) : (
          <div className="w-full h-full px-4 flex flex-col gap-6 justify-center items-center ">
            <Image
              src={Logo}
              alt="logo"
              width={150}
              height={100}
              className="opacity-50"
            />
            <p className="tracking-widest text-lg opacity-80">
              「揉合創意與科技，透過眾人的力量改變現狀。」
            </p>
            <p className="tracking-widest text-lg font-bold opacity-80">
              ©2023-2024 NCCU GDSC
            </p>
            <div className="flex flex-row justify-center items-center space-x-3 opacity-80">
              {IconLinkArray.map((item, index) => (
                <a href={item.href} key={index}>
                  <Icon icon={item.icon} className="text-3xl cursor-pointer" />
                </a>
              ))}
            </div>
          </div>
        )}
      </BreakPointRecoder.Provider>
    </footer>
  );
}
