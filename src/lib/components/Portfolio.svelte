<script lang="ts">
  import { onMount } from "svelte";
  import Badge from "./ui/Badge.svelte";
  import Button from "./ui/Button.svelte";

  const projects = [
    {
      title: "Design System Platform",
      description:
        "A comprehensive design system platform that helps teams build consistent, accessible interfaces.",
      image: "/modern-design-system-interface-dashboard.jpg",
      tags: ["React", "TypeScript", "Storybook", "Figma API"],
      problem:
        "Teams struggled with design consistency across multiple products",
      solution:
        "Built a centralized platform with live components and documentation",
      results: "40% faster development, 95% design consistency score",
      testimonial: {
        text: "This platform transformed how our team works. We ship features 40% faster now.",
        author: "Sarah Chen, Product Manager",
      },
    },
    {
      title: "E-commerce Mobile App",
      description:
        "A mobile-first shopping experience with advanced personalization and AR try-on features.",
      image: "/mobile-ecommerce-app-interface-with-ar-features.jpg",
      tags: ["React Native", "AR Kit", "Machine Learning", "Node.js"],
      problem: "High cart abandonment rates and low user engagement",
      solution: "Implemented AR try-on and personalized recommendations",
      results: "60% increase in conversion, 4.8 app store rating",
      testimonial: {
        text: "The AR feature is a game-changer. Our customers love trying products virtually.",
        author: "Mike Rodriguez, CEO",
      },
    },
    {
      title: "Healthcare Dashboard",
      description:
        "A HIPAA-compliant dashboard for healthcare providers to manage patient data and analytics.",
      image: "/healthcare-dashboard.png",
      tags: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
      problem: "Complex patient data was difficult to visualize and analyze",
      solution: "Created intuitive dashboards with real-time analytics",
      results: "50% reduction in diagnosis time, improved patient outcomes",
      testimonial: {
        text: "This dashboard helps us make better decisions faster. Patient care has improved significantly.",
        author: "Dr. Emily Watson, Chief Medical Officer",
      },
    },
    {
      title: "Creative Portfolio Platform",
      description:
        "A platform for creative professionals to showcase their work with interactive galleries.",
      image: "/creative-portfolio-website-with-interactive-galler.jpg",
      tags: ["Next.js", "Three.js", "Framer Motion", "Supabase"],
      problem: "Creatives needed better ways to showcase interactive work",
      solution: "Built immersive 3D galleries with smooth animations",
      results: "200% increase in portfolio views, featured in design blogs",
      testimonial: {
        text: "My portfolio has never looked better. I'm getting more client inquiries than ever.",
        author: "Alex Kim, Creative Director",
      },
    },
  ];

  let isVisible = $state(false);
  let selectedProject = $state<number | null>(null);
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

  function toggleProject(index: number) {
    selectedProject = selectedProject === index ? null : index;
  }
</script>

<section id="portfolio" bind:this={sectionRef} class="py-16 md:py-24">
  <div class="max-w-5xl mx-auto">
    <div
      class="transition-all duration-1000 {isVisible
        ? 'animate-slide-up'
        : 'opacity-0 translate-y-8'}"
    >
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16">
        Selected Work
      </h2>

      <div class="grid md:grid-cols-2 gap-6">
        {#each projects as project, index}
          <div
            class="group cursor-pointer border border-border rounded-lg overflow-hidden transition-all duration-200 hover:border-muted-foreground"
            onclick={() => toggleProject(index)}
            onkeydown={(e) =>
              (e.key === "Enter" || e.key === " ") && toggleProject(index)}
            role="button"
            tabindex="0"
          >
            <div class="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div class="p-5">
              <h3 class="text-lg font-semibold mb-2">
                {project.title}
              </h3>

              <p class="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div class="flex flex-wrap gap-2">
                {#each project.tags as tag}
                  <Badge variant="outline" class="text-xs">
                    {tag}
                  </Badge>
                {/each}
              </div>

              <!-- Expanded content -->
              {#if selectedProject === index}
                <div
                  class="mt-5 pt-5 border-t border-border space-y-4 animate-slide-up"
                >
                  <div>
                    <h4
                      class="font-medium text-xs uppercase tracking-wide text-muted-foreground mb-1"
                    >
                      Problem
                    </h4>
                    <p class="text-sm">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <h4
                      class="font-medium text-xs uppercase tracking-wide text-muted-foreground mb-1"
                    >
                      Solution
                    </h4>
                    <p class="text-sm">
                      {project.solution}
                    </p>
                  </div>

                  <div>
                    <h4
                      class="font-medium text-xs uppercase tracking-wide text-muted-foreground mb-1"
                    >
                      Results
                    </h4>
                    <p class="text-sm font-medium">
                      {project.results}
                    </p>
                  </div>

                  <div class="bg-muted/30 p-4 rounded-lg border border-border">
                    <p class="text-sm italic mb-2">
                      "{project.testimonial.text}"
                    </p>
                    <p class="text-xs text-muted-foreground">
                      — {project.testimonial.author}
                    </p>
                  </div>

                  <div class="flex gap-3 pt-2">
                    <Button size="sm" variant="outline">Live Demo</Button>
                    <Button size="sm" variant="outline">Source Code</Button>
                  </div>
                </div>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Section divider -->
<div class="section-divider"></div>
