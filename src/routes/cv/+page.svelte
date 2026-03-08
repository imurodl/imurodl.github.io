<script lang="ts">
  const focusAreas = [
    "Backend systems",
    "Full-stack product work",
    "APIs and data flows",
    "Performance and reliability",
  ];

  const contactLinks = [
    {
      label: "GitHub",
      href: "https://github.com/imurodl",
      value: "github.com/imurodl",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/murod-mirzaliev-43554836b/",
      value: "linkedin.com/in/murod-mirzaliev-43554836b",
    },
    {
      label: "Email",
      href: "mailto:dev@imurodl.me",
      value: "dev@imurodl.me",
    },
  ];
</script>

<svelte:head>
  <title>CV | Murod</title>
  <meta
    name="description"
    content="Concise CV for Murod Mirzaliev, a backend-leaning full-stack software engineer focused on durable systems and product work."
  />
</svelte:head>

<section class="terminal-page">
  <div class="terminal-window">
    <header class="status-bar" aria-label="CV header">
      <a class="status-bar__label" href="/">cd ..</a>
      <span class="terminal-meta">curriculum vitae</span>
    </header>

    <div class="terminal-body">
      <div class="prompt-block">
        <p class="prompt-line">$ cat cv.txt</p>
        <h1 class="terminal-name">Murod Mirzaliev</h1>
        <p class="terminal-role">Full-stack engineer</p>
        <p class="terminal-copy">
          I work across the stack, with more weight on backend systems,
          application logic, and the parts of a product that need to stay
          reliable over time. I care about software that holds up under real
          use, not just software that looks finished in screenshots.
        </p>
      </div>

      <div class="terminal-grid">
        <section class="terminal-panel" aria-labelledby="focus-heading">
          <p class="terminal-label" id="focus-heading">$ ls /focus</p>
          <ul class="meta-list">
            {#each focusAreas as area}
              <li>
                <span>{area}</span>
              </li>
            {/each}
          </ul>
        </section>

        <section class="terminal-panel" aria-labelledby="details-heading">
          <p class="terminal-label" id="details-heading">$ cat /details</p>
          <ul class="meta-list">
            <li>
              <span class="terminal-meta">Base</span>
              <span>Seoul, South Korea</span>
            </li>
            <li>
              <span class="terminal-meta">Format</span>
              <span>Short profile</span>
            </li>
            <li>
              <span class="terminal-meta">Note</span>
              <span>
                Full CV link will be
                <span class="underline decoration-[1px] underline-offset-[0.2em]">
                  here
                </span>.
              </span>
            </li>
          </ul>
        </section>
      </div>

      <section class="terminal-panel" aria-labelledby="contact-heading">
        <p class="terminal-label" id="contact-heading">$ ls /contact</p>
        <ul class="link-list">
          {#each contactLinks as link}
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
                <span class="terminal-link__description">{link.value}</span>
              </a>
            </li>
          {/each}
        </ul>
      </section>
    </div>
  </div>
</section>
