export interface Post {
	title: string;
	slug: string;
	description: string;
	date: string;
	tags: string[];
	published: boolean;
}

export async function getPosts(): Promise<Post[]> {
	const allPostFiles = import.meta.glob('/src/posts/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver() as { metadata: Omit<Post, 'slug'> };
			const slug = path.split('/').pop()?.replace('.md', '') || '';

			return {
				...metadata,
				slug
			};
		})
	);

	return allPosts
		.filter((post) => post.published)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
