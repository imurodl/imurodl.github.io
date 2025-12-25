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
<header
  class="fixed top-0 z-50 bg-background border-b border-border header-within-borders"
>
  <div class="h-16 flex items-center justify-between">
    <!-- Logo -->
    <a
      href="/"
      class="font-semibold text-foreground px-6 h-full flex items-center border-r border-border"
    >
      Murod<span
        class="inline-block w-1 h-1 bg-muted-foreground ml-0.5 translate-y-[5px]"
      ></span>
    </a>

    <!-- Desktop Navigation - Centered -->
    <nav class="hidden md:flex items-center justify-center flex-1 h-full">
      {#each navItems as item, i}
        <button
          onclick={() => scrollToSection(item.href)}
          class="px-8 h-full text-sm font-medium transition-all duration-200 border-r border-border {i ===
          0
            ? 'border-l'
            : ''} hover:bg-muted {activeSection === item.href.substring(1)
            ? 'text-foreground bg-muted'
            : 'text-muted-foreground'}"
        >
          {item.name}
        </button>
      {/each}
    </nav>

    <!-- Spacer to push right items -->
    <div class="flex-1 md:hidden"></div>

    <!-- Right side: Theme toggle + Mobile menu -->
    <div class="flex items-center h-full">
      <div class="border-l border-border h-full flex items-center px-4">
        <ThemeToggle />
      </div>

      <!-- Mobile menu button -->
      <div
        class="md:hidden border-l border-border h-full flex items-center px-2"
      >
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
