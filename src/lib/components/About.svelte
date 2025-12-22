<script lang="ts">
  import { onMount } from "svelte";
  import Card from "./ui/Card.svelte";
  import CardContent from "./ui/CardContent.svelte";
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
      description: "Leading frontend development and design systems initiatives.",
    },
    {
      year: "2022 — 2024",
      role: "Full Stack Developer",
      company: "Startup",
      description: "Built scalable web applications serving thousands of users.",
    },
    {
      year: "2020 — 2022",
      role: "Frontend Developer",
      company: "Agency",
      description: "Developed responsive web applications with focus on performance.",
    },
    {
      year: "2018 — 2020",
      role: "Junior Developer",
      company: "Software House",
      description: "Started my journey in web development and learned best practices.",
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

<section id="about" bind:this={sectionRef} class="py-16 md:py-24 px-4 md:px-6">
  <div class="max-w-6xl mx-auto">
    <div class="transition-all duration-1000 {isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}">
      <h2 class="text-3xl md:text-4xl lg:text-6xl font-bold mb-8 md:mb-16 text-center">About Me</h2>

      <div class="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
        <!-- Personal story -->
        <div class="space-y-4 md:space-y-6">
          <p class="text-base md:text-lg leading-relaxed text-muted-foreground">
            I'm a passionate software developer with experience in crafting user-centered digital experiences. My
            journey began with a fascination for how technology can solve complex problems and create meaningful
            connections between people and products.
          </p>

          <p class="text-base md:text-lg leading-relaxed text-muted-foreground">
            I believe that great software should be accessible, performant, and delightful for everyone.
            I focus on writing clean, maintainable code while keeping the end user experience at the forefront.
          </p>

          <p class="text-base md:text-lg leading-relaxed text-muted-foreground">
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
            or writing about what I've learned on my blog.
          </p>

          <!-- Skills -->
          <div class="pt-4 md:pt-8">
            <h3 class="text-lg md:text-xl font-semibold mb-3 md:mb-4">Skills & Technologies</h3>
            <div class="flex flex-wrap gap-1.5 md:gap-2">
              {#each skills as skill}
                <Badge variant="secondary" class="text-xs md:text-sm">
                  {skill}
                </Badge>
              {/each}
            </div>
          </div>
        </div>

        <!-- Timeline -->
        <div class="space-y-4 md:space-y-6">
          <h3 class="text-lg md:text-xl font-semibold mb-4 md:mb-8">Professional Journey</h3>
          {#each timeline as item}
            <Card class="border-l-4 border-l-primary">
              <CardContent class="p-4 md:p-6">
                <div class="text-xs md:text-sm text-muted-foreground font-mono mb-1 md:mb-2">{item.year}</div>
                <h4 class="text-base md:text-lg font-semibold mb-0.5 md:mb-1">{item.role}</h4>
                <div class="text-primary font-medium mb-2 md:mb-3 text-sm md:text-base">{item.company}</div>
                <p class="text-muted-foreground leading-relaxed text-sm md:text-base">{item.description}</p>
              </CardContent>
            </Card>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
