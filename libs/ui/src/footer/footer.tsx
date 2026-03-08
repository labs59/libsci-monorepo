import Link from 'next/link';

const quickLinks = [
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs/bachelor' },
  { label: 'Classes', href: '/classes' },
  { label: 'Blog', href: '/blog' },
  { label: 'Events', href: '/events' },
];

const communityLinks = [
  { label: 'Class Review', href: '/community/class-review' },
  { label: 'Career Path', href: '/community/career-path' },
  { label: 'Graduate Admission', href: '/apply/graduate' },
];

export function Footer() {
  return (
    <footer className="bg-[#1e0a28] text-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-medium">
              Department of Library Science
            </h3>
            <p className="text-sm text-gray-300">
              Faculty of Arts, Chulalongkorn University
              <br />
              254 Phaya Thai Road, Wang Mai, Pathum Wan
              <br />
              Bangkok 10330, Thailand
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-medium uppercase tracking-wider text-gray-400">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-medium uppercase tracking-wider text-gray-400">
              Community
            </h4>
            <ul className="flex flex-col gap-2">
              {communityLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Department of Library Science, Faculty of Arts, Chulalongkorn University
        </div>
      </div>
    </footer>
  );
}
