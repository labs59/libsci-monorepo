import { PageHeader, SectionContainer } from '@libsci/ui';

const researchAreas = [
  { title: 'Data Curation & Preservation', description: 'Long-term management, preservation, and accessibility of digital and physical data collections.' },
  { title: 'Digital Humanities', description: 'Applying computational methods to humanities research, including text mining and digital archives.' },
  { title: 'Information Behavior', description: 'Understanding how people seek, use, and share information in various contexts.' },
  { title: 'Knowledge Organization', description: 'Classification systems, metadata standards, and ontologies for organizing information.' },
];

export default function GraduatePage() {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-16">
        <PageHeader
          title="Graduate Programs (MA/PhD)"
          subtitle="Advanced study and research opportunities in information studies, data curation, and related fields."
        />

        <section>
          <h2 className="mb-3 text-2xl font-medium">Program Overview</h2>
          <p className="text-gray-600">
            Our graduate programs offer in-depth study of information science, preparing students for leadership roles in academic, government, and private sector institutions. The MA program focuses on professional practice and applied research, while the PhD program emphasizes original scholarly contributions.
          </p>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-medium">Research Areas</h2>
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
          <h2 className="mb-3 text-2xl font-medium">Admission</h2>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>&bull; Bachelor's degree (MA) or Master's degree (PhD) in a relevant field</li>
            <li>&bull; Minimum GPA of 3.00</li>
            <li>&bull; English proficiency (CU-TEP 80+ or IELTS 6.0+)</li>
            <li>&bull; Research proposal (PhD applicants)</li>
            <li>&bull; Two letters of recommendation</li>
          </ul>
        </section>
      </div>
    </SectionContainer>
  );
}
