'use client';

import { PageHeader, SectionContainer, FormSkeleton, useI18n } from '@libsci/ui';

const sectionDefs = [
  { key: 'section0', fieldCount: 4, fieldTypes: ['text', 'text', 'email', 'tel'] as const },
  { key: 'section1', fieldCount: 4, fieldTypes: ['select', 'text', 'text', 'text'] as const },
  { key: 'section2', fieldCount: 3, fieldTypes: ['select', 'text', 'textarea'] as const },
];

export default function GraduateApplyPage() {
  const { t } = useI18n();

  const formSections = sectionDefs.map(({ key, fieldCount, fieldTypes }) => ({
    heading: t(`applyGraduate.${key}Heading`),
    fields: Array.from({ length: fieldCount }, (_, i) => ({
      label: t(`applyGraduate.${key}Field${i}`),
      type: fieldTypes[i],
    })),
  }));

  return (
    <SectionContainer>
      <div className="flex flex-col gap-12">
        <PageHeader
          title={t('applyGraduate.title')}
          subtitle={t('applyGraduate.subtitle')}
        />
        <FormSkeleton
          title={t('applyGraduate.formTitle')}
          sections={formSections}
        />
      </div>
    </SectionContainer>
  );
}
