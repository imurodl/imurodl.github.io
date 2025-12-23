<script lang="ts">
  import { cn } from "$lib/utils";

  interface Props {
    class?: string;
    onclick?: (e: MouseEvent) => void;
    children: import("svelte").Snippet;
  }

  let { class: className = "", onclick, children }: Props = $props();
</script>

<div
  class={cn(
    "rounded-lg border border-border bg-card text-card-foreground shadow",
    className
  )}
  role={onclick ? "button" : undefined}
  {...onclick ? { tabindex: 0 } : {}}
  {onclick}
  onkeydown={(e) => {
    if (onclick && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      onclick(e as unknown as MouseEvent);
    }
  }}
>
  {@render children()}
</div>
