"use client";
// utils
import React from "react";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <div>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default LogoutButton;
