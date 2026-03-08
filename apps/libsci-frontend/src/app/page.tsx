'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SectionContainer, SkeletonCard, useI18n } from '@libsci/ui';

export default function Index() {
  const { t } = useI18n();

  const featureLinks = [
    {
      titleKey: 'features.aboutTitle',
      descriptionKey: 'features.aboutDescription',
      tagKey: 'features.aboutTag',
      href: '/about',
    },
    {
      titleKey: 'features.bachelorTitle',
      descriptionKey: 'features.bachelorDescription',
      tagKey: 'features.bachelorTag',
      href: '/programs/bachelor',
    },
    {
      titleKey: 'features.graduateTitle',
      descriptionKey: 'features.graduateDescription',
      tagKey: 'features.graduateTag',
      href: '/programs/graduate',
    },
    {
      titleKey: 'features.classesTitle',
      descriptionKey: 'features.classesDescription',
      tagKey: 'features.classesTag',
      href: '/classes',
    },
    {
      titleKey: 'features.newsTitle',
      descriptionKey: 'features.newsDescription',
      tagKey: 'features.newsTag',
      href: '/blog',
    },
    {
      titleKey: 'features.eventsTitle',
      descriptionKey: 'features.eventsDescription',
      tagKey: 'features.eventsTag',
      href: '/events',
    },
  ];

  return (
    <>
      <div className="flex w-full items-start justify-center bg-[#341443]">
        <section className="flex w-full max-w-5xl flex-col-reverse items-center justify-between gap-6 px-6 py-8 md:flex-row">
          <div className="flex w-full flex-col gap-4 md:w-2/4">
            <h1 className="text-4xl font-bold text-white">
              {t('hero.title')}
            </h1>
            <p className="text-white">{t('hero.description')}</p>
            <Link
              href="/about"
              className="w-fit rounded-full bg-white px-4 py-2 font-medium text-stone-700"
            >
              {t('hero.learnMore')}
            </Link>
          </div>
          <div className="w-2/4">
            <Image
              src="/hero-img.svg"
              alt="Landing Image"
              width={400}
              height={263}
              className="w-fit"
            />
          </div>
        </section>
      </div>

      <SectionContainer>
        <div className="flex flex-col items-center gap-12">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-black">
              {t('explore.title')}
            </h2>
            <p className="mt-3 text-gray-600">{t('explore.subtitle')}</p>
          </div>
          <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featureLinks.map((item) => (
              <SkeletonCard
                key={item.href}
                title={t(item.titleKey)}
                description={t(item.descriptionKey)}
                tag={t(item.tagKey)}
                href={item.href}
              />
            ))}
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
