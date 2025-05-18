import { getPostBySlug, getPostSlugs } from "../../lib/posts";
import { markdownToHtml } from "../../lib/markdown";

type Props = {
  params: { slug: string };
};

// Static paths
export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug: string) => ({
    slug: slug.replace(/\.md$/, ""),
  }));
}

// Dynamic blog post page
export default async function BlogPost(props: Props) {
  const { slug } = props.params; // ✅ Use props.params instead of destructuring `params` directly

  const post = await getPostBySlug(slug);
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
