<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const { content: Content, meta } = data;

	function formatDate(date: string) {
		return new Date(date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>{meta.title} | Imurod's Blog</title>
	<meta name="description" content={meta.description} />
</svelte:head>

<article class="max-w-3xl mx-auto px-4 py-12 min-h-screen">
	<header class="mb-8">
		<a href="/blog" class="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block">
			← Back to Blog
		</a>
		<h1 class="text-4xl font-bold mb-3 text-gray-900 dark:text-white">
			{meta.title}
		</h1>
		<div class="flex gap-4 items-center text-gray-500 dark:text-gray-400">
			<time datetime={meta.date}>{formatDate(meta.date)}</time>
			<div class="flex gap-2">
				{#each meta.tags as tag}
					<span class="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
						{tag}
					</span>
				{/each}
			</div>
		</div>
	</header>

	<div class="prose prose-lg dark:prose-invert max-w-none">
		<Content />
	</div>
</article>

<style>
	:global(.prose h1) {
		@apply text-3xl font-bold mb-4 mt-8 text-gray-900 dark:text-white;
	}

	:global(.prose h2) {
		@apply text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white;
	}

	:global(.prose h3) {
		@apply text-xl font-bold mb-2 mt-4 text-gray-900 dark:text-white;
	}

	:global(.prose p) {
		@apply text-gray-700 dark:text-gray-300 mb-4 leading-relaxed;
	}

	:global(.prose a) {
		@apply text-blue-600 dark:text-blue-400 hover:underline;
	}

	:global(.prose ul) {
		@apply my-4 pl-6 text-gray-700 dark:text-gray-300;
	}

	:global(.prose ol) {
		@apply my-4 pl-6 text-gray-700 dark:text-gray-300;
	}

	:global(.prose li) {
		@apply mb-2;
	}

	:global(.prose code) {
		@apply bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm;
	}

	:global(.prose pre) {
		@apply bg-gray-900 dark:bg-gray-950 p-4 rounded-lg overflow-x-auto;
	}

	:global(.prose pre code) {
		@apply bg-transparent p-0;
	}

	:global(.prose blockquote) {
		@apply border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic text-gray-600 dark:text-gray-400;
	}
</style>
