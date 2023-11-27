import { useRouter } from "next/router";

export const useCurrentPath = () => {
  const router = useRouter();
  if (router.pathname === "/") {
    return "home";
  } else {
    return router.pathname.split("/")[1];
  }
};
