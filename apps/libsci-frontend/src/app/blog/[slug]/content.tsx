'use client';

import Link from 'next/link';
import { useI18n } from '@libsci/ui';

export function BlogPostContent({ slug }: { slug: string }) {
  const { t } = useI18n();

  const title = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="mx-auto max-w-3xl">
      <Link
        href="/blog"
        className="mb-6 inline-block text-sm text-gray-500 hover:text-gray-900"
      >
        &larr; {t('blogPost.backToNews')}
      </Link>

      <article className="flex flex-col gap-6">
        <header>
          <span className="rounded-full bg-[#c1bdb9] px-2 py-0.5 text-sm">
            {t('blogPost.articleTag')}
          </span>
          <h1 className="mt-3 text-4xl font-medium">{title}</h1>
          <p className="mt-2 text-sm text-gray-500">
            {t('blogPost.publishedAt')} &bull; {t('blogPost.publishedBy')}
          </p>
        </header>

        <div className="flex flex-col gap-4 text-gray-600">
          <p>{t('blogPost.paragraph0')}</p>
          <p>{t('blogPost.paragraph1')}</p>
          <p>{t('blogPost.paragraph2')}</p>
        </div>
      </article>
    </div>
  );
}
