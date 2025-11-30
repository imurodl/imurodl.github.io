<script lang="ts">
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
  const { content: Content, meta } = data;

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
</script>

<svelte:head>
  <title>{meta.title} | Murod's Blog</title>
  <meta name="description" content={meta.description} />
</svelte:head>

<article class="max-w-3xl mx-auto px-4 py-12 min-h-screen">
  <header class="mb-8">
    <a
      href="/blog"
      class="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
    >
      ← Back to Blog Posts
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
