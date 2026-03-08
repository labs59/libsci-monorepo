export interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionContainer({ children, className = '' }: SectionContainerProps) {
  return (
    <div className={`mx-auto max-w-5xl px-6 py-12 ${className}`}>
      {children}
    </div>
  );
}
