import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'SEO MANIAK',
      companyUrl: 'https://seomaniak.ma/',
      role: 'fullstack developer',
      started: 'july 2024',
      upto: 'september 2024',
      tasks: [
        'Created APIs with Symfony.',
        'Consumed APIs using React.js',
        'Managed user roles.',
        'Project management with Scrum (Agile methodology)',
      ],
    },
    {
      company: 'COMUNE URBAINE',
      companyUrl: '',
      role: 'fullstack developer intern',
      started: 'june 2023',
      upto: 'july 2023',
      tasks: [
        'Created and developed a trainee management application for the institution.',
        'Developed with HTML, CSS, PHP, and JavaScript.',
        'Managed the MySQL database for data handling and storage.',
      ],
    },
    {
      company: 'ONEE',
      companyUrl: '',
      role: 'intern administrator',
      started: 'july 2021',
      upto: 'August 2021',
      tasks: [
        'Human resource management process using the SAP software suite'
      ],
    },
  ],
};
