// utils
import type { ReactElement } from "react";
// hooks
import { useUnitedResize } from "../hooks";
import { useRef } from "react";
// components
import Header from "./navigation/header";
import Footer from "./navigation/footer";

export default function Layout({ children }: { children: ReactElement }) {
  const ref = useRef<HTMLDivElement>(null);
  // const isLogin = useAppSelector((state) => state.User.isLogin);
  const { width, height, isBreak } = useUnitedResize("mobileBreak", ref);

  return (
    <div
      className="flex w-full min-h-screen flex-col items-center justify-between"
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
