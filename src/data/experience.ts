import type { Experience } from '@/types/content';
export const experience: Experience[] = [
  {
    id: '3hand-agency', company: '3hand Agency', role: 'Backend Developer', startDate: '2025-09',
    responsibilities: [
      'Contributing to the development and maintenance of educational platforms using PHP, Laravel, and MySQL.',
      'Developing RESTful APIs and backend features for a comprehensive LMS.',
      'Implementing business logic for courses, examinations, subscriptions, and payment workflows.',
      'Integrating third-party services and optimizing database queries.',
      'Maintaining Laravel dashboards and collaborating with frontend developers.',
    ],
  },
  {
    id: 'freelance', company: 'Independent freelance work', role: 'Freelance Laravel Backend Developer',
    startDate: '2025-04', endDate: '2025-08', // Exact months supplied by the CV.
    responsibilities: [
      'Worked independently on Laravel backend development tasks and application enhancements.',
      'Developed and maintained backend functionality.',
      'Worked with database operations, APIs, and application requirements.',
      'Troubleshot issues and implemented requested improvements.',
    ],
  },
  {
    id: 'nofal-seo', company: 'Nofal SEO', role: 'Backend Developer', startDate: '2024-01', endDate: '2025-03',
    responsibilities: [
      'Worked on Laravel-based web applications across different business domains.',
      'Developed backend functionality and RESTful APIs.',
      'Worked with MySQL databases and business-specific workflows.',
      'Implemented application features and third-party integrations.',
      'Debugged, maintained, and enhanced existing applications.',
    ],
  },
];
