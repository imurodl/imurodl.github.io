<script lang="ts">
  import { onMount } from "svelte";
  import Badge from "./ui/Badge.svelte";
  import Button from "./ui/Button.svelte";

  interface BlogPost {
    title: string;
    description: string;
    date: string;
    tags: string[];
    slug: string;
  }

  interface Props {
    posts?: BlogPost[];
  }

  let { posts = [] }: Props = $props();

  // Fallback posts if none provided
  const fallbackPosts = [
    {
      title: "The Future of Design Systems",
      description:
        "Exploring how AI and automation are reshaping how we build and maintain design systems.",
      date: "Dec 15, 2024",
      tags: ["Design Systems"],
      slug: "future-of-design-systems",
      image: "/futuristic-design-system-interface.jpg",
    },
    {
      title: "Accessibility-First Design",
      description:
        "Why starting with accessibility constraints leads to better design for everyone.",
      date: "Nov 28, 2024",
      tags: ["Accessibility"],
      slug: "accessibility-first-design",
      image: "/accessibility-design-tools-and-interfaces.jpg",
    },
    {
      title: "Building with Web Components",
      description:
        "A practical guide to creating reusable, framework-agnostic components.",
      date: "Nov 10, 2024",
      tags: ["Development"],
      slug: "building-with-web-components",
      image: "/web-components-code-editor-interface.jpg",
    },
  ];

  const displayPosts =
    posts.length > 0
      ? posts.map((p, i) => ({
          ...p,
          image: fallbackPosts[i % fallbackPosts.length].image,
        }))
      : fallbackPosts;

  const categories = ["All", ...new Set(displayPosts.flatMap((p) => p.tags))];

  let isVisible = $state(false);
  let selectedCategory = $state("All");
  let sectionRef: HTMLElement;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible = true;
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef) {
      observer.observe(sectionRef);
    }

    return () => observer.disconnect();
  });

  const filteredPosts = $derived(
    selectedCategory === "All"
      ? displayPosts
      : displayPosts.filter((post) => post.tags.includes(selectedCategory))
  );
</script>

<section id="blog" bind:this={sectionRef} class="py-16 md:py-24">
  <div class="max-w-5xl mx-auto">
    <div
      class="transition-all duration-1000 {isVisible
        ? 'animate-slide-up'
        : 'opacity-0 translate-y-8'}"
    >
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16">
        Latest Thoughts
      </h2>

      <!-- Category filters -->
      <div class="flex flex-wrap gap-2 mb-10">
        {#each categories as category}
          <button
            onclick={() => (selectedCategory = category)}
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 {selectedCategory ===
            category
              ? 'bg-primary text-primary-foreground'
              : 'border border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground'}"
          >
            {category}
          </button>
        {/each}
      </div>

      <!-- Featured post -->
      {#if filteredPosts.length > 0}
        <a href="/blog/{filteredPosts[0].slug}" class="block mb-10 group">
          <div
            class="border border-border rounded-lg overflow-hidden transition-all duration-200 hover:border-muted-foreground"
          >
            <div class="md:flex">
              <div class="md:w-1/2">
                <img
                  src={filteredPosts[0].image || "/placeholder.svg"}
                  alt={filteredPosts[0].title}
                  class="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div class="md:w-1/2 p-6">
                <Badge variant="outline" class="mb-3 text-xs">Featured</Badge>
                <h3 class="text-xl md:text-2xl font-bold mb-3">
                  {filteredPosts[0].title}
                </h3>
                <p class="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {filteredPosts[0].description}
                </p>
                <div
                  class="flex items-center gap-4 text-xs text-muted-foreground"
                >
                  <span>{filteredPosts[0].date}</span>
                  <span>5 min read</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      {/if}

      <!-- Other posts -->
      <div class="grid md:grid-cols-2 gap-6">
        {#each filteredPosts.slice(1) as post}
          <a href="/blog/{post.slug}" class="group">
            <div
              class="border border-border rounded-lg overflow-hidden transition-all duration-200 hover:border-muted-foreground h-full"
            >
              <div class="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  class="w-full h-40 object-cover"
                />
              </div>
              <div class="p-5">
                <Badge variant="outline" class="mb-3 text-xs">
                  {post.tags[0]}
                </Badge>
                <h3 class="text-base font-semibold mb-2">
                  {post.title}
                </h3>
                <p class="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {post.description}
                </p>
                <div
                  class="flex items-center gap-4 text-xs text-muted-foreground"
                >
                  <span>{post.date}</span>
                  <span>5 min read</span>
                </div>
              </div>
            </div>
          </a>
        {/each}
      </div>

      <div class="mt-10">
        <a href="/blog">
          <Button variant="outline">View All Posts</Button>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Section divider -->
<div class="section-divider"></div>
