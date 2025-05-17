import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me | Portfolio',
  description: 'Learn more about my skills, education, and background.',
  openGraph: {
    title: 'About Me | Portfolio',
    description: 'Learn more about my skills, education, and background.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 