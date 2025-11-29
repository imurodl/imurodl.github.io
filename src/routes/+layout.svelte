<script lang="ts">
	import "../app.css";
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let { children } = $props();
	let mobileMenuOpen = $state(false);
	let isDark = $state(false);

	onMount(() => {
		// Check for saved theme preference or default to system preference
		const savedTheme = localStorage.getItem('theme');
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		
		if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
			document.documentElement.classList.add('dark');
			isDark = true;
		} else {
			document.documentElement.classList.remove('dark');
			isDark = false;
		}
	});

	const toggleTheme = () => {
		console.log('Toggle theme clicked, current isDark:', isDark);
		isDark = !isDark;
		
		if (isDark) {
			document.documentElement.classList.add('dark');
			if (browser) localStorage.setItem('theme', 'dark');
			console.log('Switched to dark mode');
		} else {
			document.documentElement.classList.remove('dark');
			if (browser) localStorage.setItem('theme', 'light');
			console.log('Switched to light mode');
		}
	};

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
		if (mobileMenuOpen) {
			document.documentElement.classList.add('overflow-hidden');
		} else {
			document.documentElement.classList.remove('overflow-hidden');
		}
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
		document.documentElement.classList.remove('overflow-hidden');
	}
</script>

<svelte:head>
	<link rel="icon" href="{favicon}" />
	<script>
		// Prevent FOUC (Flash of Unstyled Content)
		if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			document.documentElement.classList.add('dark');
		}
	</script>
</svelte:head>

<!-- Navigation Header -->
<header class="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
	<nav class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
		<!-- Logo/Title -->
		<a href="/" class="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">
			Murod's Blog
		</a>

		<!-- Desktop Navigation -->
		<div class="hidden md:flex items-center gap-6">
			<a 
				href="/" 
				class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
				class:text-blue-600={$page.url.pathname === '/'}
				class:dark:text-blue-400={$page.url.pathname === '/'}
			>
				Home
			</a>
			<a 
				href="/blog" 
				class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
				class:text-blue-600={$page.url.pathname.startsWith('/blog')}
				class:dark:text-blue-400={$page.url.pathname.startsWith('/blog')}
			>
				Blog
			</a>
			<a 
				href="/about" 
				class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
				class:text-blue-600={$page.url.pathname === '/about'}
				class:dark:text-blue-400={$page.url.pathname === '/about'}
			>
				About
			</a>
			
			<!-- Theme Toggle Button -->
			<button
				onclick={toggleTheme}
				class="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
				aria-label="Toggle theme"
			>
				{#if isDark}
					<!-- Sun Icon -->
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
					</svg>
				{:else}
					<!-- Moon Icon -->
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
					</svg>
				{/if}
			</button>
		</div>

		<!-- Mobile Menu Button -->
		<div class="md:hidden flex items-center gap-3">
			<!-- Theme Toggle (Mobile) -->
			<button
				onclick={toggleTheme}
				class="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
				aria-label="Toggle theme"
			>
				{#if isDark}
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
					</svg>
				{:else}
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
					</svg>
				{/if}
			</button>

			<button
				onclick={toggleMobileMenu}
				class="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
				aria-label="Toggle menu"
			>
				{#if mobileMenuOpen}
					<!-- Close Icon -->
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				{:else}
					<!-- Menu Icon -->
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				{/if}
			</button>
		</div>
	</nav>

	<!-- Mobile Menu -->
	{#if mobileMenuOpen}
		<div class="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
			<div class="px-4 py-2 space-y-1">
				<a 
					href="/" 
					onclick={closeMobileMenu}
					class="block px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
					class:bg-gray-100={$page.url.pathname === '/'}
					class:dark:bg-gray-800={$page.url.pathname === '/'}
				>
					Home
				</a>
				<a 
					href="/blog" 
					onclick={closeMobileMenu}
					class="block px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
					class:bg-gray-100={$page.url.pathname.startsWith('/blog')}
					class:dark:bg-gray-800={$page.url.pathname.startsWith('/blog')}
				>
					Blog
				</a>
				<a 
					href="/about" 
					onclick={closeMobileMenu}
					class="block px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
					class:bg-gray-100={$page.url.pathname === '/about'}
					class:dark:bg-gray-800={$page.url.pathname === '/about'}
				>
					About
				</a>
			</div>
		</div>
	{/if}
</header>

<!-- Main Content -->
<main class="flex-1 bg-white dark:bg-gray-900">
	{@render children()}
</main>

<!-- Footer (optional) -->
<footer class="border-t border-gray-200 dark:border-gray-800 mt-auto">
	<div class="max-w-6xl mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-400 text-sm">
		<p>© {new Date().getFullYear()} Murod's Blog. Built with SvelteKit.</p>
	</div>
</footer>
