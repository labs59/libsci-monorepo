'use client';

import { I18nProvider, type Locale } from '@libsci/ui';
import th from '../messages/th.json';
import en from '../messages/en.json';

export function Providers({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  return (
    <I18nProvider messages={{ th, en }} defaultLocale={locale}>
      {children}
    </I18nProvider>
  );
}
