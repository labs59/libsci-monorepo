export interface FormSkeletonField {
  label: string;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  placeholder?: string;
}

export interface FormSkeletonProps {
  title: string;
  sections: {
    heading: string;
    fields: FormSkeletonField[];
  }[];
}

export function FormSkeleton({ title, sections }: FormSkeletonProps) {
  return (
    <div className="mx-auto max-w-2xl">
      <h2 className="mb-8 text-2xl font-medium text-black">{title}</h2>
      <div className="flex flex-col gap-10">
        {sections.map((section) => (
          <fieldset key={section.heading}>
            <legend className="mb-4 text-lg font-medium text-black">
              {section.heading}
            </legend>
            <div className="flex flex-col gap-4">
              {section.fields.map((field) => (
                <div key={field.label} className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <div className="h-24 rounded-lg bg-gray-100" />
                  ) : field.type === 'select' ? (
                    <div className="h-10 rounded-lg bg-gray-100" />
                  ) : (
                    <div className="h-10 rounded-lg bg-gray-100" />
                  )}
                </div>
              ))}
            </div>
          </fieldset>
        ))}
        <button
          disabled
          className="w-fit cursor-not-allowed rounded-full bg-gray-300 px-8 py-2.5 text-sm font-medium text-gray-500"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
