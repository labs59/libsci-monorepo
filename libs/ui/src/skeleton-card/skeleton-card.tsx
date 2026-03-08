import Link from 'next/link';

export interface SkeletonCardProps {
  title: string;
  description: string;
  tag?: string;
  date?: string;
  href?: string;
}

export function SkeletonCard({ title, description, tag, date, href }: SkeletonCardProps) {
  const card = (
    <div className="flex flex-col gap-4 rounded-2xl bg-[#f6f6f6] p-4">
      {tag && (
        <span className="w-fit rounded-full bg-[#c1bdb9] px-2 py-0.5 text-sm text-black">
          {tag}
        </span>
      )}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-medium text-black">{title}</h3>
        <p className="line-clamp-3 text-sm text-black">{description}</p>
      </div>
      <div className="flex items-center justify-between">
        {date && (
          <span className="text-sm text-black">Latest Update: {date}</span>
        )}
        <svg
          className="ml-auto h-7 w-7 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
        </svg>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="transition-opacity hover:opacity-80">
        {card}
      </Link>
    );
  }

  return card;
}
