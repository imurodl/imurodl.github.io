<script lang="ts">
  import { browser } from "$app/environment";
  import Button from "./ui/Button.svelte";

  let isDark = $state(false);

  $effect(() => {
    if (browser) {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add("dark");
        isDark = true;
      } else {
        document.documentElement.classList.remove("dark");
        isDark = false;
      }
    }
  });

  function toggleTheme() {
    isDark = !isDark;

    if (isDark) {
      document.documentElement.classList.add("dark");
      if (browser) localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      if (browser) localStorage.setItem("theme", "light");
    }
  }
</script>

<Button
  variant="ghost"
  size="icon"
  onclick={toggleTheme}
  class="fixed bottom-6 right-6 z-50 rounded-full bg-card/80 backdrop-blur-md border border-border shadow-lg hover:bg-accent"
>
  {#if isDark}
    <!-- Sun Icon -->
    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  {:else}
    <!-- Moon Icon -->
    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  {/if}
</Button>
