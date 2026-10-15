import type { Project } from '../types/content';

export function projectUrl(slug: string): string {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw new Error(`Invalid project slug: ${slug}. Use lowercase words separated by hyphens.`);
  return `/projects/${slug}/`;
}

export function projectStaticPaths(projects: Project[]) {
  const slugs = new Set<string>();
  return projects.map((project) => {
    projectUrl(project.slug);
    if (slugs.has(project.slug)) throw new Error(`Duplicate project slug: ${project.slug}`);
    slugs.add(project.slug);
    return { params: { slug: project.slug }, props: { project } };
  });
}
