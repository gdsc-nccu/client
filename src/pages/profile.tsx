// hooks
import { StrictMode, useRef } from "react";
import { useRouter } from "next/router";
import { useUnitedResize } from "../hooks";
// components
import Image from "next/image";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  // const isLogin = useAppSelector((state) => state.User.isLogin);
  const { width, height, isBreak } = useUnitedResize("mobileBreak", ref);
  // const { login } = useUser();
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-between p-24" ref={ref}>
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
