'use client';

import { PageHeader, SectionContainer, useI18n } from '@libsci/ui';

export default function AboutPage() {
  const { t } = useI18n();

  const faculty = [0, 1, 2, 3].map((i) => ({
    name: t(`about.faculty${i}Name`),
    role: t(`about.faculty${i}Role`),
    area: t(`about.faculty${i}Area`),
  }));

  return (
    <SectionContainer>
      <div className="flex flex-col gap-16">
        <PageHeader title={t('about.title')} subtitle={t('about.subtitle')} />

        <section className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-3 text-2xl font-medium">{t('about.mission')}</h2>
            <p className="text-gray-600">{t('about.missionText')}</p>
          </div>
          <div>
            <h2 className="mb-3 text-2xl font-medium">{t('about.vision')}</h2>
            <p className="text-gray-600">{t('about.visionText')}</p>
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-medium">{t('about.faculty')}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {faculty.map((f) => (
              <div key={f.name} className="rounded-2xl bg-[#f6f6f6] p-5">
                <h3 className="text-lg font-medium">{f.name}</h3>
                <p className="text-sm text-gray-500">{f.role}</p>
                <p className="mt-1 text-sm text-gray-600">
                  {t('about.researchArea')}: {f.area}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </SectionContainer>
  );
}
