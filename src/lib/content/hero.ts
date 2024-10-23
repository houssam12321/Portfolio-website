import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Houssam Radi.',
  tagline: '',
  description:
    "I'm a passionate Full-Stack web developer with hands-on experience in building web applications using React.js , Angular & Next.js with TypeScript, TailwindCSSwith UI/UX designing. I have robust skills in Java, enabling me to develop scalable and efficient server-side applications.",
  specialText: '$',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
