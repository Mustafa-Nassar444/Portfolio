import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';
import { siteOrigin } from './src/utils/seo.ts';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), 'SITE_URL');
const site = siteOrigin(env.SITE_URL);

export default defineConfig({
  output: 'static',
  site,
  trailingSlash: 'ignore',
  integrations: site ? [sitemap({ filter: (page) => !new URL(page).pathname.startsWith('/404') })] : [],
  vite: { plugins: [tailwindcss()] },
});
