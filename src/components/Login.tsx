"use client";
//utils
import { signIn } from "next-auth/react";
//components
import Logo from "/public/logo-white.png";
import Image from "next/image";

const Login = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center place-items-center bg-base-300">
      <Image src={Logo} alt="" className="w-60" />
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
