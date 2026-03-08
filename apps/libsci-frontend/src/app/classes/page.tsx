import { PageHeader, SectionContainer } from '@libsci/ui';

const classes = [
  { code: 'IS 101', name: 'Introduction to Information Studies', instructor: 'Prof. Placeholder A', schedule: 'Mon/Wed 9:00-10:30', seats: '40/50' },
  { code: 'IS 201', name: 'Information Organization', instructor: 'Assoc. Prof. Placeholder B', schedule: 'Tue/Thu 13:00-14:30', seats: '35/40' },
  { code: 'IS 301', name: 'Digital Libraries', instructor: 'Asst. Prof. Placeholder C', schedule: 'Mon/Wed 13:00-14:30', seats: '28/35' },
  { code: 'IS 302', name: 'Information Retrieval', instructor: 'Dr. Placeholder D', schedule: 'Tue/Thu 9:00-10:30', seats: '30/35' },
  { code: 'IS 401', name: 'Senior Project Seminar', instructor: 'Prof. Placeholder A', schedule: 'Fri 9:00-12:00', seats: '15/20' },
  { code: 'IS 450', name: 'Data Curation & Preservation', instructor: 'Assoc. Prof. Placeholder B', schedule: 'Wed 13:00-16:00', seats: '22/30' },
];

export default function ClassesPage() {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-12">
        <PageHeader
          title="หลักสูตรที่เปิดสอน"
          subtitle="Your home for building AI skills and more. Get hands on with Google Skills Labs, dive into in-depth courses, and learn directly from the experts."
        />

        <div className="flex justify-center">
          <div className="flex w-full max-w-md items-center justify-between rounded-full bg-[#f6f6f6] px-6 py-2">
            <span className="text-base text-[#414141]">ค้นหารายวิชา</span>
            <svg className="h-5 w-5 text-[#414141]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="8" />
              <path strokeLinecap="round" d="m21 21-4.35-4.35" />
            </svg>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="pb-3 pr-4 font-medium text-gray-500">Code</th>
                <th className="pb-3 pr-4 font-medium text-gray-500">Course Name</th>
                <th className="pb-3 pr-4 font-medium text-gray-500">Instructor</th>
                <th className="pb-3 pr-4 font-medium text-gray-500">Schedule</th>
                <th className="pb-3 font-medium text-gray-500">Seats</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((cls) => (
                <tr key={cls.code} className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium">{cls.code}</td>
                  <td className="py-3 pr-4">{cls.name}</td>
                  <td className="py-3 pr-4 text-gray-600">{cls.instructor}</td>
                  <td className="py-3 pr-4 text-gray-600">{cls.schedule}</td>
                  <td className="py-3 text-gray-600">{cls.seats}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SectionContainer>
  );
}
