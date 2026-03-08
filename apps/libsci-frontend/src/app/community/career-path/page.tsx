import Link from 'next/link';
import { PageHeader, SectionContainer, SkeletonCard } from '@libsci/ui';

const stories = [
  { title: 'From LibSci to Data Analyst at a Tech Startup', description: 'How my information studies background gave me a unique edge in the world of data analytics and business intelligence.', tag: 'Tech', date: '5 Mar 2026' },
  { title: 'Building a Career in Digital Preservation', description: 'My journey from student to digital archivist at the National Library, preserving Thailand\'s cultural heritage.', tag: 'Archives', date: '28 Feb 2026' },
  { title: 'Academic Path: From BA to PhD', description: 'Pursuing research in knowledge organization and becoming a faculty member at a leading university.', tag: 'Academic', date: '20 Feb 2026' },
  { title: 'UX Research & Information Architecture', description: 'Applying information science principles to user experience design in the digital product industry.', tag: 'Design', date: '15 Feb 2026' },
];

export default function CareerPathPage() {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-12">
        <PageHeader
          title="Career Path Stories"
          subtitle="Discover how our alumni have built successful careers across diverse industries with their information studies background."
        />

        <div className="flex justify-center">
          <Link
            href="#"
            className="rounded-full bg-[#341443] px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Share Your Story
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {stories.map((story, i) => (
            <SkeletonCard
              key={i}
              title={story.title}
              description={story.description}
              tag={story.tag}
              date={story.date}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
