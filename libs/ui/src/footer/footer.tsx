'use client';

import Link from 'next/link';
import { useI18n } from '../i18n/provider';

export function Footer() {
  const { t } = useI18n();

  const quickLinks = [
    { labelKey: 'footer.about', href: '/about' },
    { labelKey: 'footer.programs', href: '/programs/bachelor' },
    { labelKey: 'footer.classes', href: '/classes' },
    { labelKey: 'footer.blog', href: '/blog' },
    { labelKey: 'footer.events', href: '/events' },
  ];

  const communityLinks = [
    { labelKey: 'footer.classReview', href: '/community/class-review' },
    { labelKey: 'footer.careerPath', href: '/community/career-path' },
    { labelKey: 'footer.graduateAdmission', href: '/apply/graduate' },
  ];

  return (
    <footer className="bg-[#1e0a28] text-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-medium">
              {t('footer.departmentName')}
            </h3>
            <p className="whitespace-pre-line text-sm text-gray-300">
              {t('footer.address')}
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-medium uppercase tracking-wider text-gray-400">
              {t('footer.quickLinks')}
            </h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-medium uppercase tracking-wider text-gray-400">
              {t('footer.community')}
            </h4>
            <ul className="flex flex-col gap-2">
              {communityLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
}
