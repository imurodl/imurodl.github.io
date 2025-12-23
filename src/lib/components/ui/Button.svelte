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
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

  const variants: Record<Variant, string> = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98]",
    outline:
      "border border-border bg-transparent hover:bg-accent hover:text-accent-foreground active:scale-[0.98]",
    ghost: "hover:bg-accent hover:text-accent-foreground active:scale-[0.98]",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:scale-[0.98]",
    destructive:
      "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:scale-[0.98]",
  };

  const sizes: Record<Size, string> = {
    default: "h-10 px-5 py-2",
    sm: "h-8 px-4 text-xs",
    lg: "h-11 px-8 text-base",
    icon: "h-10 w-10",
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
