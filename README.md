# Backend Developer Portfolio

Static Astro portfolio for Mustafa Nassar using strict TypeScript and Tailwind CSS through its Vite plugin. Includes static case studies, galleries, contact, metadata, sitemap support, quality checks, and Vercel deployment configuration. Profile, skills, experience, and projects are populated from the supplied CV and project descriptions.

The LMS, ElMasrah, and Saudi Suppliers are featured on the homepage; Click & Learn is included in the full project listing. Screenshots, detailed challenge/solution narratives, and public project links are omitted until supplied or verified. Optional `technicalHighlights` records documented implementation work without inventing challenges or results. The supplied CV is available under `public/documents/` and connected through `profile.cvPath`.

## Requirements and commands

- Node.js 22.19.0 or later within the Node 22 release line. `.nvmrc` selects Node 22; Astro's current transitive dependencies require this minimum patch level.
- npm 9.6.5 or later.

```sh
npm ci
npm run dev
npm run check
npm test
npm run build
npm run verify:build
npm run build:vercel
npm run preview
```

Development defaults to http://localhost:4321. Production assets are generated in `dist/`. The build runs type checking before generating static pages. No backend, database, or server adapter is required. `SITE_URL` is optional for local development and required to enable production canonical URLs and sitemap output.

## Structure

- `src/layouts/BaseLayout.astro`: shared document shell and global stylesheet.
- `src/components/layout`: responsive navigation, theme control, and footer.
- `src/components/common`: reusable container, button, badge, card, icon, and section heading.
- `src/components/home`: typed, reusable Hero, About, Skills, Experience, and ExperienceItem components.
- `src/components/projects`: shared cards/grid, case-study layout, and gallery.
- `src/pages`: home, `/projects`, statically generated `/projects/[slug]`, and custom 404.
- `src/types/content.ts`: presentation-independent content contracts.
- `src/data`: editable profile, skill, experience, and project records.
- `src/styles/global.css`: Tailwind entry point, typography, and base tokens.
- `src/utils/publicDocument.ts`: build-time verification of local document links.
- `src/utils/employmentDates.ts`: strict, timezone-independent employment month formatting.
- `tests/publicDocument.test.ts`: CV availability and invalid-path checks using Node's built-in test runner.
- `public/images/{projects,profile}` and `public/documents`: static assets.

Imports may use `@/` to reference `src/`. Empty folders have `.gitkeep` files so they survive version control.

## Content conventions

Replace the explicit TODOs in `src/data/profile.ts` with real information. Skills, experience, and projects use clearly labeled placeholders. Add records using the exported TypeScript interfaces; these same contracts can support a future API mapping without coupling UI components to a transport layer.

Edit skill categories in `src/data/skills.ts`: each has a unique `id`, a `title`, and a `skills` list. The sample backend, database, and tooling categories are not a verified inventory. Replace them with your real skills and remove `isPlaceholder` (or set it to `false`). Blank skill entries and categories without skills are omitted. An empty list displays a neutral message.

Edit employment records in `src/data/experience.ts`: supply a unique `id`, real `company`, `role`, `startDate`, optional `endDate` and `location`, and concise `responsibilities`. Dates use `YYYY-MM`. Omit `endDate` only for a real current role; it displays as Present when the start date is valid and the record is not a placeholder. Sample records never imply current employment. Missing or invalid dates display a neutral prompt instead of invalid dates. Replace the sample company/role and responsibility prompts, then remove `isPlaceholder`. Keep entries in display order, normally most recent first. Empty history has a neutral fallback. Employment details are shown only in the timeline, not repeated in About.

Edit `name`, `title`, `summary`, `about` (one paragraph per entry), and optional `location` in the profile data. The initial introduction and biography are sample copy, not verified claims. Set `isPlaceholder` to `false` after replacing them with your own information. An empty About list displays a neutral fallback; missing location is omitted. The About section contains a concise background and approach, without duplicating employment records.

