import { defineConfig } from "astro/config"

import vercel from "@astrojs/vercel/serverless"

import mdx from "@astrojs/mdx"

import react from "@astrojs/react"

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), react()],
  output: "server",
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
  },
})