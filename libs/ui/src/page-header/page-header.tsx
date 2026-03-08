export interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-7 text-center">
      <h1 className="text-5xl font-medium text-black">{title}</h1>
      {subtitle && (
        <p className="max-w-2xl text-base text-black">{subtitle}</p>
      )}
    </div>
  );
}
