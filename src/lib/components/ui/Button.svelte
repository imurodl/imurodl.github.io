<script lang="ts">
  import { cn } from "$lib/utils";

  type Variant = "default" | "outline" | "ghost" | "secondary" | "destructive";
  type Size = "default" | "sm" | "lg" | "icon";

  interface Props {
    variant?: Variant;
    size?: Size;
    class?: string;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    onclick?: (e: MouseEvent) => void;
    children: import("svelte").Snippet;
  }

  let {
    variant = "default",
    size = "default",
    class: className = "",
    disabled = false,
    type = "button",
    onclick,
    children,
  }: Props = $props();

  const baseStyles =
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

  const variants: Record<Variant, string> = {
    default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
    outline:
      "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
    destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
  };

  const sizes: Record<Size, string> = {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-10 rounded-md px-8",
    icon: "h-9 w-9",
  };
</script>

<button
  {type}
  {disabled}
  {onclick}
  class={cn(baseStyles, variants[variant], sizes[size], className)}
>
  {@render children()}
</button>
