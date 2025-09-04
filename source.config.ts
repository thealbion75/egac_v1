import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import { z } from 'zod';

// Define the news collection
export const news = defineDocs({
  dir: 'content/news',
  docs: {
    schema: frontmatterSchema.extend({
      date: z.string().date().optional(),
      author: z.string().optional(),
    }),
  },
  meta: {
    schema: metaSchema,
  },
});

// Define the pages collection
export const pages = defineDocs({
  dir: 'content',
});

// Export the MDX configuration
export default defineConfig({
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});