/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	plugins: [
		require('@tailwindcss/typography'),
	],
	theme: {
		extend: {
			colors: {
				// Background Colors
				'bg-primary': 'var(--bg-primary)',
				'bg-card': 'var(--bg-card)',
				'bg-card-hover': 'var(--bg-card-hover)',
				'bg-overlay': 'var(--bg-overlay)',
				
				// Border Colors
				'border-primary': 'var(--border-primary)',
				'border-secondary': 'var(--border-secondary)',
				'border-tertiary': 'var(--border-tertiary)',
				'border-accent': 'var(--border-accent)',
				
				// Text Colors
				'text-primary': 'var(--text-primary)',
				'text-secondary': 'var(--text-secondary)',
				'text-tertiary': 'var(--text-tertiary)',
				
				// Accent Colors
				'accent-primary': 'var(--accent-primary)',
				'accent-secondary': 'var(--accent-secondary)',
				'accent-hover': 'var(--accent-hover)',
				
				// Status Colors
				'status-success-bg': 'var(--status-success-bg)',
				'status-success-border': 'var(--status-success-border)',
				'status-success-text': 'var(--status-success-text)',
				
				'status-info-bg': 'var(--status-info-bg)',
				'status-info-border': 'var(--status-info-border)',
				'status-info-text': 'var(--status-info-text)',
				
				'status-warning-bg': 'var(--status-warning-bg)',
				'status-warning-border': 'var(--status-warning-border)',
				'status-warning-text': 'var(--status-warning-text)',
				
				'status-neutral-bg': 'var(--status-neutral-bg)',
				'status-neutral-border': 'var(--status-neutral-border)',
				'status-neutral-text': 'var(--status-neutral-text)',
			},
			fontFamily: {
				'sans': ['-apple-system', 'BlinkMacSystemFont', 'Inter', 'system-ui', 'sans-serif'],
			},
		},
	},
};
