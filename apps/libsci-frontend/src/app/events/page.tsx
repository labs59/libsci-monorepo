'use client';

import Link from 'next/link';
import { PageHeader, SectionContainer, useI18n } from '@libsci/ui';

export default function EventsPage() {
  const { t } = useI18n();

  const events = [0, 1, 2, 3].map((i) => ({
    title: t(`events.event${i}Title`),
    date: t(`events.event${i}Date`),
    location: t(`events.event${i}Location`),
    description: t(`events.event${i}Desc`),
  }));

  return (
    <SectionContainer>
      <div className="flex flex-col gap-12">
        <PageHeader
          title={t('events.title')}
          subtitle={t('events.subtitle')}
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {events.map((event, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 rounded-2xl bg-[#f6f6f6] p-5"
            >
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
                  {t('events.register')} &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
