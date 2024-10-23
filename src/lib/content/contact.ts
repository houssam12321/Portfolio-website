import { author } from '@/lib/content/portfolio';
import { ContactSectionType } from '@/lib/types/sections';

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  info: [
    "houssamradi48@gmail.com |  +212 625 63 64 56 ",


  ],

  paragraphs: [
    'I’m currently looking for a new opportunities.',
    'Whether you have a project to discuss or just want to say hi, my inbox is open for all!',
  ],
  
  link: `mailto:${author.email}`,
};
