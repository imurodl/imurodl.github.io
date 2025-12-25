<script lang="ts">
  import { onMount } from "svelte";
  import Badge from "./ui/Badge.svelte";

  const skills = [
    "UI/UX Design",
    "React",
    "TypeScript",
    "Next.js",
    "Svelte",
    "Tailwind CSS",
    "Node.js",
    "Python",
    "Go",
    "PostgreSQL",
    "Docker",
    "AWS",
  ];

  const timeline = [
    {
      year: "2024 — Present",
      role: "Senior Software Developer",
      company: "Tech Company",
      description:
        "Leading frontend development and design systems initiatives.",
    },
    {
      year: "2022 — 2024",
      role: "Full Stack Developer",
      company: "Startup",
      description:
        "Built scalable web applications serving thousands of users.",
    },
    {
      year: "2020 — 2022",
      role: "Frontend Developer",
      company: "Agency",
      description:
        "Developed responsive web applications with focus on performance.",
    },
    {
      year: "2018 — 2020",
      role: "Junior Developer",
      company: "Software House",
      description:
        "Started my journey in web development and learned best practices.",
    },
  ];

  let isVisible = $state(false);
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
</script>

<section id="about" bind:this={sectionRef} class="py-16 md:py-24">
  <div class="max-w-5xl mx-auto">
    <div
      class="transition-all duration-1000 {isVisible
        ? 'animate-slide-up'
        : 'opacity-0 translate-y-8'}"
    >
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16">
        About Me
      </h2>

      <div class="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
        <!-- Personal story -->
        <div class="space-y-6">
          <p class="text-base md:text-lg leading-relaxed text-muted-foreground">
            I'm a passionate software developer with experience in crafting
            user-centered digital experiences. My journey began with a
            fascination for how technology can solve complex problems and create
            meaningful connections between people and products.
          </p>

          <p class="text-base md:text-lg leading-relaxed text-muted-foreground">
            I believe that great software should be accessible, performant, and
            delightful for everyone. I focus on writing clean, maintainable code
            while keeping the end user experience at the forefront.
          </p>

          <p class="text-base md:text-lg leading-relaxed text-muted-foreground">
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open-source projects, or writing about what I've
            learned on my blog.
          </p>

          <!-- Skills -->
          <div class="pt-6">
            <h3 class="text-lg font-semibold mb-4">Skills & Technologies</h3>
            <div class="flex flex-wrap gap-2">
              {#each skills as skill}
                <Badge variant="outline">
                  {skill}
                </Badge>
              {/each}
            </div>
          </div>
        </div>

        <!-- Timeline -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold mb-6">Professional Journey</h3>
          {#each timeline as item}
            <div class="border-l-2 border-border pl-6 pb-6 last:pb-0">
              <div class="text-xs text-muted-foreground font-mono mb-1">
                {item.year}
              </div>
              <h4 class="text-base font-semibold">
                {item.role}
              </h4>
              <div class="text-sm text-muted-foreground mb-2">
                {item.company}
              </div>
              <p class="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Section divider -->
<div class="section-divider"></div>
