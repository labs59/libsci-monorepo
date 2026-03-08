import Link from 'next/link';
import { PageHeader, SectionContainer, SkeletonCard } from '@libsci/ui';

const reviews = [
  { title: 'IS 101 - Introduction to Information Studies', description: 'Great introductory course! The professor explains complex concepts clearly and the assignments are practical and engaging.', tag: 'Year 1', date: '1 Mar 2026' },
  { title: 'IS 201 - Information Organization', description: 'Challenging but rewarding. Learned a lot about metadata standards and classification systems. Highly recommended.', tag: 'Year 2', date: '25 Feb 2026' },
  { title: 'IS 301 - Digital Libraries', description: 'Hands-on experience with digital library systems. The group project was especially valuable for real-world skills.', tag: 'Year 3', date: '20 Feb 2026' },
  { title: 'IS 302 - Information Retrieval', description: 'Fascinating course on search algorithms and information systems. The lab sessions are very helpful.', tag: 'Year 3', date: '15 Feb 2026' },
  { title: 'IS 450 - Data Curation & Preservation', description: 'Excellent graduate-level course. Deep dive into digital preservation strategies and best practices.', tag: 'Graduate', date: '10 Feb 2026' },
];

export default function ClassReviewPage() {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-12">
        <PageHeader
          title="Class Reviews"
          subtitle="Read honest reviews from fellow students to help you choose the right courses."
        />

        <div className="flex justify-center">
          <Link
            href="#"
            className="rounded-full bg-[#341443] px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Write a Review
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <SkeletonCard
              key={i}
              title={review.title}
              description={review.description}
              tag={review.tag}
              date={review.date}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
