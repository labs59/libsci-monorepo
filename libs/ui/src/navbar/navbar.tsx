'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Programs',
    href: '/programs/bachelor',
    children: [
      { label: 'Bachelor', href: '/programs/bachelor' },
      { label: 'Graduate', href: '/programs/graduate' },
    ],
  },
  { label: 'Classes', href: '/classes' },
  { label: 'Blog', href: '/blog' },
  {
    label: 'Community',
    href: '/community/class-review',
    children: [
      { label: 'Class Review', href: '/community/class-review' },
      { label: 'Career Path', href: '/community/career-path' },
    ],
  },
  {
    label: 'Apply & Register',
    href: '/apply/graduate',
    children: [
      { label: 'Graduate Admission', href: '/apply/graduate' },
      { label: 'Event Registration', href: '/events/register' },
    ],
  },
];

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  if (!item.children) {
    return (
      <li>
        <Link
          href={item.href}
          className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
        >
          {item.label}
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
        className="flex items-center gap-1 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
      >
        {item.label}
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 pt-1">
          <ul className="min-w-[200px] rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
            {item.children.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  onClick={() => setOpen(false)}
                >
                  {child.label}
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

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
          <Image src="/logo.svg" alt="Logo" width={189} height={48} className="inline-block mr-2" />
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <DesktopDropdown key={item.label} item={item} />
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-gray-200 md:hidden">
          <ul className="space-y-1 px-4 py-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="ml-4">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
