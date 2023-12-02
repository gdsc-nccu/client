"use client";
// hooks
import { useUnitedResize } from "../../../hooks";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
// components
import StyledLink from "./StyledLink";
import { Icon } from "@iconify/react";
import UserIcon from "../../../assets/icon/user";
import DevUtils from "../../DevPannel";
import HeaderBurger from "./mobileBurger";
// styles
import classnames from "classnames";
import "./header.css";

interface Props {
  mainGeometryShow?: {
    width: number;
    height: number;
  };
  outerRef?: React.MutableRefObject<HTMLDivElement | null>;
}

export default function Header({ mainGeometryShow, outerRef }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  // const isLogin = useAppSelector((state) => state.User.isLogin);
  const { width, height, isBreak } = useUnitedResize("mobileBreak", ref);
  const pathname = usePathname();

  const DevGroup = () => (
    <>
      <DevUtils anchorRef={outerRef ? outerRef : ref} />
    </>
  );

  return (
    <header
      className={classnames(
        "flex flex-row w-full items-center justify-between h-16",
        "transition-colors duration-200 ease-in-out",
        { "bg-base-100 text-base-content": pathname !== "/profile" },
        {
          "bg-base-200 text-base-content delay-500": pathname === "/profile",
        },
      )}
      ref={ref}
    >
      <div className="flex w-full justify-between h-16 z-10">
        {isBreak ? (
          <>
            <HeaderBurger />
            <div className="header-links grow justify-center flex">
              <DevGroup />
            </div>
          </>
        ) : (
          <>
            <StyledLink href="/">GDSC</StyledLink>
            <div className="header-links grow space-x-2 flex justify-center">
              <StyledLink
                variant={pathname == "attend" ? "selected" : "unselected"}
                href="/attend"
              >
                簽到
              </StyledLink>
              <StyledLink
                variant={pathname == "myprojects" ? "selected" : "unselected"}
                href="/myprojects"
              >
                我的專案
              </StyledLink>
              <StyledLink
                variant={pathname == "form" ? "selected" : "unselected"}
                href="/form"
              >
                社團表單
              </StyledLink>
              <StyledLink href="/">
                <Icon icon="fe:home" className="text-3xl" />
              </StyledLink>
              <DevGroup />
            </div>
          </>
        )}
        <StyledLink href="/profile">
          {/* <Icon icon="mdi:user" className="text-3xl" /> */}
          <UserIcon className="text-4xl" />
        </StyledLink>
      </div>
      <div
        className={classnames("clip", { "clip-open": pathname === "/profile" })}
      ></div>
    </header>
  );
}
