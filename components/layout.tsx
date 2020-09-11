import Head from "next/head";

function Layout({ children, subTitle }) {
  return (
    <>
      <Head>
        <title>StressNote | {subTitle}</title>
      </Head>
      <div>{children}</div>
    </>
  );
}

export default Layout;
