import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Christian Aurano',
  title: "Hi everyone",
  intros: [
    'I am Christian Aurano',
    'Full Stack Web & Mobile Developer',
    'Top - Best quality, best speed',
    'Super - Looking for new challenge',
    'Smart - Concise and clean code',
  ],
  description:
    `I'm passionate Full Stack Web & Mobile Developer having good experience of web applications with Laravel, Python, Django, React.js, Next.js and Blockchain development on Ethereum, Solidity, Web3.js, Moralis, and Brownie Framework.
    And I'm also familiar in mobile app development with Flutter, Swift, React Native.`,
  resumeLink:
    '/img/Christian.pdf',
};

export const openSource = {
  githubUserName: 'FullstackWEB-developer',
};

export const contact = {
  image: '/img/avatar/avatar.jpg',
  location: 'Brighton, England',
  bio: 'Top, Super, Smart Developer',
};

export const socialLinks: SocialLinksType = {
  url: 'https://topsupersmart.com/',
  github: 'https://github.com/FullstackWEB-developer',
  instagram: 'https://www.instagram.com',
  facebook: 'https://www.facebook.com',
  twitter: 'https://twitter.com',
  mail: 'mailto:christianaurano@gmail.com',
};

export const skillsSection: SkillsSectionType = {
  title: 'Top, Super, Smart Developer',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Django',
          fontAwesomeClassName: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Azure',
          fontAwesomeClassName: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassName: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassName: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          fontAwesomeClassName: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          fontAwesomeClassName: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          fontAwesomeClassName: 'logos:sentry-icon',
        },
      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
        ),
        emoji(
          '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
        ),
        emoji(
          '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
        ),
        emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
        emoji(
          '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          fontAwesomeClassName: 'logos:ethereum',
        },
        {
          skillName: 'Solidity',
          fontAwesomeClassName: 'logos:solidity',
        },
        {
          skillName: 'Web3js',
          fontAwesomeClassName: 'logos:web3js',
        },
        {
          skillName: 'Metamask',
          fontAwesomeClassName: 'logos:metamask-icon',
        },
        {
          skillName: 'Ganache',
          fontAwesomeClassName: 'logos:ganache-icon',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend',
    progressPercentage: '96',
  },
  {
    Stack: 'Backend',
    progressPercentage: '87',
  },
  {
    Stack: 'Mobile',
    progressPercentage: '74',
  },
  {
    Stack: 'Game',
    progressPercentage: '60',
  },
  {
    Stack: 'Blockchain',
    progressPercentage: '92',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'University of Westminster',
    subHeader: "Bachelor's Degree",
    duration: 'August 2009 - May 2013',
    desc: 'Graduated with High Honors.',
    grade: 'Grade A',
    descBullets: [
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Freelance Web Developer',
    company: 'Upwork, Fiverr, PeoplePerHour',
    companyLogo: '/img/icons/common/upwork.jpg',
    date: 'Aug 2022 - Present',
    desc: 'Skills: Unity · Python (Programming Language) · React Native · Nuxt.js · Next.js · React.js',
  },
  {
    role: 'Full Stack Developer',
    company: 'AITEC',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Mar 2020 - Aug 2022',
    desc: "Skills: Next.js · React.js · Full-Stack Development · Laravel · Vue.js · REST APIs",
  },
  {
    role: 'Back End Developer',
    company: 'Wealth Legatus',
    companyLogo: '/img/icons/common/bleedAI.jpg',
    date: 'Jul 2018 - Jan 2020',
    desc: 'Skills: Python (Programming Language) · Django REST Framework · TensorFlow · PostgreSQL',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'My Wealth Legatus',
    desc: 'My Wealth Legatus built with Laravel, Vue.js that committed to guiding people towards achieving their financial goals.',
    github: 'https://github.com/Valuemark/MyWealth-Front-End',
    link: 'https://mywealthlegatus.io',
  },
  {
    name: 'Hulu',
    desc: 'Hulu is a platform similar to Netflix and HBO GO, allowing users to watch movies and TV shows online.',
    link: 'https://hulu.com'
  },
  {
    name: 'October CMS',
    desc: 'October CMS was built on the Laravel framework, the best and most popular PHP framework.',
    link: 'https://octobercms.com/',
  },
  {
    name: 'Gyroscope',
    desc: 'Gyroscope is another among many popular apps built with React Native. It enables you to see the complete story of your life; it’s the health app on steroids.',
    link: 'https://brainhub.eu/library/react-native-apps#gyroscope',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'Sean K.',
    feedback:
      'He went above and beyond with iterations to make the end result perfect. He worked well on a complex, multi step engagement and did a good job communicating on slack during the development.',
  },
  {
    name: 'LineApp Srl',
    feedback:
      'He has been crucial to complete the project. His work is really helping the company to put the platform into production. Great worker with amazing skills.',
  },
  {
    name: 'James M.',
    feedback:'He was absolutely brilliant. Very diligent, communicative, understood what needed to be done and carried out the work perfectly. Have no hesitation working with him. I will use him again. Thank you',
  },
  {
    name: 'Nitin R.',
    feedback:'A good developer who worked quickly and was great with communications, delivered exactly what I needed, I will definitely use him again.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Portfolio - Christian Aurano',
  description:
    'A passionate Full Stack Web & Mobile Developer.',
  author: 'Christian Aurano',
  image: '/img/avatar/avatar.jpg',
  url: 'https://topsupersmart.com',
  keywords: [
    'Christian',
    'Christian Aurano',
    'Valuemark',
    'Portfolio',
    'Top',
    'Super',
    'Smart',
    'Full Stack',
    'Full-Stack',
    'Full Stack Developer',
    'Full-Stack Developer',
    'Web',
    'Mobile',
  ],
};
