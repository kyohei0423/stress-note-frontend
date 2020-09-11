import Head from "next/head";
import { ReactNode } from "react";

type props = {
  children: ReactNode;
  subTitle: string;
};

export default function Layout({ children, subTitle }: props) {
  return (
    <>
      <Head>
        <title>StressNote | {subTitle}</title>
      </Head>
      <div>{children}</div>
    </>
  );
}
