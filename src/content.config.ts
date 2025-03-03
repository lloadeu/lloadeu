import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const categories = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/categories" }),
  schema: z.object({
    type: z.string(),
    title: z.string(),
    cover: z.string(),
    color: z.string(),
  }),
});
const homeCategories = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/homeCategories" }),
  schema: z.object({
    title: z.string(),
    value: z.string(),
    categoryList: z.array(z.string()),
  }),
});
const songs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/songs" }),
  schema: z.object({
    type: z.string(),
    title: z.string(),
    cover: z.string(),
    categoryList: z.array(z.string()),
    src: z.string(),
    originalTitle: z.string().optional(),
    originalAuthors: z.array(z.string()).optional(),
    traducedBy: z.array(z.string()).optional(),
    arrengedBy: z.array(z.string()).optional(),
    videoUrl: z.string().optional(),
    originalVideoUrl: z.string().optional(),
    chords: z.string().optional(),
    musicSheet: z.string().optional(),
  }),
});
const homeSongs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/homeSongs" }),
  schema: z.object({
    title: z.string(),
    value: z.string(),
    songList: z.array(z.string()),
  }),
});

export const collections = { categories, homeCategories, songs, homeSongs };
