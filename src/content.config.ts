import { z } from 'zod';
import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
    featured: z.boolean().default(false).optional(),
    draft: z.boolean().default(false),
    relatedPosts: z.array(reference('blog')).optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    status: z.enum(['completed', 'in-progress', 'planned', 'archived']).default('completed'),
    technologies: z.array(z.string()),
    categories: z.array(z.string()).optional(),
    featured: z.boolean().default(false).optional(),
    draft: z.boolean().default(false).optional(),
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    imageUrl: z.string().optional(),
    favicon: z.string().optional(),
    priority: z.number().min(1).max(10).default(5),
    collaborators: z.array(z.string()).optional(),
    achievements: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'blog': blog,
  'projects': projects,
};
