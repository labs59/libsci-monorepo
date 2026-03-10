'use client';

import { FullPageStepper } from '@libsci/ui';
import type { StepperStep } from '@libsci/ui';

const freshmenSteps: StepperStep[] = [
  {
    label: 'ยินดีต้อนรับ',
    content: (
      <div className="flex min-h-[calc(100vh-12rem)] items-center justify-center">
        <p className="text-gray-400">Welcome content</p>
      </div>
    ),
  },
  {
    label: 'รู้จักภาควิชา',
    content: (
      <div className="flex min-h-[calc(100vh-12rem)] items-center justify-center">
        <p className="text-gray-400">About content</p>
      </div>
    ),
  },
  {
    label: 'หลักสูตร',
    content: (
      <div className="flex min-h-[calc(100vh-12rem)] items-center justify-center">
        <p className="text-gray-400">Curriculum content</p>
      </div>
    ),
  },
  {
    label: 'ชีวิตนิสิต',
    content: (
      <div className="flex min-h-[calc(100vh-12rem)] items-center justify-center">
        <p className="text-gray-400">Student life content</p>
      </div>
    ),
  },
  {
    label: 'เริ่มต้น',
    content: (
      <div className="flex min-h-[calc(100vh-12rem)] items-center justify-center">
        <p className="text-gray-400">Get started content</p>
      </div>
    ),
  },
];

export default function FreshmenPage() {
  return (
    <FullPageStepper
      steps={freshmenSteps}
      nextLabel="ถัดไป"
      prevLabel="ย้อนกลับ"
      completeLabel="เสร็จสิ้น"
      onComplete={() => {
        window.location.href = '/';
      }}
    />
  );
}
