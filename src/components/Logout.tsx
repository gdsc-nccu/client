"use client"

import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <div>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default LogoutButton;