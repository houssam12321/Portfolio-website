import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'patient Management ',
      url: 'https://easy-fix.vercel.app/',
      repo: 'https://github.com/vatsalsinghkv/easy-fix',
      img: 'https://i.postimg.cc/HxWC5HcN/aut-med.png',
      year: 2024,
      tags: ['React', 'Sprin goobt'],
    },
    {
      id: getId(),
      name: 'Phone check Number',
      url: 'https://beautiful-animations-kv.vercel.app/',
      repo: 'https://github.com/vatsalsinghkv/beautiful-animations',
      img: 'https://i.postimg.cc/mkXMRbCW/Screenshot-2024-10-16-021826.png',
      year: 2023,
      tags: ['React'],
    },
    
    {
      id: getId(),
      name: 'Gym Website ',
      url: 'https://react-gym-app-dusky.vercel.app/',
      repo: 'https://github.com/vatsalsinghkv/todo-app',
      img: 'https://i.postimg.cc/VLvXhDLs/screenweb.png',
      year: 2023,
      tags: ['React', 'JS'],
    },
    {
      id: getId(),
      name: 'weather app',
      url: 'https://weather-kv.netlify.app/',
      repo: 'https://github.com/vatsalsinghkv/weather-app',
      img: 'https://user-images.githubusercontent.com/68834718/148419702-491fa08d-e520-4e2f-b219-374ec7118b2b.png',
      year: 2022,
      tags: ['Html', 'sass', 'JS', 'jQuery'],
    },
    {
      id: getId(),
      name: 'Tik Tak Toe Game',
      url: '',
      repo: 'https://github.com/vatsalsinghkv/blogr-landing-page',
      img: 'https://i.postimg.cc/Ss5kp3Rt/tivtac.png',
      year: 2021,
      tags: ['html', 'sass', 'JS'],
    },
    {
      id: getId(),
      name: 'Angular home app',
      url: '',
      repo: 'https://github.com/vatsalsinghkv/natours',
      img: 'https://i.postimg.cc/wv9mQkGp/homecreen.png',
      year: 2024,
      tags: ['Angular'],
    },
    
    {
      id: getId(),
      name: 'IP address tracker',
      url: 'https://vatsalsinghkv.github.io/ip-address-tracker/',
      repo: 'https://github.com/vatsalsinghkv/ip-address-tracker',
      img: 'https://user-images.githubusercontent.com/68834718/210223386-03bcaa20-e649-4b3d-8709-59e42c6d685a.png',
      year: 2021,
      tags: ['html', 'bootstrap', 'JS'],
    },
    {
      id: getId(),
      name: 'calculator app',
      url: 'https://vatsalsinghkv.github.io/calculator-app/',
      repo: 'https://github.com/vatsalsinghkv/calculator-app/',
      img: 'https://user-images.githubusercontent.com/68834718/210223825-3b68d696-39c6-490c-9433-f315b7efccbd.png',
      year: 2021,
      tags: ['html', 'CSS', 'JS'],
    },
    
    
  ],
};
