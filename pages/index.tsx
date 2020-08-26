import React from "react";
import Link from "next/link";
import Head from "next/head";

function Index() {
  return (
    <>
      <Head>
        <title>StressNote | Home</title>
      </Head>
      <div>
        <h1>Top</h1>
        <ul>
          <li>
            <Link href="/signup">
              <a>ユーザー登録</a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a>ログイン</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Index;
