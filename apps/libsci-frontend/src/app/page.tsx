import Image from 'next/image';
import Link from 'next/link';
import { SectionContainer, SkeletonCard } from '@libsci/ui';

const heroData = {
  title: 'New Research Unit to Explore A New Horizon of Information Landscape',
  description: 'Expand your horizon and worldviews of information, data, and knowledge management from cultural perspectives.',
  image: '/hero-img.svg',
  link: '/about',
};

const featureLinks = [
  { title: 'About the Department', description: 'Learn about our mission, vision, and faculty members.', href: '/about', tag: 'Info' },
  { title: 'Bachelor of Arts in Information Studies', description: 'Explore the undergraduate program in information studies.', href: '/programs/bachelor', tag: 'Programs' },
  { title: 'Graduate Programs (MA/PhD)', description: 'Discover research areas and advanced study opportunities.', href: '/programs/graduate', tag: 'Programs' },
  { title: 'Class Schedule', description: 'View current class offerings and schedules.', href: '/classes', tag: 'Classes' },
  { title: 'News & Announcements', description: 'Stay updated with department news and events.', href: '/blog', tag: 'Blog' },
  { title: 'Events', description: 'Upcoming seminars, workshops, and conferences.', href: '/events', tag: 'Events' },
];

export default function Index() {
  return (
    <>
      <div className="flex w-full items-start justify-center bg-[#341443]">
        <section className="flex w-full max-w-5xl flex-col-reverse items-center justify-between gap-6 px-6 py-8 md:flex-row">
          <div className="flex w-full flex-col gap-4 md:w-2/4">
            <h1 className="text-4xl font-bold text-white">{heroData.title}</h1>
            <p className="text-white">{heroData.description}</p>
            <Link href={heroData.link} className="w-fit rounded-full bg-white px-4 py-2 font-medium text-stone-700">
              Learn More
            </Link>
          </div>
          <div className="w-2/4">
            <Image src={heroData.image} alt="Landing Image" width={400} height={263} className="w-fit" />
          </div>
        </section>
      </div>

      <SectionContainer>
        <div className="flex flex-col items-center gap-12">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-black">Explore Our Department</h2>
            <p className="mt-3 text-gray-600">Quick links to everything you need</p>
          </div>
          <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featureLinks.map((item) => (
              <SkeletonCard
                key={item.href}
                title={item.title}
                description={item.description}
                tag={item.tag}
                href={item.href}
              />
            ))}
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
