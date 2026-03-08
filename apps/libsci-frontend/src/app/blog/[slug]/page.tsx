import Link from 'next/link';
import { SectionContainer } from '@libsci/ui';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const title = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <SectionContainer>
      <div className="mx-auto max-w-3xl">
        <Link href="/blog" className="mb-6 inline-block text-sm text-gray-500 hover:text-gray-900">
          &larr; Back to News
        </Link>

        <article className="flex flex-col gap-6">
          <header>
            <span className="rounded-full bg-[#c1bdb9] px-2 py-0.5 text-sm">Article</span>
            <h1 className="mt-3 text-4xl font-medium">{title}</h1>
            <p className="mt-2 text-sm text-gray-500">Published on 15 Feb 2026 &bull; Department of Library Science</p>
          </header>

          <div className="flex flex-col gap-4 text-gray-600">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </article>
      </div>
    </SectionContainer>
  );
}