Keep the dashboard and public website for the same system in one project. `technologies` describes the whole system; `personalTechnologies`, `role`, and `responsibilities` describe the owner's actual contribution. Use `contributionNotes` to credit a separately developed frontend. Never claim React work based only on the system's technology list.

Optional links and assets should be omitted until available. Add the real CV to `public/documents/` before setting `cvPath` (for example `/documents/cv.pdf`). Screenshots use public paths, meaningful alt text, explicit dimensions, and an interface label. Do not add fake company records, demo URLs, or repository links.

The Hero's Download CV action appears only when `cvPath` points to an existing, non-empty file under `public/documents/`. Use a plain local path; spaces are URL-encoded automatically. Missing files, directories, traversal paths, and remote URLs produce no button. Rebuild after adding or removing documents because this validation happens during static generation.

The Hero's View Projects action leads to the implemented `/projects` listing.

## Projects

Project raster images now live under `src/assets/projects/` so Astro can generate responsive WebP previews with its `Image` component. Keep the existing content URL convention (`/images/projects/...`) in `src/data/projects.ts`; `src/utils/projectImages.ts` maps it to the source asset and generated full-size URL. Add or replace PNG/JPEG/WebP/AVIF files in `src/assets/projects/`, not `public/`. Gallery links and the lightbox open the full-size asset. Public SVG placeholders remain supported without transformation.

Edit `src/data/projects.ts` to replace the explicitly labeled sample with real work. Use a unique URL-safe `slug`, `title`, short `description`, `type`, `featured` flag, `role`, and `personalTechnologies`. The listing displays all records in array order; the homepage displays records with `featured: true`. Both support empty lists.

Cards display the personally used technologies and contribution notes. Case studies display overall `technologies` separately. A dashboard and a public website for the same system belong to one record. Do not claim ownership of a separately built React interface.

Add a thumbnail file to `src/assets/projects/` and configure `thumbnail` with its public URL, honest alt text, width, height, and interface label. The provided SVG is an illustrative placeholder, not a screenshot. Missing optional thumbnails render a neutral fallback. Images reserve space, load lazily, and fit a consistent ratio.

`projectUrl` is optional: a Live Demo action appears on cards only for a valid HTTP(S) URL. Omit it for private projects. Case studies also support an optional `repositoryUrl`. Missing or invalid links never render actions. No invented demo or repository URL is supplied.

ProjectCard supports an accessible View Details link via `detailsUrl`. ProjectGrid supplies a link to each statically generated case study. Use unique lowercase slugs separated by hyphens (for example `company-order-system`); invalid and duplicate slugs fail the build with a clear message. Unknown slugs are not generated and return the custom 404 on Astro/Vercel static hosting. After replacing sample records, remove `isPlaceholder` or set it to `false`.

## Case studies and galleries

Populate `overview`, `role`, `responsibilities`, `features`, and `challenges` (objects with `challenge` and `solution`) in each project. Keep actual outcomes verifiable. Empty sections display neutral messages, and optional company names and contribution notes are omitted when missing. Overall technologies and personally used technologies are displayed separately. The sample illustrations and technical prompts are clearly labeled placeholders.

Add real images to `src/assets/projects/`, then add entries to `screenshots`: `src`, honest `alt`, positive `width` and `height`, `interface` (`dashboard`, `website`, or `other`), and optional `caption`. Include the dashboard and public website in the same project's gallery when relevant; captions should credit interface ownership accurately. Replace the dashboard and website SVG illustrations with authorized screenshots before removing the sample flag.

Gallery links open original images without JavaScript. With JavaScript and native dialog support, they open a responsive lightbox with previous/next buttons, Left/Right keys, Escape dismissal, a close button, focus restoration, image count, and captions. Navigation wraps around and is hidden for a single image. Native modal focus containment keeps keyboard navigation in the viewer; document scrolling is restored on close. Modified clicks retain normal link behavior. An empty gallery shows a neutral message, and failed lightbox images show an availability message with an original-image link.

