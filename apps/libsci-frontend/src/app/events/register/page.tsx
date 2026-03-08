import { PageHeader, SectionContainer, FormSkeleton } from '@libsci/ui';

const formSections = [
  {
    heading: 'Participant Information',
    fields: [
      { label: 'Full Name', type: 'text' as const },
      { label: 'Email Address', type: 'email' as const },
      { label: 'Phone Number', type: 'tel' as const },
      { label: 'Affiliation / Organization', type: 'text' as const },
    ],
  },
  {
    heading: 'Event Selection',
    fields: [
      { label: 'Select Event', type: 'select' as const },
      { label: 'Dietary Requirements / Special Needs', type: 'textarea' as const },
    ],
  },
];

export default function EventRegisterPage() {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-12">
        <PageHeader
          title="Event Registration"
          subtitle="Register for upcoming department events, workshops, and conferences."
        />
        <FormSkeleton title="Registration Form" sections={formSections} />
      </div>
    </SectionContainer>
  );
}
