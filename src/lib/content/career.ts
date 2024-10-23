// career.ts
import { getId } from '@/lib/utils/helper';

export const careerTimeline = {
  title: 'My Career Journey',
  steps: [
    {
      id: getId(),
      title: 'Final Year Software Engineering Student ',
      description: '.',
      institution: 'Higher School of Management, Computer Science and Telecommunications',

      year: '2025',
      alignment: 'left',
    },
    {
      id: getId(),
      title: 'University Diploma of Technology in Computer Science',
      description: '',
      institution: 'Higher School of Technology',
      year: '2022',
      alignment: 'right'
    }
    ,
    {
      id: getId(),
      title: 'Baccalaureate in Mathematical Sciences, option French "A".',
      description: '',
      year: '2020',
      institution: 'High School Imzouren',
      alignment: 'left'
    }
    ,
    
    
  ],
};
