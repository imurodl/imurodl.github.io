<script lang="ts">
  import type { PageData } from "./$types";
  import Badge from "$lib/components/ui/Badge.svelte";

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
  <title>{meta.title} | Murod</title>
  <meta name="description" content={meta.description} />
</svelte:head>

<article class="min-h-screen py-16 md:py-24 px-4 md:px-6">
  <div class="max-w-3xl mx-auto">
    <header class="mb-8 md:mb-12">
      <a
        href="/blog"
        class="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition mb-6 md:mb-8"
      >
        <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Blog
      </a>
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
        {meta.title}
      </h1>
      <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-muted-foreground">
        <div class="flex items-center gap-2 text-sm">
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <time datetime={meta.date}>{formatDate(meta.date)}</time>
        </div>
        <div class="flex flex-wrap gap-1.5 md:gap-2">
          {#each meta.tags as tag}
            <Badge variant="secondary" class="text-xs">
              {tag}
            </Badge>
          {/each}
        </div>
      </div>
    </header>

    <div class="prose prose-lg dark:prose-invert max-w-none
      prose-headings:font-bold prose-headings:text-foreground
      prose-p:text-muted-foreground prose-p:leading-relaxed
      prose-a:text-primary prose-a:no-underline hover:prose-a:underline
      prose-strong:text-foreground
      prose-code:text-foreground prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
      prose-pre:bg-muted prose-pre:border prose-pre:border-border
      prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground
      prose-li:text-muted-foreground
      prose-img:rounded-lg prose-img:shadow-lg
    ">
      <Content />
    </div>

    <!-- Footer -->
    <div class="mt-12 md:mt-16 pt-8 border-t border-border">
      <a
        href="/blog"
        class="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition"
      >
        <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to all posts
      </a>
    </div>
  </div>
</article>
