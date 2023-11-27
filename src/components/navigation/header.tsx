// hooks
import { useUnitedResize, useCurrentPath } from "../../hooks";
import { useRef } from "react";
// styles
import classnames from "classnames";
// utils
import Link from "next/link";
// components
import { Icon } from "@iconify/react";
import DevUtils from "../DevPannel";

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
        <div className="header-links space-x-2 flex ">
          <Link href="/attend">簽到</Link>
          <Link href="/myprojects">我的專案</Link>
          <Link href="/form">社團表單</Link>
          <Link href="/">
            <Icon className="text-3xl" icon="fe:home" />
          </Link>
          <DevUtils anchorRef={outerRef ? outerRef : ref} />
        </div>
        <Link href="/profile">Profile</Link>
      </div>
      {process.env.NODE_ENV === "development" ? (
        <div>
          <p>
            I am navbar. w:{width}/h:{height}/curpath:{pathname}/devicetype:
            {isBreak ? "mobile" : "desktop"}
          </p>
          <p>
            mainGeometry: {mainGeometryShow?.width}x{mainGeometryShow?.height}
          </p>
        </div>
      ) : (
        ""
      )}
    </header>
  );
}
