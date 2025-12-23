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

<!-- Full-width Header Navigation (inside double borders) -->
<header class="fixed top-0 z-50 bg-background border-b border-border header-within-borders">
  <div class="h-16 flex items-center justify-between px-6">
    <!-- Logo -->
    <a href="/" class="font-semibold text-foreground">
      Murod
    </a>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex items-center gap-1">
      {#each navItems as item}
        <button
          onclick={() => scrollToSection(item.href)}
          class="px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 {activeSection ===
          item.href.substring(1)
            ? 'text-foreground'
            : 'text-muted-foreground hover:text-foreground'}"
        >
          {item.name}
        </button>
      {/each}
    </nav>

    <!-- Right side: Theme toggle + Mobile menu -->
    <div class="flex items-center gap-2">
      <ThemeToggle />

      <!-- Mobile menu button -->
      <Button variant="ghost" size="icon" class="md:hidden" onclick={toggleMobileMenu}>
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

  <!-- Mobile Navigation Menu -->
  {#if mobileMenuOpen}
    <div class="md:hidden border-t border-border bg-background">
      <div class="px-6 py-4 space-y-1">
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
    </div>
  {/if}
</header>
