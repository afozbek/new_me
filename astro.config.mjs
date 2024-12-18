import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://next.furkanozbek.com/",
	base: "/",
	integrations: [sitemap()],
	markdown: {
		shikiConfig: {
			theme: "material-theme-darker",
			langs: [],
		},
	},
});
