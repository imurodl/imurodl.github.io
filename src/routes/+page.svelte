<script lang="ts">
  import Navigation from "$lib/components/Navigation.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import About from "$lib/components/About.svelte";
  import Portfolio from "$lib/components/Portfolio.svelte";
  import BlogSection from "$lib/components/BlogSection.svelte";
  import Contact from "$lib/components/Contact.svelte";

  interface Props {
    data: {
      posts: Array<{
        title: string;
        description: string;
        date: string;
        tags: string[];
        slug: string;
      }>;
    };
  }

  let { data }: Props = $props();
</script>

<svelte:head>
  <title>Murod - Software Developer</title>
  <meta
    name="description"
    content="Software developer crafting accessible, performant digital experiences."
  />
</svelte:head>

<Navigation />
<Hero />
<About />
<Portfolio />
<BlogSection posts={data.posts} />
<Contact />
