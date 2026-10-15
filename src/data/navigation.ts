export interface NavigationItem { label: string; href: string }

// Add project/section destinations as their pages and sections are implemented.
export const navigation: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Contact', href: '/#contact' },
];
