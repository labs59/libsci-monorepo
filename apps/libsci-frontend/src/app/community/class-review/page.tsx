'use client';

import Link from 'next/link';
import { PageHeader, SectionContainer, SkeletonCard, useI18n } from '@libsci/ui';

export default function ClassReviewPage() {
  const { t } = useI18n();

  const reviews = [0, 1, 2, 3, 4].map((i) => ({
    title: t(`classReview.review${i}Title`),
    description: t(`classReview.review${i}Desc`),
    tag: t(`classReview.review${i}Tag`),
    date: t(`classReview.review${i}Date`),
  }));

  return (
    <SectionContainer>
      <div className="flex flex-col gap-12">
        <PageHeader
          title={t('classReview.title')}
          subtitle={t('classReview.subtitle')}
        />

        <div className="flex justify-center">
          <Link
            href="#"
            className="rounded-full bg-[#341443] px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            {t('classReview.writeReview')}
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <SkeletonCard
              key={i}
              title={review.title}
              description={review.description}
              tag={review.tag}
              date={review.date}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
