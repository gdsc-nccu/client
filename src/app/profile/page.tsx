"use client";
// utils
import React from "react";
// hooks
import { StrictMode, useRef } from "react";
import { useUnitedResize } from "../../hooks";
// components
import UserIcon from "../../assets/icon/user";
import Image from "next/image";
// styles
import classnames from "classnames";
import "./index.css";

export default function Profile() {
  const ref = useRef<HTMLDivElement>(null);
  // const isLogin = useAppSelector((state) => state.User.isLogin);
  const { width, height, isBreak } = useUnitedResize("mobileBreak", ref);
  // const { login } = useUser();

  return (
    <main
      className={classnames("h-full w-full", { "profile-open": !isBreak })}
      ref={ref}
    >
      <div className="w-full flex justify-center items-center">
        <div className="border-4 border-base-content rounded-full justify-center items-center p-6">
          <UserIcon
            style={{
              width: "256px",
              height: "256px",
              strokeWidth: "0.4px",
            }}
          />
        </div>
      </div>
    </main>
  );
}
