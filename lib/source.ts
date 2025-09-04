import { news, pages } from '@/.source';
import { loader, createMDXSource } from 'fumadocs-core/source';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const newsSource = loader({
  baseUrl: '/news',
  source: news.toFumadocsSource(),
});

export const pageSource = createMDXSource(pages);
