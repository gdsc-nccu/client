// "use client";
// utils
import { StrictMode } from "react";
import type { Metadata } from "next";
// hooks
// components
import Header from "../components/navigation/header";
import Main from "../components/navigation/main";
// import Footer from "../components/navigation/footer";
// styles
import { Inter } from "next/font/google";
import classnames from "classnames";
import "./globals.css";
import { getServerSession } from "next-auth";
import Login from "../components/Login";
import Logout from "../components/Logout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GDSC NCCU Member Website",
  description: "Generated by create next app",
  icons: {
    icon: "./logo.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const isLogin = useAppSelector((state) => state.User.isLogin);
  // const pathname = usePathname();

  const session = await getServerSession();

  return (
    <html lang="en">
      <StrictMode>
        <body className={inter.className}>
          {" "}
          <div
            className={classnames(
              "flex w-full h-full min-h-screen flex-col items-center justify-between",
            )}
          >
            {session && (
              <>
                <Header />
                <Main>{children}</Main>
                {/* <Footer /> */}
              </>
            )}
            {!session && (
              <>
                <Login />
              </>
            )}
          </div>
        </body>
      </StrictMode>
    </html>
  );
}
