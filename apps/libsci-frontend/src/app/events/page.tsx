import Link from 'next/link';
import { PageHeader, SectionContainer } from '@libsci/ui';

const events = [
  { title: 'International Conference on Information Studies 2026', date: '15-17 Apr 2026', location: 'Maha Chakri Sirindhorn Building', description: 'Annual conference featuring keynote speakers from leading universities worldwide.' },
  { title: 'Workshop: AI in Information Retrieval', date: '25 Mar 2026', location: 'Room 401, Faculty of Arts', description: 'Hands-on workshop exploring the latest AI techniques in search and information retrieval.' },
  { title: 'Guest Lecture: Future of Digital Libraries', date: '20 Mar 2026', location: 'Auditorium, Faculty of Arts', description: 'Distinguished lecture by a visiting professor from the University of Michigan.' },
  { title: 'Student Research Symposium', date: '10 Mar 2026', location: 'Conference Hall, Faculty of Arts', description: 'Graduate and undergraduate students present their research projects and findings.' },
];

export default function EventsPage() {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-12">
        <PageHeader
          title="Events"
          subtitle="Upcoming seminars, workshops, conferences, and other events from the Department of Library Science."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {events.map((event, i) => (
            <div key={i} className="flex flex-col gap-3 rounded-2xl bg-[#f6f6f6] p-5">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#341443] px-3 py-0.5 text-xs font-medium text-white">
                  {event.date}
                </span>
              </div>
              <h3 className="text-xl font-medium">{event.title}</h3>
              <p className="text-sm text-gray-600">{event.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{event.location}</span>
                <Link
                  href="/events/register"
                  className="text-sm font-medium text-[#341443] hover:underline"
                >
                  Register &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
