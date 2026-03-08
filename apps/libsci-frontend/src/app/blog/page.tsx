'use client';

import { PageHeader, SectionContainer, SkeletonCard, useI18n } from '@libsci/ui';

const postSlugs = [
  'new-research-unit',
  'conference-2026',
  'student-awards',
  'new-curriculum',
  'industry-partnership',
  'alumni-spotlight',
];

export default function BlogPage() {
  const { t } = useI18n();

  const posts = postSlugs.map((slug, i) => ({
    slug,
    title: t(`blog.post${i}Title`),
    description: t(`blog.post${i}Desc`),
    tag: t(`blog.post${i}Tag`),
    date: t(`blog.post${i}Date`),
  }));

  return (
    <SectionContainer>
      <div className="flex flex-col gap-12">
        <PageHeader title={t('blog.title')} subtitle={t('blog.subtitle')} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <SkeletonCard
              key={post.slug}
              title={post.title}
              description={post.description}
              tag={post.tag}
              date={post.date}
              href={`/blog/${post.slug}`}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
