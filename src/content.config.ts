import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Force transform to ensure Date object
			pubDate: z.string()
			  .transform(str => {
				const date = new Date(str);
				if (isNaN(date.getTime())) {
				  throw new Error(`Invalid pubDate: ${str}`);
				}
				return date;
			  })
			  .default(() => new Date()), // 保证一定有值
			updatedDate: z.string()
			  .transform(str => {
				const date = new Date(str);
				if (isNaN(date.getTime())) {
				  throw new Error(`Invalid updatedDate: ${str}`);
				}
				return date;
			  })
			  .optional(),
			heroImage: image().optional(),
		}),
});

export const collections = { blog };