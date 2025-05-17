import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience | Portfolio',
  description: 'Explore my professional experience, work history, and career achievements.',
  openGraph: {
    title: 'Experience | Portfolio',
    description: 'Explore my professional experience, work history, and career achievements.',
  },
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 