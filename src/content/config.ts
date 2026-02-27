import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    id: z.string(),
    timestamp: z.coerce.date(),
    series: z.string(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { blog, pages };
