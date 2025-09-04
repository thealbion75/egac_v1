import { buttonVariants } from 'fumadocs-ui/components/button';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center p-4 text-center">
      <div className="mb-8 max-w-2xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Welcome to East Grinstead Athletics Club
        </h1>
        <p className="text-lg text-muted-foreground">
          Your local hub for running, jumping, and throwing. We welcome
          athletes of all ages and abilities to join our friendly and
          supportive community.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Link
          href="/news"
          className={buttonVariants({
            color: 'primary',
            size: 'lg',
            className: 'min-w-[120px]',
          })}
        >
          Latest News
        </Link>
        <Link
          href="/about"
          className={buttonVariants({
            variant: 'outline',
            size: 'lg',
            className: 'min-w-[120px]',
          })}
        >
          About the Club
        </Link>
      </div>
    </main>
  );
}
