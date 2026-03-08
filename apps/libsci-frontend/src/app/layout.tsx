import './global.css';
import { cookies } from 'next/headers';
import { Navbar, Footer } from '@libsci/ui';
import type { Locale } from '@libsci/ui';
import { Providers } from './providers';

export const metadata = {
  title: 'ภาควิชาบรรณารักษศาสตร์ | LibSci',
  description:
    'ภาควิชาบรรณารักษศาสตร์ คณะอักษรศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const stored = cookieStore.get('NEXT_LOCALE')?.value;
  const locale: Locale = stored === 'en' ? 'en' : 'th';

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&family=Noto+Sans+Thai:wght@100..900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="flex min-h-screen flex-col">
        <Providers locale={locale}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
