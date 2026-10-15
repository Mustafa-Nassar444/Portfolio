import type { ImageMetadata } from 'astro';

// Keep content URLs independent of Astro imports. Raster files live in src so
// Astro can optimize them; public SVGs and future remote URLs remain supported.
const assets = import.meta.glob<ImageMetadata>('/src/assets/projects/**/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default',
});

export function projectImageSource(src: string): ImageMetadata | string {
  const key = src.replace(/^\/images\/projects\//, '/src/assets/projects/');
  return assets[key] ?? src;
}

export function projectImageUrl(src: string): string {
  const source = projectImageSource(src);
  return typeof source === 'string' ? source : source.src;
}
