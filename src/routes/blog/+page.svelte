<script lang="ts">
  import type { PageData } from "./$types";
  import Card from "$lib/components/ui/Card.svelte";
  import CardContent from "$lib/components/ui/CardContent.svelte";
  import Badge from "$lib/components/ui/Badge.svelte";
  import Button from "$lib/components/ui/Button.svelte";

  let { data }: { data: PageData } = $props();
  const { posts } = data;

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
</script>

<svelte:head>
  <title>Blog | Murod</title>
  <meta name="description" content="Thoughts on software development, design, and technology." />
</svelte:head>

<div class="min-h-screen py-16 md:py-24">
  <div class="max-w-3xl mx-auto">
    <!-- Header -->
    <div class="mb-12">
      <a href="/" class="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
        <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Home
      </a>
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Blog</h1>
      <p class="text-muted-foreground">Thoughts on software development, design, and technology.</p>
    </div>

    <!-- Posts -->
    <div class="space-y-4">
      {#each posts as post}
        <a href="/blog/{post.slug}" class="block group">
          <div class="border border-border rounded-lg p-5 transition-all duration-200 hover:border-muted-foreground">
            <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
              <h2 class="text-lg font-semibold">
                {post.title}
              </h2>
              <span class="text-xs text-muted-foreground whitespace-nowrap font-mono">
                {formatDate(post.date)}
              </span>
            </div>
            <p class="text-sm text-muted-foreground mb-4 leading-relaxed">
              {post.description}
            </p>
            <div class="flex flex-wrap gap-2">
              {#each post.tags as tag}
                <Badge variant="outline" class="text-xs">
                  {tag}
                </Badge>
              {/each}
            </div>
          </div>
        </a>
      {:else}
        <div class="text-center py-16">
          <p class="text-muted-foreground mb-4">No blog posts yet.</p>
          <a href="/">
            <Button variant="outline">Back to Home</Button>
          </a>
        </div>
      {/each}
    </div>
  </div>
</div>
