// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'GeorgeCStephens', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    external: {
      header: 'Industry Experience',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Aerospace & Defence',
          description:
            'Lead Developer in a agile(scrum) development team to create a large scale test automation framework. Automated Smoke Test and Regresion pack resulted in over £500,000 saved per annum for client.',
          imageUrl:
            'https://media.istockphoto.com/id/1175741245/photo/fighter-jet.jpg?s=612x612&w=0&k=20&c=2KhvZu7az1Q5B26uUevSWGkskwoRYraiiMZdusL7SUc=',
          //link: 'NDA Signed.',
        },
         {
          title: 'Aerospace & Defence',
          description:
            'Worked in an agile(xp) development team to deliver an automated solution to a large scale complex data migration/ingestion tool. Saving an estimated £150,000 per annum for client.',
          imageUrl:
            'https://images.pexels.com/photos/914403/pexels-photo-914403.jpeg',
          //link: 'NDA Signed.',
        },
        {
          title: 'Aerospace & Defence',
          description:
            'Worked in a small waterfall development team to deliver an automated user access rights tool to high profile A&D industry client. Saving an estimated £50,000 per annum for client',
          imageUrl:
            'https://images.pexels.com/photos/919580/pexels-photo-919580.jpeg?cs=srgb&dl=pexels-messalaciulla-919580.jpg&fm=jpg',
          //link: 'NDA Signed.',
        }


      ],

    },
    github: {
      display: true, // Display GitHub projects?
      header: 'Personal Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
  },
  seo: {
    title: 'Portfolio of George Stephens, Test Automation Engineer',
    description: 'The official portfolio site of George Stephens, Test Automation Engineer. George is an apprenticeship advocate and passionate about Quality Engineering. George loves software and is obsessed with improving the quality and efficiency of the software development lifecycle',
    imageURL: '',
  },
  social: {
    linkedin: 'george-stephens-065683206',
    email: 'george@georgestephens.co.uk',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Selenium',
    'Eggplant',
    'Git',
    'Atlassian',
    'Lua',
    'SQL',
    'Agile Methodologies',
  ],
  experiences: [
    {
      company: 'IBM',
      position: 'Test Automation Lead',
      from: 'February 2023',
      to: 'Present',
      companyLink: 'https://ibm.com',
    },
    {
      company: 'IBM',
      position: 'Test Automation Developer',
      from: 'July 2022',
      to: 'February 2023',
      companyLink: 'https://ibm.com',
    },
    {
      company: 'IBM',
      position: 'Manual Test Engineer',
      from: 'September 2021',
      to: 'July 2022',
      companyLink: 'https://ibm.com',
    },
  ],
  certifications: [
    {
      name: 'AWS Certified Cloud Practioner',
      body: 'Amazon Web Services',
      year: '2024',
      //link: '',
    },
    {
      name: 'Software Test Apprentice Of The Year Highly Commended Award',
      body: 'British Computer Society',
      year: '2024',
      //link: '',
    },
    {
      name: 'Registered Scrum Master',
      body: 'Scrum Inc',
      year: '2024',
      link: 'https://agileeducation.org/scrum-master/',
    },
    {
      name: 'Generative AI Foundations',
      body: 'IBM',
      year: '2024',
      link: 'https://www.ibm.com/training/collection/generative-ai-with-ibm-687',
    },
    {
      name: 'watsonx Essentials',
      body: 'IBM',
      year: '2024',
      link: 'https://www.ibm.com/training/badge/watson-ai-essentials.1',
    },
  ],
  educations: [
    {
      institution: 'Institute for Apprenticeships & Technical Education',
      degree: 'BCS Level 4 Software Testing Qualification',
      from: '2021',
      to: '2023',
    },
    {
      institution: 'Tupton Hall Sixth Form',
      degree: 'A Levels',
      from: '2021',
      to: '2023',
    },
  ],
 /*  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ], */
  // Display articles from your medium or dev account. (Optional)
  /* blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  }, */
  googleAnalytics: {
    id: 'G-Q1FD9Q6D8V', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default CONFIG;
