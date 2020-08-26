import React from "react";
import Link from "next/link";

function Index() {
  return (
    <>
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
