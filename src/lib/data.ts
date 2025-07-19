import type { SkillCategory, Project, Experience } from './types';

export const skillsData: SkillCategory[] = [
  {
    name: 'Languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'SQL', level: 80 },
      { name: 'HTML/CSS', level: 95 },
    ],
  },
  {
    name: 'Web Development',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'Flask / Flask-Smorest', level: 90 },
      { name: 'Django', level: 80 },
      { name: 'RESTful APIs', level: 95 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'JWT Authentication', level: 90 },
      { name: 'OAuth 2.0', level: 75 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 70 },
    ],
  },
  {
    name: 'DevOps & Tools',
    skills: [
      { name: 'Docker', level: 80 },
      { name: 'Git/GitHub', level: 95 },
      { name: 'Linux/Unix', level: 75 },
      { name: 'CI/CD', level: 70 },
    ],
  },
];

export const projectsData: Project[] = [
  {
    title: 'Expense Tracker Frontend',
    description: 'A responsive and interactive UI for tracking expenses. Features reusable components, efficient state management with React Hooks and Context API, and a mobile-friendly layout.',
    tags: ['React', 'Context API', 'HTML/CSS'],
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'finance dashboard',
    githubUrl: 'https://github.com/ahsantariq23/Expense-Tracker',
  },
  {
    title: 'Flask Authentication API',
    description: 'A secure RESTful API for user authentication and authorization, featuring registration, login, logout, and token-based access control using JSON Web Tokens (JWT).',
    tags: ['Flask', 'Python', 'JWT', 'REST API'],
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'security code',
    githubUrl: 'https://github.com/ahsantariq23/flask-authentication-api',
  },
  {
    title: 'Campus Navigation System',
    description: 'A system designed for campus navigation, applying UML modeling and SDLC principles. Implemented with TDD using JUnit, achieving 95% test coverage.',
    tags: ['Software Design', 'UML', 'Java', 'JUnit'],
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'campus map',
    githubUrl: 'https://github.com/ahsantariq23',
  },
  {
    title: 'Event Management System',
    description: 'Contributed to an event management system using Django. Designed and implemented RESTful APIs for event operations like registration, venue, and schedule management.',
    tags: ['Django', 'Python', 'REST API', 'PostgreSQL'],
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'event calendar',
    githubUrl: 'https://github.com/ahsantariq23',
  },
];

export const experienceData: Experience[] = [
  {
    role: 'Backend Developer Intern',
    company: 'National Centre for Physics (NCP), Islamabad',
    period: 'Aug 2024 – Nov 2024',
    description: [
      'Contributed to the development of an Event Management System using Django.',
      'Designed and implemented RESTful APIs to handle various event-related operations.',
      'Collaborated on modules managing registrations, venues, schedules, and participant data.',
    ],
  },
  {
    role: 'Bachelor of Science in Computer Science',
    company: 'Quaid-i-Azam University, Islamabad',
    period: 'July 2025',
    description: [
        'Comprehensive coursework including: Data Structures, Algorithms, Object-Oriented Programming, Database Systems, Operating Systems, Computer Networks, and Software Engineering.',
        'Specialized electives in DevOps, Cloud Computing, Web Application Development, and Artificial Intelligence.',
    ],
  },
];
