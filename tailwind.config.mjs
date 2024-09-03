/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"verde-text-title-le-medic": "#385F5D",
				"verde-claro-le-medic": "#45D8B6"
			},

			backgroundImage: {
				'hero-pattern': "url('/public/slide-le-medic-min.jpg')",
				'footer-texture': "url('/img/footer-texture.png')",
			}
		},
	},
	plugins: [],
}
