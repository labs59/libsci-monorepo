'use client';

import { PageHeader, SectionContainer, useI18n } from '@libsci/ui';

const classCodes = ['IS 101', 'IS 201', 'IS 301', 'IS 302', 'IS 401', 'IS 450'];
const classSeats = ['40/50', '35/40', '28/35', '30/35', '15/20', '22/30'];

export default function ClassesPage() {
  const { t } = useI18n();

  const classes = classCodes.map((code, i) => ({
    code,
    name: t(`classes.class${i}Name`),
    instructor: t(`classes.class${i}Instructor`),
    schedule: t(`classes.class${i}Schedule`),
    seats: classSeats[i],
  }));

  return (
    <SectionContainer>
      <div className="flex flex-col gap-12">
        <PageHeader
          title={t('classes.title')}
          subtitle={t('classes.subtitle')}
        />

        <div className="flex justify-center">
          <div className="flex w-full max-w-md items-center justify-between rounded-full bg-[#f6f6f6] px-6 py-2">
            <span className="text-base text-[#414141]">
              {t('classes.searchPlaceholder')}
            </span>
            <svg
              className="h-5 w-5 text-[#414141]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx="11" cy="11" r="8" />
              <path strokeLinecap="round" d="m21 21-4.35-4.35" />
            </svg>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="pb-3 pr-4 font-medium text-gray-500">
                  {t('classes.colCode')}
                </th>
                <th className="pb-3 pr-4 font-medium text-gray-500">
                  {t('classes.colName')}
                </th>
                <th className="pb-3 pr-4 font-medium text-gray-500">
                  {t('classes.colInstructor')}
                </th>
                <th className="pb-3 pr-4 font-medium text-gray-500">
                  {t('classes.colSchedule')}
                </th>
                <th className="pb-3 font-medium text-gray-500">
                  {t('classes.colSeats')}
                </th>
              </tr>
            </thead>
            <tbody>
              {classes.map((cls) => (
                <tr key={cls.code} className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium">{cls.code}</td>
                  <td className="py-3 pr-4">{cls.name}</td>
                  <td className="py-3 pr-4 text-gray-600">{cls.instructor}</td>
                  <td className="py-3 pr-4 text-gray-600">{cls.schedule}</td>
                  <td className="py-3 text-gray-600">{cls.seats}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SectionContainer>
  );
}
