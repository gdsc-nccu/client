// utils
import type { ReactElement } from "react";
// hooks
import { useUnitedResize, useCurrentPath } from "../hooks";
import { useRef } from "react";
// components
import Header from "./navigation/header";
import Footer from "./navigation/footer";
// styles
import classnames from "classnames";

export default function Layout({
  children,
  className,
}: {
  children: ReactElement;
  className: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // const isLogin = useAppSelector((state) => state.User.isLogin);
  const { width, height, isBreak } = useUnitedResize("mobileBreak", ref);
  const pathname = useCurrentPath();

  return (
    <div
      className={classnames(
        "flex w-full min-h-screen flex-col items-center justify-between",
        "transition-colors duration-300 ease-in-out",
        { "bg-base-content text-base-100": pathname !== "profile" },
        { "bg-base-100 text-base-content": pathname === "profile" },
        className,
      )}
      ref={ref}
    >
      <Header
        mainGeometryShow={{
          width: width,
          height: height,
        }}
        outerRef={ref}
      />
      <main className="border-4 border-blue-500 grow w-full">{children}</main>
      {isBreak ? <Footer /> : ""}
    </div>
  );
}
