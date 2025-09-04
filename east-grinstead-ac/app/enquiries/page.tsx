import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enquiries',
  description: 'Contact East Grinstead Athletics Club',
};

export default function Page() {
  return (
    <DocsPage toc={[]} full>
      <DocsTitle>Enquiries</DocsTitle>
      <DocsDescription>
        If you have any questions, please fill out the form below and we will
        get back to you as soon as possible.
      </DocsDescription>
      <DocsBody>
        <div className="rounded-lg border bg-card p-4 text-sm text-muted-foreground">
          <p className="font-bold">Note for site administrator:</p>
          <p>
            This form is not yet functional. To enable it, you need to sign up
            for a free account at{' '}
            <a
              href="https://formspree.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline"
            >
              Formspree.io
            </a>
            , create a new form, and replace the placeholder URL in the{' '}
            <code className="rounded-sm bg-secondary px-1 py-0.5 text-secondary-foreground">
              action
            </code>{' '}
            attribute of this form with your actual Formspree endpoint URL.
          </p>
        </div>
        <form
          action="https://formspree.io/f/your_form_id" // TODO: Replace with actual form ID
          method="POST"
          className="mt-4 flex flex-col gap-4"
        >
          <label className="flex flex-col gap-1">
            <span>Your email:</span>
            <input type="email" name="email" className="rounded-md border p-2" />
          </label>
          <label className="flex flex-col gap-1">
            <span>Your message:</span>
            <textarea name="message" className="rounded-md border p-2"></textarea>
          </label>
          <button type="submit" className="rounded-md bg-blue-500 p-2 text-white">
            Send
          </button>
        </form>
      </DocsBody>
    </DocsPage>
  );
}
