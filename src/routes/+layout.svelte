<script lang="ts">
  import "../app.css";
  import favicon from "$lib/assets/favicon.svg";
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <script>
    // Prevent FOUC (Flash of Unstyled Content)
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    }
  </script>
</svelte:head>

<!-- Theme Toggle -->
<ThemeToggle />

<!-- Main Content -->
<main class="min-h-screen bg-background text-foreground">
  {@render children()}
</main>
