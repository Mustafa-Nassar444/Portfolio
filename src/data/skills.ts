import type { SkillCategory } from '@/types/content';
export const skills: SkillCategory[] = [
  { id: 'backend', title: 'Backend', skills: ['PHP', 'Laravel', 'RESTful APIs'] },
  { id: 'database', title: 'Database', skills: ['MySQL', 'Eloquent ORM', 'Query Builder'] },
  { id: 'frontend', title: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'AJAX', 'Bootstrap', 'Blade'] },
  { id: 'integrations', title: 'Integrations', skills: ['Payment Gateways', 'Webhooks', 'Third-party APIs', 'Pusher'] },
  { id: 'tools', title: 'Tools', skills: ['Git', 'GitHub', 'Postman', 'cPanel'] },
  { id: 'principles', title: 'Software principles', skills: ['OOP', 'MVC', 'SOLID'] },
];
