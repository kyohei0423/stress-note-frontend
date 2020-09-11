import Head from "next/head";

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
