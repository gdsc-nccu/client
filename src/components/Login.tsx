"use client";
// utils
import React, { useRef } from "react";
import { signIn } from "next-auth/react";
// hooks
import { useUnitedResize } from "../hooks";
// components
import Logo from "/public/logo-white.png";
import Image from "next/image";
// style
import classnames from "classnames";

const Login = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { isBreak } = useUnitedResize("mobileBreak", ref);

  return (
    <div
      className={classnames(
        "w-full h-screen flex flex-col justify-center place-items-center",
        "transition-colors duration-200 ease-in-out",
        isBreak
          ? "bg-base-300 text-base-content"
          : "bg-base-100 text-base-content",
      )}
      ref={ref}
    >
      <Image src={Logo} alt="" />
      <button
        onClick={() => signIn("google")}
        className="p-3 rounded-lg text-primary font-semibold bg-primary-content"
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
