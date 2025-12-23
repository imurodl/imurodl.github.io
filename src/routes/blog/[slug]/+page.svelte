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

<article class="min-h-screen py-16 md:py-24">
  <div class="max-w-3xl mx-auto">
    <header class="mb-12">
      <a
        href="/blog"
        class="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Blog
      </a>
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
        {meta.title}
      </h1>
      <div class="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground">
        <time datetime={meta.date} class="text-sm font-mono">{formatDate(meta.date)}</time>
        <div class="flex flex-wrap gap-2">
          {#each meta.tags as tag}
            <Badge variant="outline" class="text-xs">
              {tag}
            </Badge>
          {/each}
        </div>
      </div>
    </header>

    <div class="prose prose-lg dark:prose-invert max-w-none
      prose-headings:font-bold prose-headings:text-foreground prose-headings:tracking-tight
      prose-p:text-muted-foreground prose-p:leading-relaxed
      prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-muted-foreground
      prose-strong:text-foreground
      prose-code:text-foreground prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-code:text-sm
      prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-pre:rounded-lg
      prose-blockquote:border-l-2 prose-blockquote:border-border prose-blockquote:text-muted-foreground prose-blockquote:not-italic
      prose-li:text-muted-foreground
      prose-img:rounded-lg prose-img:border prose-img:border-border
    ">
      <Content />
    </div>

    <!-- Footer -->
    <div class="mt-16 pt-8 border-t border-border">
      <a
        href="/blog"
        class="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to all posts
      </a>
    </div>
  </div>
</article>
