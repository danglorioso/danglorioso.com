import { z, defineCollection, reference } from 'astro:content';

// Using Astro Collections for blog posts

// Blog schema
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    toc: z.boolean().default(false), // Table of contents
    relatedPosts: z.array(reference('blog')).optional(),
  }),
});

export const collections = {
  'blog': blog,
};
