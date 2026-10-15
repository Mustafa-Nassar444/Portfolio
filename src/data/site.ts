export interface SocialImage { src: string; alt: string; width: number; height: number }

export const siteContent: { name: string; socialImage?: SocialImage } = {
  name: 'Mustafa Nassar | Backend Developer',
  // Add a real PNG/JPEG in public/images before configuring socialImage.
  // socialImage: { src: '/images/social-preview.png', alt: 'Your portfolio preview', width: 1200, height: 630 },
};
