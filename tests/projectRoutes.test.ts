import assert from 'node:assert/strict';
import { test } from 'node:test';
import { projectStaticPaths, projectUrl } from '../src/utils/projectRoutes.ts';
import type { Project } from '../src/types/content';
import { webUrl } from '../src/utils/webUrl.ts';

const sample: Project = {
  slug: 'test-project', title: 'Test fixture', description: '', overview: '', type: 'Company Project',
  featured: false, technologies: [], personalTechnologies: [], role: '', responsibilities: [],
  features: [], challenges: [], screenshots: [],
};

test('each project receives a unique static route and its own content', () => {
  const projects = [sample, { ...sample, slug: 'second-project' }];
  const paths = projectStaticPaths(projects);
  assert.equal(paths.length, projects.length);
  for (const [index, route] of paths.entries()) {
    assert.equal(route.props.project, projects[index]);
    assert.equal(projectUrl(route.params.slug), `/projects/${route.params.slug}/`);
  }
});

test('invalid or duplicate slugs fail instead of producing ambiguous routes', () => {
  for (const slug of ['', '../escape', 'Uppercase', 'two words', 'x/y', 'x?y', '-x', 'x--y']) assert.throws(() => projectUrl(slug));
  assert.throws(() => projectStaticPaths([sample, sample]), /Duplicate/);
  assert.deepEqual(projectStaticPaths([]), []);
});

test('optional external project links accept only valid HTTP(S) addresses', () => {
  assert.equal(webUrl('https://example.com/project'), 'https://example.com/project');
  for (const value of [undefined, '', 'not a URL', 'javascript:alert(1)', 'data:text/html,test', 'file:///tmp/test']) assert.equal(webUrl(value), undefined);
});
