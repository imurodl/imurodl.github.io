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

<div class="min-h-screen py-16 md:py-24 px-4 md:px-6">
  <div class="max-w-4xl mx-auto">
    <!-- Header -->
    <div class="mb-8 md:mb-12">
      <a href="/" class="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition mb-6 md:mb-8">
        <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Home
      </a>
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Blog</h1>
      <p class="text-base md:text-lg text-muted-foreground">Thoughts on software development, design, and technology.</p>
    </div>

    <!-- Posts -->
    <div class="space-y-4 md:space-y-6">
      {#each posts as post}
        <a href="/blog/{post.slug}" class="block group">
          <Card class="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardContent class="p-4 md:p-6">
              <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4 mb-3">
                <h2 class="text-lg md:text-xl font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <span class="text-xs md:text-sm text-muted-foreground whitespace-nowrap">
                  {formatDate(post.date)}
                </span>
              </div>
              <p class="text-sm md:text-base text-muted-foreground mb-3 md:mb-4 leading-relaxed">
                {post.description}
              </p>
              <div class="flex flex-wrap gap-1.5 md:gap-2">
                {#each post.tags as tag}
                  <Badge variant="secondary" class="text-xs">
                    {tag}
                  </Badge>
                {/each}
              </div>
            </CardContent>
          </Card>
        </a>
      {:else}
        <div class="text-center py-12 md:py-16">
          <p class="text-muted-foreground mb-4">No blog posts yet.</p>
          <a href="/">
            <Button variant="outline">Back to Home</Button>
          </a>
        </div>
      {/each}
    </div>
  </div>
</div>
