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
    tags: z.array(z.string()),
    category: z.string(),
    readTime: z.string(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    relatedPosts: z.array(reference('blog')),
  }),
});

export const collections = {
  'blog': blog,
};