`npm test` checks employment dates, CV availability, unique/valid project routes, optional web URLs, and gallery event logic with a simulated DOM. Native focus containment, Escape behavior, and visual layout still require a connected browser for verification.

## Static deployment

`vercel.json` selects the Astro preset, installs the committed dependency versions with `npm ci`, runs `npm run build:vercel`, and serves `dist/`. The deployment build runs unit tests, Astro type checks, static generation, and the generated-site audit; a failure stops deployment. Astro accepts URLs with or without trailing slashes locally; navigation links, canonical URLs, and Vercel's redirects use trailing slashes. Unknown routes retain the custom `404.html`; do not add a catch-all rewrite to the homepage.

This is a static site with no server adapter, functions, database, or paid server infrastructure. Vercel supports static Astro without an adapter: see [Vercel's Astro guide](https://vercel.com/docs/frameworks/frontend/astro). The Node engine range is restricted to Node 22 with a minimum patch of 22.19.0; select **22.x** in Vercel's settings as well. See [Vercel's Node version documentation](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions).

### Deploy through Git

1. Replace the labeled sample profile, skills, experience, and projects with real content. Add authorized screenshots and an optional CV. Configure your contact links and optional social image using the sections below.
2. Run `npm ci` and `npm run build:vercel` locally using the required Node version. Commit source files, `package-lock.json`, and `vercel.json` to a Git repository. Keep `.env`, dependencies, and generated output out of version control.
3. In Vercel, choose **Add New → Project** and import the repository. Set the Root Directory to the folder containing this `package.json` (leave it at the repository root when this project is the repository).
4. Confirm the **Astro** framework preset and **Node.js 22.x**. The configuration file supplies Install Command `npm ci`, Build Command `npm run build:vercel`, and Output Directory `dist`.
5. Set `SITE_URL` in the project's environment settings to your actual production origin, with no path. Use the same production origin for Production and Preview builds so preview pages do not become canonical destinations. No API keys or other environment variables are required.
6. Deploy. If the production domain is not known until the first deployment, use the assigned stable project domain, add it as `SITE_URL`, then redeploy. An initial build without this value works but omits canonical URLs and sitemaps. A custom domain is optional; update `SITE_URL` and redeploy when changing domains.
7. Check `/`, `/projects/`, each case study, `/robots.txt`, `/sitemap-index.xml`, and an unknown URL on the deployment. Confirm the unknown URL returns HTTP 404, check metadata against the production origin, and test mobile navigation, themes, keyboard navigation, and the gallery in a real browser.

Pushes to the connected production branch rebuild the site; other branches can receive preview deployments. Content, screenshot, CV, and environment changes require a new build. Environment settings are read at build time, so updating them alone does not update an existing deployment. Vercel manages HTTPS and static hosting; review the [Hobby plan's eligibility and limits](https://vercel.com/docs/plans/hobby) for personal use. No hosting account or deployment is created by running the local build commands.

### Troubleshooting

- Node/engine errors: install Node 22.19.0 or newer in the 22.x line and verify `node --version`; check the Vercel project uses 22.x.
- `npm ci` reports a lock mismatch: run `npm install` after intentional dependency changes and commit the updated lockfile before deploying.
- Missing canonical URLs or sitemap: configure a valid `SITE_URL` for the deployment environment and redeploy.
- Missing image or document: confirm its public path and filename case. Hosting paths are case-sensitive even if local Windows paths are not. Rebuild after changing assets.
- Build audit failures: read the reported file/link or metadata error, fix the source content, and rerun `npm run build:vercel`.

## Current scope

Completed: initial setup, strict typing, Tailwind integration, shared layout, content models, folder structure, responsive design system, navigation, footer, theme controls, home sections, project cards/listing, static case-study routes, galleries/lightbox, custom 404, and conditional CV actions.

Deployment configuration and documentation are complete. The site has not been published. Review the populated content and supplied downloadable CV, add authorized screenshots if available, and perform real-browser and deployed-route checks before sharing it with recruiters.

## SEO and quality checks

Copy `.env.example` to `.env` and set `SITE_URL` to your real production origin, such as `https://your-domain.tld`. It must use HTTP(S), with no subpath, query, fragment, or credentials. Shell-provided variables take priority. Nothing is published by configuring this value.

Without `SITE_URL`, the site still builds, but omits canonical URLs, `og:url`, and sitemap output rather than inventing a domain. With it, the official `@astrojs/sitemap` integration generates `sitemap-index.xml` and `sitemap-0.xml`. `robots.txt` includes the sitemap address. Canonicals consistently use trailing slashes, remove tracking queries, and use the configured origin. The 404 page is marked `noindex` and excluded from the sitemap.

Every page uses its own title and description in the shared layout, with Open Graph and Twitter metadata. Edit the site name and optional social preview in `src/data/site.ts`. A social image is emitted only when its configured local file exists and a site URL is available. Use an appropriately sized PNG or JPEG under `public/images/`; no fake preview URL is generated.

`npm test` covers content utilities and gallery event logic. `npm run verify:build` audits the generated HTML for titles/descriptions, Open Graph tags, heading hierarchy, one main landmark/H1, unique IDs, ARIA references, image alt text/dimensions, and local links/anchors. It also checks key text/button contrast combinations in both palettes. This is a static check, not a substitute for screen-reader or real-browser testing.

Images currently shipped are small SVG illustrations; thumbnails and gallery previews are lazy-loaded with dimensions and reserved aspect ratios. When replacing them, use compressed WebP/AVIF screenshots at appropriate resolutions and accurate dimensions. The site uses no external fonts or heavy animation libraries. Skip links temporarily focus the main landmark when activated, keyboard and visual control order match, and reduced-motion preferences disable animated hover effects.

## Contact

Configure your real `email` and `links` in `src/data/profile.ts`. LinkedIn and GitHub use the existing `{ label, url }` link format; commented examples are provided but never published as links. Edit contact heading, description, email action label, and empty-state text in `src/data/contact.ts`.

The Contact component accepts typed profile data, renders a direct `mailto:` action for a valid single mailbox, and shows configured HTTP(S) professional links. Email query/header injection, empty URLs, unsafe schemes, and blank labels are omitted. The footer uses the same professional-link validation. With no usable contact details, the section displays a neutral message rather than fake addresses or disabled buttons. No form, backend, or external service is needed.

Contact actions wrap on narrow screens and email addresses can break across lines. The expanded navigation now uses a 64rem breakpoint to leave enough space for all six destinations. Mobile section selection transfers keyboard focus to the selected section. Button icon hover movement is subtle and disabled for reduced-motion users and devices without hover. Contact validation tests are included in `npm test`.

## Design system

Semantic color tokens and responsive spacing live in `src/styles/global.css`. Both themes use the same component classes. `Container` supplies consistent page gutters; `SectionHeading` supports heading levels and accessible IDs; `Card` is a non-interactive surface; `Badge` supports neutral/accent tones. `Button` renders an anchor when given `href`, otherwise a native button, and supports primary/secondary/text variants and native HTML attributes. Icons are local SVGs with decorative accessibility defaults.

`BaseLayout` owns the header, main landmark, skip link, and footer. Pages provide the main content only. Edit navigation destinations in `src/data/navigation.ts`; add links only when their routes or anchors exist. The mobile menu closes on Escape, selection, outside interaction, and desktop resizing. Navigation remains available without JavaScript.

Themes initially follow the system preference. The control persists an explicit choice in `localStorage` when available, with a pre-paint script to avoid a theme flash. Storage failure does not break the control. Without JavaScript, CSS follows the system theme. Motion respects `prefers-reduced-motion`. No external font, icon, or UI package is required.
