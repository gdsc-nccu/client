"use client";
// components
import StyledLink from "./../StyledLink";
import { Icon } from "@iconify/react";
import UserIcon from "../../../../assets/icon/user";
import GDSCBracketWhite from "../../../../assets/icon/gdsc-bracket-white";
// styles
import classnames from "classnames";
import "../header.css";
// utils
import { signOut } from "next-auth/react";

interface Props {
  pathname?: string;
  devGroupButton?: React.ReactNode;
}

const DesktopNav = ({ pathname, devGroupButton }: Props) => {
  return (
    <>
      <StyledLink className="px-6 m-0 rounded-none" href="/">
        <GDSCBracketWhite className="text-3xl" />
      </StyledLink>
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
        {devGroupButton}
      </div>
      <div className="flex flex-row">
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
        <StyledLink href="/profile">
          <UserIcon className="text-4xl" />
        </StyledLink>
      </div>
    </>
  );
};

export default DesktopNav;
