"use client";
// hooks
import { StrictMode, useRef } from "react";
import { useUnitedResize } from "../../hooks";
// components
import Image from "next/image";
// styles
import classnames from "classnames";

export default function Profile() {
  const ref = useRef<HTMLDivElement>(null);
  // const isLogin = useAppSelector((state) => state.User.isLogin);
  const { width, height, isBreak } = useUnitedResize("mobileBreak", ref);
  // const { login } = useUser();

  return (
    <main className={classnames("h-full w-full")} ref={ref}>
      <StrictMode>
        <div className="px-5">
          <header className="flex items-center justify-between"></header>
        </div>
        <div className="min-h-0 grow">
          Profile
          {width} {height}
        </div>
        {isBreak ? <div>mobile navigation</div> : ""}
      </StrictMode>
    </main>
  );
}
