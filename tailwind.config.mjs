/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	plugins: [],
	theme: {
		extend: {
			colors: {
				'bg-primary': 'var(--bg-primary)',
				'bg-secondary': 'var(--bg-secondary)',
				'accent-primary': 'var(--accent-primary)',
				'accent-secondary': 'var(--accent-secondary)',
				'text-primary': 'var(--text-primary)',
				'text-secondary': 'var(--text-secondary)',
			},
			fontFamily: {
				'sans': ['-apple-system', 'BlinkMacSystemFont', 'Inter', 'system-ui', 'sans-serif'],
			},
		},
	},
};
