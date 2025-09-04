import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import { z } from 'zod';

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

export const about = defineDocs({
  dir: 'content/about',
});

export const records = defineDocs({
  dir: 'content/records',
});

export default defineConfig({
  mdxOptions: {
    // No global options needed for now
  },
});
