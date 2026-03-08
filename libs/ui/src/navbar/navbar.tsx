'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useI18n } from '../i18n/provider';

interface NavItem {
  labelKey: string;
  href: string;
  children?: { labelKey: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    labelKey: 'nav.department',
    href: '/about',
    children: [
      { labelKey: 'nav.about', href: '/about' },
      { labelKey: 'nav.news', href: '/blog' },
      { labelKey: 'nav.events', href: '/events' },
    ],
  },
  {
    labelKey: 'nav.programs',
    href: '/programs/bachelor',
    children: [
      { labelKey: 'nav.bachelor', href: '/programs/bachelor' },
      { labelKey: 'nav.graduate', href: '/programs/graduate' },
      { labelKey: 'nav.classes', href: '/classes' },
    ],
  },
  { labelKey: 'nav.research', href: '/research' },
  { labelKey: 'nav.people', href: '/people' },
];

function ChevronDown() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19 9-7 7-7-7"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
      />
    </svg>
  );
}

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const { t } = useI18n();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  if (!item.children) {
    return (
      <li>
        <Link
          href={item.href}
          className="py-1.5 text-base font-medium text-black transition-colors hover:text-[#702b91]"
        >
          {t(item.labelKey)}
        </Link>
      </li>
    );
  }

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 py-1.5 text-base font-medium text-black transition-colors hover:text-[#702b91]"
      >
        {t(item.labelKey)}
        <ChevronDown />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 pt-1">
          <ul className="min-w-[200px] rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
            {item.children.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#702b91]"
                  onClick={() => setOpen(false)}
                >
                  {t(child.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, locale, setLocale } = useI18n();

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between px-6 py-3 lg:px-12">
        {/* Left: Department name + nav links */}
        <div className="flex items-center gap-6">
          <Link href="/" className="shrink-0">
            <div className="border-l-4 border-[#702b91] px-4 py-1">
              <p className="text-lg font-bold leading-snug text-black">
                {t('nav.departmentName')}
              </p>
              <p className="text-sm leading-tight text-black">
                {t('nav.departmentFaculty')}
              </p>
            </div>
          </Link>

          <ul className="hidden items-center gap-6 px-4 lg:flex">
            {navItems.map((item) => (
              <DesktopDropdown key={item.labelKey} item={item} />
            ))}
          </ul>
        </div>

        {/* Right: Search, language, apply */}
        <div className="hidden items-center gap-2 lg:flex">
          <button className="flex items-center gap-1.5 rounded-full bg-[#f7f7f7] px-3 py-1.5 text-sm font-medium text-black">
            <SearchIcon />
            {t('nav.search')}
          </button>
          <button
            onClick={() => setLocale(locale === 'th' ? 'en' : 'th')}
            className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-black transition-colors hover:bg-gray-100"
          >
            <GlobeIcon />
            {t('nav.language')}
          </button>
          <Link
            href="/apply"
            className="rounded-full bg-[#702b91] px-3 py-1.5 text-sm font-medium text-[#f7f7f7] transition-colors hover:bg-[#5a2275]"
          >
            {t('nav.apply')}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gray-200 lg:hidden">
          <ul className="space-y-1 px-4 py-3">
            {navItems.map((item) => (
              <li key={item.labelKey}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-[#702b91]"
                  onClick={() => setMobileOpen(false)}
                >
                  {t(item.labelKey)}
                </Link>
                {item.children && (
                  <ul className="ml-4">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-[#702b91]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {t(child.labelKey)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 border-t border-gray-200 px-4 py-3">
            <button
              onClick={() => setLocale(locale === 'th' ? 'en' : 'th')}
              className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-black hover:bg-gray-100"
            >
              <GlobeIcon />
              {t('nav.language')}
            </button>
            <Link
              href="/apply"
              className="rounded-full bg-[#702b91] px-3 py-1.5 text-center text-sm font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              {t('nav.apply')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
