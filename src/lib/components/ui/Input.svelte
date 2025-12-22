<script lang="ts">
  import { cn } from "$lib/utils";

  interface Props {
    type?: string;
    id?: string;
    name?: string;
    value?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    class?: string;
    oninput?: (e: Event) => void;
  }

  let {
    type = "text",
    id,
    name,
    value = $bindable(""),
    placeholder,
    required = false,
    disabled = false,
    class: className = "",
    oninput,
  }: Props = $props();
</script>

<input
  {type}
  {id}
  {name}
  bind:value
  {placeholder}
  {required}
  {disabled}
  {oninput}
  class={cn(
    "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
    className
  )}
/>
