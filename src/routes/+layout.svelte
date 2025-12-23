<script lang="ts">
  import "../app.css";
  import favicon from "$lib/assets/favicon.svg";
  import Navigation from "$lib/components/Navigation.svelte";

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

<!-- Main Content with Striped Border Layout -->
<div class="border-container bg-background text-foreground">
  <Navigation />
  <main class="bordered-content">
    {@render children()}
  </main>
</div>
