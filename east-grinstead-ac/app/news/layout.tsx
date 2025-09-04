import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { newsSource } from '@/lib/source';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <DocsLayout tree={newsSource.pageTree} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
