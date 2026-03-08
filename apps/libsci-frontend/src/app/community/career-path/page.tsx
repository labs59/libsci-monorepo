'use client';

import Link from 'next/link';
import { PageHeader, SectionContainer, SkeletonCard, useI18n } from '@libsci/ui';

export default function CareerPathPage() {
  const { t } = useI18n();

  const stories = [0, 1, 2, 3].map((i) => ({
    title: t(`careerPath.story${i}Title`),
    description: t(`careerPath.story${i}Desc`),
    tag: t(`careerPath.story${i}Tag`),
    date: t(`careerPath.story${i}Date`),
  }));

  return (
    <SectionContainer>
      <div className="flex flex-col gap-12">
        <PageHeader
          title={t('careerPath.title')}
          subtitle={t('careerPath.subtitle')}
        />

        <div className="flex justify-center">
          <Link
            href="#"
            className="rounded-full bg-[#341443] px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            {t('careerPath.shareStory')}
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {stories.map((story, i) => (
            <SkeletonCard
              key={i}
              title={story.title}
              description={story.description}
              tag={story.tag}
              date={story.date}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
