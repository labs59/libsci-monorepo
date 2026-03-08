import { PageHeader, SectionContainer } from '@libsci/ui';

const curriculum = [
  { year: 'Year 1', courses: ['Introduction to Information Studies', 'Information Technology Fundamentals', 'Academic Reading and Writing'] },
  { year: 'Year 2', courses: ['Information Organization', 'Database Management', 'Research Methods in Information Studies'] },
  { year: 'Year 3', courses: ['Digital Libraries', 'Information Retrieval', 'Knowledge Management', 'Elective Courses'] },
  { year: 'Year 4', courses: ['Senior Project / Internship', 'Advanced Topics in Information Studies', 'Elective Courses'] },
];

export default function BachelorPage() {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-16">
        <PageHeader
          title="Bachelor of Arts in Information Studies"
          subtitle="A comprehensive undergraduate program preparing students for careers in information management, digital curation, and knowledge services."
        />

        <section>
          <h2 className="mb-3 text-2xl font-medium">Program Overview</h2>
          <p className="text-gray-600">
            The B.A. in Information Studies is a 4-year program designed to equip students with the knowledge and skills necessary for managing information resources in various organizational settings. The curriculum covers information organization, technology, research methods, and professional practice.
          </p>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-medium">Curriculum</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {curriculum.map((year) => (
              <div key={year.year} className="rounded-2xl bg-[#f6f6f6] p-5">
                <h3 className="mb-3 text-lg font-medium">{year.year}</h3>
                <ul className="flex flex-col gap-1.5">
                  {year.courses.map((course) => (
                    <li key={course} className="text-sm text-gray-600">
                      &bull; {course}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-medium">Admission Requirements</h2>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>&bull; High school diploma or equivalent</li>
            <li>&bull; Minimum GPA of 2.50</li>
            <li>&bull; CU-TEP or equivalent English proficiency score</li>
            <li>&bull; Pass the university entrance examination</li>
          </ul>
        </section>
      </div>
    </SectionContainer>
  );
}
