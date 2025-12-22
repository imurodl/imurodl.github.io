<script lang="ts">
  import { onMount } from "svelte";
  import Card from "./ui/Card.svelte";
  import CardContent from "./ui/CardContent.svelte";
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

<section id="blog" bind:this={sectionRef} class="py-16 md:py-24 px-4 md:px-6">
  <div class="max-w-6xl mx-auto">
    <div
      class="transition-all duration-1000 {isVisible
        ? 'animate-slide-up'
        : 'opacity-0 translate-y-8'}"
    >
      <h2
        class="text-3xl md:text-4xl lg:text-6xl font-bold mb-8 md:mb-16 text-center"
      >
        Latest Thoughts
      </h2>

      <!-- Category filters -->
      <div class="flex flex-wrap justify-center gap-2 mb-8 md:mb-12">
        {#each categories as category}
          <Button
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onclick={() => (selectedCategory = category)}
            class="transition-all duration-200 text-xs md:text-sm"
          >
            {category}
          </Button>
        {/each}
      </div>

      <!-- Featured post -->
      {#if filteredPosts.length > 0}
        <Card
          class="mb-8 md:mb-12 overflow-hidden group hover:shadow-2xl transition-all duration-300"
        >
          <a href="/blog/{filteredPosts[0].slug}" class="block">
            <div class="md:flex">
              <div class="md:w-1/2">
                <img
                  src={filteredPosts[0].image || "/placeholder.svg"}
                  alt={filteredPosts[0].title}
                  class="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div class="md:w-1/2 p-6 md:p-8">
                <Badge variant="secondary" class="mb-3 md:mb-4 text-xs">
                  Featured
                </Badge>
                <h3
                  class="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-primary transition-colors"
                >
                  {filteredPosts[0].title}
                </h3>
                <p
                  class="text-muted-foreground mb-4 md:mb-6 leading-relaxed text-sm md:text-base"
                >
                  {filteredPosts[0].description}
                </p>
                <div class="flex items-center justify-between">
                  <div
                    class="flex items-center space-x-3 md:space-x-4 text-xs md:text-sm text-muted-foreground"
                  >
                    <span>{filteredPosts[0].date}</span>
                    <div class="flex items-center">
                      <svg
                        class="h-3 w-3 md:h-4 md:w-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      5 min read
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" class="text-xs md:text-sm">
                    Read More
                    <svg
                      class="h-3 w-3 md:h-4 md:w-4 ml-1 md:ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </a>
        </Card>
      {/if}

      <!-- Other posts -->
      <div class="grid md:grid-cols-2 gap-6 md:gap-8">
        {#each filteredPosts.slice(1) as post, index}
          <a href="/blog/{post.slug}">
            <Card
              class="group cursor-pointer hover:shadow-xl transition-all duration-300 h-full"
            >
              <div class="relative overflow-hidden rounded-t-lg">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  class="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent class="p-4 md:p-6">
                <Badge variant="outline" class="mb-2 md:mb-3 text-xs">
                  {post.tags[0]}
                </Badge>
                <h3
                  class="text-base md:text-lg font-semibold mb-2 md:mb-3 group-hover:text-primary transition-colors"
                >
                  {post.title}
                </h3>
                <p
                  class="text-muted-foreground mb-3 md:mb-4 text-xs md:text-sm leading-relaxed"
                >
                  {post.description}
                </p>
                <div
                  class="flex items-center justify-between text-xs text-muted-foreground"
                >
                  <span>{post.date}</span>
                  <div class="flex items-center">
                    <svg
                      class="h-3 w-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    5 min read
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>
        {/each}
      </div>

      <div class="text-center mt-8 md:mt-12">
        <a href="/blog">
          <Button variant="outline" size="lg" class="text-sm md:text-base">
            View All Posts
            <svg
              class="h-4 w-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Button>
        </a>
      </div>
    </div>
  </div>
</section>
