import { about, news, records } from '@/.source';
import { loader } from 'fumadocs-core/source';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const newsSource = loader({
  baseUrl: '/news',
  source: news.toFumadocsSource(),
});

export const aboutSource = loader({
  baseUrl: '/about',
  source: about.toFumadocsSource(),
});

export const recordsSource = loader({
  baseUrl: '/records',
  source: records.toFumadocsSource(),
});
