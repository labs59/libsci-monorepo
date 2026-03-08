import { PageHeader, SectionContainer } from '@libsci/ui';

const faculty = [
  { name: 'Prof. Placeholder A', role: 'Department Head', area: 'Information Management' },
  { name: 'Assoc. Prof. Placeholder B', role: 'Professor', area: 'Digital Humanities' },
  { name: 'Asst. Prof. Placeholder C', role: 'Professor', area: 'Data Curation' },
  { name: 'Dr. Placeholder D', role: 'Lecturer', area: 'Knowledge Organization' },
];

export default function AboutPage() {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-16">
        <PageHeader
          title="About Us"
          subtitle="The Department of Library Science at Chulalongkorn University has been a leading center for information studies in Thailand."
        />

        <section className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-3 text-2xl font-medium">Mission</h2>
            <p className="text-gray-600">
              To advance the study and practice of information science, library science, and data curation through innovative research, quality education, and community engagement.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-2xl font-medium">Vision</h2>
            <p className="text-gray-600">
              To be a leading academic institution in Southeast Asia for information studies, shaping the future of knowledge management and digital scholarship.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-medium">Faculty Members</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {faculty.map((f) => (
              <div key={f.name} className="rounded-2xl bg-[#f6f6f6] p-5">
                <h3 className="text-lg font-medium">{f.name}</h3>
                <p className="text-sm text-gray-500">{f.role}</p>
                <p className="mt-1 text-sm text-gray-600">Research: {f.area}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </SectionContainer>
  );
}
