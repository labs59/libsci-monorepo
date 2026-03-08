'use client';

import { PageHeader, SectionContainer, useI18n } from '@libsci/ui';

export default function BachelorPage() {
  const { t } = useI18n();

  const curriculum = [
    { yearKey: 'year1', courseCount: 3 },
    { yearKey: 'year2', courseCount: 3 },
    { yearKey: 'year3', courseCount: 4 },
    { yearKey: 'year4', courseCount: 3 },
  ];

  const admissionReqs = [0, 1, 2, 3];

  return (
    <SectionContainer>
      <div className="flex flex-col gap-16">
        <PageHeader
          title={t('bachelor.title')}
          subtitle={t('bachelor.subtitle')}
        />

        <section>
          <h2 className="mb-3 text-2xl font-medium">
            {t('bachelor.overview')}
          </h2>
          <p className="text-gray-600">{t('bachelor.overviewText')}</p>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-medium">
            {t('bachelor.curriculum')}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {curriculum.map(({ yearKey, courseCount }) => (
              <div key={yearKey} className="rounded-2xl bg-[#f6f6f6] p-5">
                <h3 className="mb-3 text-lg font-medium">
                  {t(`bachelor.${yearKey}`)}
                </h3>
                <ul className="flex flex-col gap-1.5">
                  {Array.from({ length: courseCount }, (_, i) => (
                    <li key={i} className="text-sm text-gray-600">
                      &bull; {t(`bachelor.${yearKey}Course${i}`)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-medium">
            {t('bachelor.admission')}
          </h2>
          <ul className="flex flex-col gap-2 text-gray-600">
            {admissionReqs.map((i) => (
              <li key={i}>&bull; {t(`bachelor.admissionReq${i}`)}</li>
            ))}
          </ul>
        </section>
      </div>
    </SectionContainer>
  );
}
