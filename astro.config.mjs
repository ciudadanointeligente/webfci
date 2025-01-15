// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import "@fontsource-variable/figtree";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
  integrations: [tailwind(), alpinejs()],
});
