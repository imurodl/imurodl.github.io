import { getPosts } from "$lib/posts";

export async function load() {
  const posts = await getPosts();
  return {
    posts: posts.slice(0, 3).map((post) => ({
      title: post.title,
      description: post.description,
      date: new Date(post.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      tags: post.tags,
      slug: post.slug,
    })),
  };
}
