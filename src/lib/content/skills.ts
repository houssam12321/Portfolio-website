import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const certificationsSection = {
  title: 'Certifications',
  certifications: [
    {
      id: getId(),
      title: 'Spring MVC, Spring Boot and Rest Controllers ',
      issuingOrg: 'Coursera',
      issueDate: 'June 2023',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/L6K772V4ODZL',
    },
    {
      id: getId(),
      title: 'Fundamentals of Java Programming',
      issuingOrg: 'Coursera',
      issueDate: 'September 2024',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/L6K772V4ODZL',
    },
    
    {
      id: getId(),
      title: 'React Basics ',
      issuingOrg: 'Meta',
      issueDate: 'june 2024',
      credentialUrl: 'https://oracle.com/certifications/java-core',
    },
    {
      id: getId(),
      title: 'Responsive Web Design ',
      issuingOrg: 'FreeCodeCamp',
      issueDate: 'April 2023',
      credentialUrl: '',
    },
    // Add more certifications as needed
  ],
};

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building Full-stack Web Applications ',
        'Developing responsive single-page applications using React.js & Angular',
        'Creating RESTful APIs using Java for backend development',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'Php', icon: 'vscode-icons:file-type-php' },

        

        { name: 'Docker', icon: 'vscode-icons:file-type-docker' },

        
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
         { name: 'angularjs', icon: 'logos:angular-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'database management', icon: 'vscode-icons:file-type-sql' },
        { name: 'Java', icon: 'vscode-icons:file-type-java' },
        { name: 'Git', icon: 'vscode-icons:file-type-git' },
        { name: 'spring boot', icon: 'logos:spring' },
        { name: 'AWS', icon: 'vscode-icons:file-type-aws' },



        

      ],
    },
    
  ],
};
