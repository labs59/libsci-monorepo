'use client';

import { PageHeader, SectionContainer, FormSkeleton, useI18n } from '@libsci/ui';

const sectionDefs = [
  { key: 'section0', fieldCount: 4, fieldTypes: ['text', 'email', 'tel', 'text'] as const },
  { key: 'section1', fieldCount: 2, fieldTypes: ['select', 'textarea'] as const },
];

export default function EventRegisterPage() {
  const { t } = useI18n();

  const formSections = sectionDefs.map(({ key, fieldCount, fieldTypes }) => ({
    heading: t(`eventRegister.${key}Heading`),
    fields: Array.from({ length: fieldCount }, (_, i) => ({
      label: t(`eventRegister.${key}Field${i}`),
      type: fieldTypes[i],
    })),
  }));

  return (
    <SectionContainer>
      <div className="flex flex-col gap-12">
        <PageHeader
          title={t('eventRegister.title')}
          subtitle={t('eventRegister.subtitle')}
        />
        <FormSkeleton
          title={t('eventRegister.formTitle')}
          sections={formSections}
        />
      </div>
    </SectionContainer>
  );
}
