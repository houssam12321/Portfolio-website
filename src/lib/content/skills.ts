import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const certificationsSection = {
  title: 'Certifications',
  certifications: [
    {
      id: getId(),
      title: 'Spring Framework Certification',
      issuingOrg: 'Coursera',
      issueDate: 'June 2023',
      credentialUrl: 'https://coursera.org/certificate/spring-framework',
    },
    {
      id: getId(),
      title: 'Java Core Certification',
      issuingOrg: 'Oracle',
      issueDate: 'April 2023',
      credentialUrl: 'https://oracle.com/certifications/java-core',
    },
    {
      id: getId(),
      title: 'php Core Certification',
      issuingOrg: 'Oracle',
      issueDate: 'April 2023',
      credentialUrl: 'https://oracle.com/certifications/java-core',
    },
    {
      id: getId(),
      title: 'php Core Certification',
      issuingOrg: 'Oracle',
      issueDate: 'April 2023',
      credentialUrl: 'https://oracle.com/certifications/java-core',
    },
    {
      id: getId(),
      title: 'php Core Certification',
      issuingOrg: 'Oracle',
      issueDate: 'April 2023',
      credentialUrl: 'https://oracle.com/certifications/java-core',
    },
    {
      id: getId(),
      title: 'php Core Certification',
      issuingOrg: 'Oracle',
      issueDate: 'April 2023',
      credentialUrl: 'https://oracle.com/certifications/java-core',
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
        { name: 'Php', icon: 'vscode-icons:file-type-php' },

        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
         { name: 'angularjs', icon: 'logos:angular-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
        { name: 'jest', icon: 'vscode-icons:file-type-jest' },
        { name: 'Java', icon: 'vscode-icons:file-type-java' },

      ],
    },
    
  ],
};
