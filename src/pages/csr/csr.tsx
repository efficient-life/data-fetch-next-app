import { useEffect, useState } from "react";

import Head from "next/head";
import Link from "next/link";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function CSR() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await res.json();
      setPosts(posts);
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <Head>
        <title>CSRの解説用ページ</title>
      </Head>
      <main>
        <h1>Post一覧</h1>
        <ul>
          {posts.map(({ id, title }) => {
            const postDetailPath = `/csr/posts/${id}`;

            return (
              <li key={id}>
                <Link href={postDetailPath}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
