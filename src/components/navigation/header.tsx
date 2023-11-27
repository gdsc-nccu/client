// hooks
import { useUnitedResize, useCurrentPath } from "../../hooks";
import { useRef } from "react";
// styles
import classnames from "classnames";
// utils
import Link from "next/link";
// components

interface Props {}

export default function Header({}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  // const isLogin = useAppSelector((state) => state.User.isLogin);
  const { width, height, isBreak } = useUnitedResize("mobileBreak", ref);
  const pathname = useCurrentPath();

  return (
    <header
      className={classnames(
        "flex flex-col w-full items-center justify-between",
        "border-4 border-green-500",
      )}
      ref={ref}
    >
      <div className="flex w-full justify-between">
        <div>logo</div>
        <div className="header-links space-x-2">
          <Link href="/">Home</Link>
          <Link href="/profile">Profile</Link>
        </div>
        <Link href="/profile">Profile</Link>
      </div>
      {process.env.NODE_ENV === "development" ? (
        <div>
          I am navbar. w:{width}/h:{height}/curpath:{pathname}/devicetype:
          {isBreak ? "mobile" : "desktop"}
        </div>
      ) : (
        ""
      )}
    </header>
  );
}
