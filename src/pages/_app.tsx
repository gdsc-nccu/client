// utils
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
// hooks
import { StrictMode } from "react";
// components
import Layout from "../components/layout";
// styles
import "../app/globals.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  // const getLayout = Component.getLayout ?? ((page) => page);

  // return getLayout(<Component {...pageProps} />);

  return (
    <StrictMode>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StrictMode>
  );
}
