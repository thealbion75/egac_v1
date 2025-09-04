import { HomeIcon } from 'lucide-react';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
          >
            <rect width="24" height="24" rx="12" fill="currentColor" />
          </svg>
          East Grinstead AC
        </>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
      {
        text: 'News',
        url: '/news',
      },
      {
        text: 'About',
        url: '/about',
      },
      {
        text: 'Club Records',
        url: '/records',
      },
      {
        text: 'Enquiries',
        url: '/enquiries',
      },
    ],
  };
}
