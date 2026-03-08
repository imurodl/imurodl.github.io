<script lang="ts">
  const primaryLinks = [
    {
      href: "https://github.com/imurodl",
      label: "GitHub",
      description: "Repositories, experiments, and the way I tend to build.",
    },
    {
      href: "/cv",
      label: "CV",
      description: "Concise background, focus areas, and contact details.",
    },
    {
      href: "https://www.linkedin.com/in/murod-mirzaliev-43554836b/",
      label: "LinkedIn",
      description: "Work history, background, and the formal version of me.",
    },
  ];

  const contactLines = [
    {
      label: "Email",
      value: "dev@imurodl.me",
      href: "mailto:dev@imurodl.me",
    },
    {
      label: "Base",
      value: "Seoul, South Korea",
    },
  ];
</script>

<svelte:head>
  <title>Murod | Software Engineer</title>
  <meta
    name="description"
    content="Murod is a software engineer focused on backend-leaning full-stack work, durable systems, and calm implementation."
  />
</svelte:head>

<section class="terminal-page">
  <div class="terminal-window">
    <header class="status-bar" aria-label="Site status">
      <span class="status-bar__label">imurodl.me</span>
      <span class="status-bar__role">software engineer</span>
    </header>

    <div class="terminal-body">
      <div class="prompt-block">
        <p class="prompt-line">$ whoami</p>
        <h1 class="terminal-name">Murod</h1>
        <p class="terminal-role">Software engineer</p>
        <p class="terminal-copy">
          I build software that is fast, durable, and boring in the right ways.
          Most of my work sits between <strong>backend systems</strong>,
          product engineering, and the implementation details that make
          software easier to operate and easier to trust.
        </p>
      </div>

      <div class="terminal-grid">
        <section class="terminal-panel" aria-labelledby="links-heading">
          <p class="terminal-label" id="links-heading">$ ls /links</p>
          <ul class="link-list">
            {#each primaryLinks as link}
              <li>
                <a
                  class="terminal-link"
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http")
                    ? "noreferrer noopener"
                    : undefined}
                >
                  <span class="terminal-link__title">{link.label}</span>
                  <span class="terminal-link__description">
                    {link.description}
                  </span>
                </a>
              </li>
            {/each}
          </ul>
        </section>

        <section class="terminal-panel" aria-labelledby="contact-heading">
          <p class="terminal-label" id="contact-heading">$ cat /contact</p>
          <ul class="meta-list">
            {#each contactLines as item}
              <li>
                <span class="terminal-meta">{item.label}</span>
                {#if item.href}
                  <a href={item.href}>{item.value}</a>
                {:else}
                  <span>{item.value}</span>
                {/if}
              </li>
            {/each}
            <li>
              <span class="terminal-meta">Note</span>
              <span>Visit the links for more information.</span>
            </li>
          </ul>
        </section>
      </div>

      <footer class="terminal-footer">
        <span class="terminal-meta">$ echo "built with sveltekit"</span>
        <span class="terminal-meta">2026</span>
      </footer>
    </div>
  </div>
</section>
