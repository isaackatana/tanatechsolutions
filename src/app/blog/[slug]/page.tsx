import { getPostBySlug, getPostSlugs } from "../../lib/posts";
import { markdownToHtml } from "../../lib/markdown";

type Props = {
  params: { slug: string };
};

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug: string) => ({
    slug: slug.replace(/\.md$/, ""),
  }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = params;

  const post = await getPostBySlug(slug); // ✅ Await this
  if (!post) return <p>Post not found.</p>;

  const content = await markdownToHtml(post.content);

  return (
    <article className="max-w-3xl mx-auto px-4 py-12 prose">
      <h1>{post.meta.title}</h1>
      <p className="text-gray-500 text-sm">{post.meta.date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}
