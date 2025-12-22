<script lang="ts">
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  onMount(() => {
    goto("/#about");
  });
</script>

<svelte:head>
  <title>About | Murod</title>
  <meta name="description" content="About Murod - Software Developer" />
</svelte:head>

<div class="min-h-screen flex items-center justify-center">
  <p class="text-muted-foreground">Redirecting...</p>
</div>
