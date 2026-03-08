import { PageHeader, SectionContainer, SkeletonCard } from '@libsci/ui';

const posts = [
  { slug: 'new-research-unit', title: 'New Research Unit Established', description: 'The department launches a new research unit focusing on digital information landscapes and data curation.', tag: 'Research', date: '15 Feb 2026' },
  { slug: 'conference-2026', title: 'International Conference on Information Studies 2026', description: 'Join us for the annual conference featuring keynote speakers from leading universities worldwide.', tag: 'Events', date: '10 Feb 2026' },
  { slug: 'student-awards', title: 'Students Win National Research Awards', description: 'Three graduate students recognized for outstanding research in digital preservation and knowledge organization.', tag: 'Achievement', date: '5 Feb 2026' },
  { slug: 'new-curriculum', title: 'Updated Curriculum for 2026', description: 'The department introduces new courses in AI-powered information retrieval and data analytics.', tag: 'Academic', date: '28 Jan 2026' },
  { slug: 'industry-partnership', title: 'Partnership with National Library of Thailand', description: 'A new collaboration to digitize and preserve rare manuscripts and historical documents.', tag: 'Partnership', date: '20 Jan 2026' },
  { slug: 'alumni-spotlight', title: 'Alumni Spotlight: Leading Digital Transformation', description: 'Department alumni share how their education prepared them for careers in digital transformation.', tag: 'Alumni', date: '15 Jan 2026' },
];

export default function BlogPage() {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-12">
        <PageHeader
          title="News & Announcements"
          subtitle="Stay updated with the latest news, research updates, and announcements from the Department of Library Science."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <SkeletonCard
              key={post.slug}
              title={post.title}
              description={post.description}
              tag={post.tag}
              date={post.date}
              href={`/blog/${post.slug}`}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
