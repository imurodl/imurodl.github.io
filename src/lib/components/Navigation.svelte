<script lang="ts">
  import { onMount } from "svelte";
  import Button from "./ui/Button.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#portfolio" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  let activeSection = $state("");
  let scrollProgress = $state(0);
  let mobileMenuOpen = $state(false);

  onMount(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      scrollProgress = progress;

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        activeSection = currentSection;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function scrollToSection(href: string) {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    mobileMenuOpen = false;
  }

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
</script>

<!-- Progress bar -->
<div class="fixed top-0 left-0 w-full h-[2px] bg-transparent z-50">
  <div
    class="h-full bg-primary transition-all duration-300 ease-out"
    style="width: {scrollProgress}%"
  ></div>
</div>

<!-- Desktop Navigation -->
<nav
  class="hidden md:flex fixed top-6 left-1/2 transform -translate-x-1/2 z-40 items-center gap-1 bg-card/90 backdrop-blur-md border border-border rounded-lg px-2 py-2"
>
  {#each navItems as item}
    <button
      onclick={() => scrollToSection(item.href)}
      class="px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 {activeSection ===
      item.href.substring(1)
        ? 'bg-accent text-foreground'
        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'}"
    >
      {item.name}
    </button>
  {/each}
  <div class="w-px h-6 bg-border mx-1"></div>
  <ThemeToggle />
</nav>

<!-- Mobile Navigation -->
<nav class="md:hidden fixed top-4 left-4 right-4 z-40">
  <div
    class="bg-card/90 backdrop-blur-md border border-border rounded-lg px-4 py-3"
  >
    <div class="flex items-center justify-between">
      <span class="font-semibold text-foreground">Murod</span>
      <div class="flex items-center gap-1">
        <ThemeToggle />
        <Button variant="ghost" size="icon" onclick={toggleMobileMenu}>
        {#if mobileMenuOpen}
          <svg
            class="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        {:else}
          <svg
            class="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        {/if}
      </Button>
      </div>
    </div>

    {#if mobileMenuOpen}
      <div class="mt-4 pt-4 border-t border-border space-y-1">
        {#each navItems as item}
          <button
            onclick={() => scrollToSection(item.href)}
            class="block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 {activeSection ===
            item.href.substring(1)
              ? 'bg-accent text-foreground'
              : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground'}"
          >
            {item.name}
          </button>
        {/each}
      </div>
    {/if}
  </div>
</nav>
