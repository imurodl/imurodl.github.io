<script lang="ts">
  import { onMount } from "svelte";
  import Card from "./ui/Card.svelte";
  import CardContent from "./ui/CardContent.svelte";
  import Button from "./ui/Button.svelte";
  import Input from "./ui/Input.svelte";
  import Textarea from "./ui/Textarea.svelte";
  import Label from "./ui/Label.svelte";

  let isVisible = $state(false);
  let formData = $state({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  let isSubmitting = $state(false);
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

  async function handleSubmit(e: Event) {
    e.preventDefault();
    isSubmitting = true;

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);
    isSubmitting = false;
    formData = { name: "", email: "", subject: "", message: "" };
  }
</script>

<section id="contact" bind:this={sectionRef} class="py-16 md:py-24 px-4 md:px-6 bg-muted/30">
  <div class="max-w-6xl mx-auto">
    <div class="transition-all duration-1000 {isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}">
      <h2 class="text-3xl md:text-4xl lg:text-6xl font-bold mb-8 md:mb-16 text-center">Let's Work Together</h2>

      <div class="grid lg:grid-cols-2 gap-8 md:gap-16">
        <!-- Contact info -->
        <div class="space-y-6 md:space-y-8">
          <div>
            <h3 class="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Get In Touch</h3>
            <p class="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
              I'm always interested in discussing new projects, creative ideas, or opportunities to be part of your
              vision. Let's create something amazing together.
            </p>
          </div>

          <div class="space-y-4 md:space-y-6">
            <div class="flex items-center space-x-4">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg class="h-4 w-4 md:h-5 md:w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p class="font-medium text-sm md:text-base">Email</p>
                <p class="text-muted-foreground text-sm md:text-base">hello@murod.dev</p>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg class="h-4 w-4 md:h-5 md:w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <p class="font-medium text-sm md:text-base">GitHub</p>
                <p class="text-muted-foreground text-sm md:text-base">github.com/murod</p>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg class="h-4 w-4 md:h-5 md:w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <p class="font-medium text-sm md:text-base">LinkedIn</p>
                <p class="text-muted-foreground text-sm md:text-base">linkedin.com/in/murod</p>
              </div>
            </div>
          </div>

          <div class="pt-4 md:pt-8">
            <p class="text-xs md:text-sm text-muted-foreground mb-2 md:mb-4">Response time: Usually within 24 hours</p>
            <p class="text-xs md:text-sm text-muted-foreground">
              Available for freelance projects and full-time opportunities
            </p>
          </div>
        </div>

        <!-- Contact form -->
        <Card>
          <CardContent class="p-6 md:p-8">
            <form onsubmit={handleSubmit} class="space-y-4 md:space-y-6">
              <div class="grid md:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <Label for="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    bind:value={formData.name}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div class="space-y-2">
                  <Label for="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    bind:value={formData.email}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div class="space-y-2">
                <Label for="subject">Subject *</Label>
                <Input
                  id="subject"
                  name="subject"
                  bind:value={formData.subject}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div class="space-y-2">
                <Label for="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  bind:value={formData.message}
                  required
                  placeholder="Tell me about your project..."
                  rows={6}
                />
              </div>

              <Button type="submit" size="lg" class="w-full" disabled={isSubmitting}>
                {#if isSubmitting}
                  Sending...
                {:else}
                  Send Message
                  <svg class="h-4 w-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                {/if}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <!-- Footer -->
      <div class="text-center mt-16 md:mt-24 pt-8 md:pt-12 border-t border-border">
        <p class="text-muted-foreground text-sm md:text-base">© 2025 Murod. Crafted with care.</p>
      </div>
    </div>
  </div>
</section>
