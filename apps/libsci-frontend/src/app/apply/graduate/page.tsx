import { PageHeader, SectionContainer, FormSkeleton } from '@libsci/ui';

const formSections = [
  {
    heading: 'Personal Information',
    fields: [
      { label: 'Full Name (Thai)', type: 'text' as const },
      { label: 'Full Name (English)', type: 'text' as const },
      { label: 'Email Address', type: 'email' as const },
      { label: 'Phone Number', type: 'tel' as const },
    ],
  },
  {
    heading: 'Educational Background',
    fields: [
      { label: 'Previous Degree', type: 'select' as const },
      { label: 'University / Institution', type: 'text' as const },
      { label: 'Field of Study', type: 'text' as const },
      { label: 'GPA', type: 'text' as const },
    ],
  },
  {
    heading: 'Research Interest',
    fields: [
      { label: 'Preferred Program', type: 'select' as const },
      { label: 'Research Area of Interest', type: 'text' as const },
      { label: 'Research Proposal Summary', type: 'textarea' as const },
    ],
  },
];

export default function GraduateApplyPage() {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-12">
        <PageHeader
          title="Graduate Admission"
          subtitle="Apply for admission to our Master's or PhD program in Information Studies."
        />
        <FormSkeleton title="Application Form" sections={formSections} />
      </div>
    </SectionContainer>
  );
}
