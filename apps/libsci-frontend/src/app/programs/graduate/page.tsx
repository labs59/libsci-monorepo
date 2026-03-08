'use client';

import { PageHeader, SectionContainer, useI18n } from '@libsci/ui';

export default function GraduatePage() {
  const { t } = useI18n();

  const researchAreas = [0, 1, 2, 3].map((i) => ({
    title: t(`graduateProg.research${i}Title`),
    description: t(`graduateProg.research${i}Desc`),
  }));

  const admissionReqs = [0, 1, 2, 3, 4];

  return (
    <SectionContainer>
      <div className="flex flex-col gap-16">
        <PageHeader
          title={t('graduateProg.title')}
          subtitle={t('graduateProg.subtitle')}
        />

        <section>
          <h2 className="mb-3 text-2xl font-medium">
            {t('graduateProg.overview')}
          </h2>
          <p className="text-gray-600">{t('graduateProg.overviewText')}</p>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-medium">
            {t('graduateProg.researchAreas')}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {researchAreas.map((area) => (
              <div key={area.title} className="rounded-2xl bg-[#f6f6f6] p-5">
                <h3 className="mb-2 text-lg font-medium">{area.title}</h3>
                <p className="text-sm text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-medium">
            {t('graduateProg.admission')}
          </h2>
          <ul className="flex flex-col gap-2 text-gray-600">
            {admissionReqs.map((i) => (
              <li key={i}>&bull; {t(`graduateProg.admissionReq${i}`)}</li>
            ))}
          </ul>
        </section>
      </div>
    </SectionContainer>
  );
}
