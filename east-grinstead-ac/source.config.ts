import {
  defineConfig,
  defineDocs,
  defineDoc,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import { z } from 'zod';

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections#define-docs
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

export const pages = defineDoc({
  dir: 'content',
});

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});
