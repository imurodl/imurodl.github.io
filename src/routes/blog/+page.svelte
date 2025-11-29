<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const { posts } = data;

	function formatDate(date: string) {
		return new Date(date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>Blog | Imurod</title>
	<meta name="description" content="Personal blog by Imurod" />
</svelte:head>

<div class="max-w-3xl mx-auto px-4 py-12 min-h-screen">
	<h1 class="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Blog</h1>

	<div class="space-y-8">
		{#each posts as post}
			<article class="border-b border-gray-200 dark:border-gray-800 pb-8">
				<a href="/blog/{post.slug}" class="group block hover:no-underline">
					<h2 class="text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
						{post.title}
					</h2>
					<p class="text-gray-500 dark:text-gray-400 text-sm mb-3">
						{formatDate(post.date)}
					</p>
					<p class="text-gray-600 dark:text-gray-300 mb-3">
						{post.description}
					</p>
					<div class="flex gap-2 flex-wrap">
						{#each post.tags as tag}
							<span class="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full">
								{tag}
							</span>
						{/each}
					</div>
				</a>
			</article>
		{:else}
			<p class="text-gray-500 dark:text-gray-400 text-center py-12">No blog posts yet.</p>
		{/each}
	</div>
</div>
