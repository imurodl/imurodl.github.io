<script lang="ts">
  import { onMount } from "svelte";
  import Card from "./ui/Card.svelte";
  import CardContent from "./ui/CardContent.svelte";
  import Badge from "./ui/Badge.svelte";
  import Button from "./ui/Button.svelte";

  const projects = [
    {
      title: "Design System Platform",
      description: "A comprehensive design system platform that helps teams build consistent, accessible interfaces.",
      image: "/modern-design-system-interface-dashboard.jpg",
      tags: ["React", "TypeScript", "Storybook", "Figma API"],
      problem: "Teams struggled with design consistency across multiple products",
      solution: "Built a centralized platform with live components and documentation",
      results: "40% faster development, 95% design consistency score",
      testimonial: {
        text: "This platform transformed how our team works. We ship features 40% faster now.",
        author: "Sarah Chen, Product Manager",
      },
    },
    {
      title: "E-commerce Mobile App",
      description: "A mobile-first shopping experience with advanced personalization and AR try-on features.",
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
      description: "A HIPAA-compliant dashboard for healthcare providers to manage patient data and analytics.",
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
      description: "A platform for creative professionals to showcase their work with interactive galleries.",
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

<section id="portfolio" bind:this={sectionRef} class="py-16 md:py-24 px-4 md:px-6 bg-muted/30">
  <div class="max-w-7xl mx-auto">
    <div class="transition-all duration-1000 {isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}">
      <h2 class="text-3xl md:text-4xl lg:text-6xl font-bold mb-8 md:mb-16 text-center">Selected Work</h2>

      <div class="grid md:grid-cols-2 gap-6 md:gap-8">
        {#each projects as project, index}
          <Card
            class="group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            onclick={() => toggleProject(index)}
          >
            <div class="relative overflow-hidden rounded-t-lg">
              <img
                src={project.image}
                alt={project.title}
                class="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>

            <CardContent class="p-4 md:p-6">
              <h3 class="text-lg md:text-xl font-semibold mb-2 md:mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p class="text-muted-foreground mb-3 md:mb-4 leading-relaxed text-sm md:text-base">{project.description}</p>

              <div class="flex flex-wrap gap-1.5 md:gap-2 mb-4">
                {#each project.tags as tag}
                  <Badge variant="outline" class="text-xs">
                    {tag}
                  </Badge>
                {/each}
              </div>

              <!-- Expanded content -->
              {#if selectedProject === index}
                <div class="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-border space-y-3 md:space-y-4 animate-slide-up">
                  <div>
                    <h4 class="font-semibold text-xs md:text-sm uppercase tracking-wide text-primary mb-1 md:mb-2">Problem</h4>
                    <p class="text-xs md:text-sm text-muted-foreground">{project.problem}</p>
                  </div>

                  <div>
                    <h4 class="font-semibold text-xs md:text-sm uppercase tracking-wide text-primary mb-1 md:mb-2">Solution</h4>
                    <p class="text-xs md:text-sm text-muted-foreground">{project.solution}</p>
                  </div>

                  <div>
                    <h4 class="font-semibold text-xs md:text-sm uppercase tracking-wide text-primary mb-1 md:mb-2">Results</h4>
                    <p class="text-xs md:text-sm text-muted-foreground font-medium">{project.results}</p>
                  </div>

                  <div class="bg-muted/50 p-3 md:p-4 rounded-lg">
                    <p class="text-xs md:text-sm italic mb-1 md:mb-2">"{project.testimonial.text}"</p>
                    <p class="text-xs text-muted-foreground">— {project.testimonial.author}</p>
                  </div>

                  <div class="flex flex-col sm:flex-row gap-2 md:gap-3 pt-2">
                    <Button size="sm" variant="outline" class="w-full sm:w-auto">
                      <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" class="w-full sm:w-auto">
                      <svg class="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Source Code
                    </Button>
                  </div>
                </div>
              {/if}
            </CardContent>
          </Card>
        {/each}
      </div>
    </div>
  </div>
</section>
