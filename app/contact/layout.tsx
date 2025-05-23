import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Me | Portfolio',
  description: 'Get in touch with me for collaborations, opportunities, or just to say hello.',
  openGraph: {
    title: 'Contact Me | Portfolio',
    description: 'Get in touch with me for collaborations, opportunities, or just to say hello.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 