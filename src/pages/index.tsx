import type { NextPage } from "next";
import Link from "next/link";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Home: NextPage = () => {
  return (
    <div>
      <h1>CSRとSSRの比較</h1>
      <Link href="/csr/csr">
        <a>csrでAPIを取得したデータ</a>
      </Link>
      <br />
      <Link href="/ssr/ssr">
        <a>ssrでAPIを取得したデータ</a>
      </Link>
    </div>
  );
};

export default Home;
