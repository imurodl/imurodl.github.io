<script lang="ts">
  import { cn } from "$lib/utils";

  interface Props {
    id?: string;
    name?: string;
    value?: string;
    placeholder?: string;
    rows?: number;
    required?: boolean;
    disabled?: boolean;
    class?: string;
    oninput?: (e: Event) => void;
  }

  let {
    id,
    name,
    value = $bindable(""),
    placeholder,
    rows = 4,
    required = false,
    disabled = false,
    class: className = "",
    oninput,
  }: Props = $props();
</script>

<textarea
  {id}
  {name}
  bind:value
  {placeholder}
  {rows}
  {required}
  {disabled}
  {oninput}
  class={cn(
    "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
    className
  )}
></textarea>
