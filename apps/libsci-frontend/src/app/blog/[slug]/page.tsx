import { SectionContainer } from '@libsci/ui';
import { BlogPostContent } from './content';

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <SectionContainer>
      <BlogPostContent slug={slug} />
    </SectionContainer>
  );
}
