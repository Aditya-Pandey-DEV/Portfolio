import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Portfolio',
  description: 'Browse my portfolio of projects, applications, and technical work samples.',
  openGraph: {
    title: 'Projects | Portfolio',
    description: 'Browse my portfolio of projects, applications, and technical work samples.',
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 