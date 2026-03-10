'use client';

import { useState, useCallback } from 'react';

export interface StepperStep {
  label: string;
  content: React.ReactNode;
}

export interface FullPageStepperProps {
  steps: StepperStep[];
  onComplete?: () => void;
  completeLabel?: string;
  nextLabel?: string;
  prevLabel?: string;
}

function ArrowLeft() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function FullPageStepper({
  steps,
  onComplete,
  completeLabel = 'เสร็จสิ้น',
  nextLabel = 'ถัดไป',
  prevLabel = 'ย้อนกลับ',
}: FullPageStepperProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [phase, setPhase] = useState<'idle' | 'exiting' | 'entering'>('idle');

  const goToStep = useCallback(
    (step: number) => {
      if (step < 0 || step >= steps.length || phase !== 'idle') return;
      setDirection(step > currentStep ? 'forward' : 'backward');
      setPhase('exiting');

      setTimeout(() => {
        setCurrentStep(step);
        setPhase('entering');

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setPhase('idle');
          });
        });
      }, 250);
    },
    [currentStep, steps.length, phase]
  );

  const goNext = () => {
    if (currentStep === steps.length - 1) {
      onComplete?.();
    } else {
      goToStep(currentStep + 1);
    }
  };

  const goPrev = () => goToStep(currentStep - 1);

  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col">
      {/* ── Stories-style progress bars ── */}
      <div className="sticky top-16 z-40 bg-white">
        <div className="px-3 pt-3 pb-2">
          {/* Segmented progress bars */}
          <div className="flex gap-1">
            {steps.map((step, index) => {
              const isCompleted = index < currentStep;
              const isActive = index === currentStep;

              return (
                <button
                  key={index}
                  onClick={() => goToStep(index)}
                  className="group relative h-1.5 flex-1 cursor-pointer"
                  aria-label={step.label}
                >
                  {/* Track */}
                  <div className="absolute inset-0 overflow-hidden rounded-full bg-gray-200/80">
                    {/* Fill */}
                    <div
                      className={[
                        'h-full rounded-full transition-all duration-500 ease-out',
                        isCompleted
                          ? 'w-full bg-[#702b91]'
                          : isActive
                            ? 'w-full bg-[#702b91]'
                            : 'w-0 bg-[#702b91]',
                      ].join(' ')}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active step label */}
          <div className="mt-2 flex items-center justify-between px-0.5">
            <span className="text-xs font-semibold text-[#702b91]">
              {steps[currentStep].label}
            </span>
            <span className="text-xs tabular-nums text-gray-400">
              {currentStep + 1}/{steps.length}
            </span>
          </div>
        </div>
      </div>

      {/* ── Step Content ── */}
      <div className="relative flex-1 overflow-hidden">
        <div
          className={[
            'h-full',
            phase === 'entering'
              ? 'transition-none'
              : 'transition-all duration-300 ease-out',
            phase === 'exiting'
              ? `opacity-0 ${direction === 'forward' ? '-translate-x-12' : 'translate-x-12'}`
              : phase === 'entering'
                ? `opacity-0 ${direction === 'forward' ? 'translate-x-12' : '-translate-x-12'}`
                : 'translate-x-0 opacity-100',
          ].join(' ')}
        >
          {steps[currentStep].content}
        </div>
      </div>

      {/* ── Bottom Navigation ── */}
      <div className="sticky bottom-0 z-40 border-t border-gray-100 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <button
            onClick={goPrev}
            disabled={isFirstStep}
            className={[
              'flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium',
              'transition-all duration-200',
              isFirstStep
                ? 'cursor-default text-gray-300'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
            ].join(' ')}
          >
            <ArrowLeft />
            {prevLabel}
          </button>

          <button
            onClick={goNext}
            className="flex items-center gap-2 rounded-full bg-[#702b91] px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-purple-200 transition-all duration-200 hover:bg-[#5a2275] hover:shadow-lg"
          >
            {isLastStep ? completeLabel : nextLabel}
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
