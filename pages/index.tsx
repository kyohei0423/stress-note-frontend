import Link from "next/link";

import Layout from "components/layout";

function Index() {
  return (
    <>
      <Layout subTitle="ホーム">
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
      </Layout>
    </>
  );
}

export default Index;
