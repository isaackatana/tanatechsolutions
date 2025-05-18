import Link from "next/link";
import { getAllPosts } from "../lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Our Blog</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="border-b pb-4">
            <h2 className="text-2xl font-semibold">
              <Link href={`/blog/${post.slug}`}>{post.meta.title}</Link>
            </h2>
            <p className="text-gray-600">{post.meta.description}</p>
            <p className="text-sm text-gray-400">{post.meta.date}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
