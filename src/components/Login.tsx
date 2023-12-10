"use client";
// utils
import React from "react";
import { signIn } from "next-auth/react";
import Logo from "/public/logo-white.png";
// components
import Image from "next/image";

const Login = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center place-items-center bg-base-300">
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
