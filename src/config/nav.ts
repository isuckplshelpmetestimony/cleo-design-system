export interface NavItem {
  label: string;
  href: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const navSections: NavSection[] = [
  {
    title: 'Introduction',
    items: [
      { label: 'What is Cleo', href: '/' },
      { label: 'Emotional brief', href: '/introduction/emotional-brief' },
      { label: 'The journey', href: '/introduction/journey' },
      { label: 'Quiet Authority', href: '/introduction/quiet-authority' },
      { label: 'How to use', href: '/introduction/how-to-use' },
    ],
  },
  {
    title: 'Foundations',
    items: [
      { label: 'Color', href: '/foundations/color' },
      { label: 'Typography', href: '/foundations/typography' },
      { label: 'Spacing & grid', href: '/foundations/spacing' },
      { label: 'Motion', href: '/foundations/motion' },
      { label: 'Illustration', href: '/foundations/illustration' },
    ],
  },
  {
    title: 'Components',
    items: [
      { label: 'Buttons', href: '/components/buttons' },
      { label: 'Form inputs', href: '/components/inputs' },
      { label: 'Cards', href: '/components/cards' },
      { label: 'Navigation', href: '/components/navigation' },
      { label: 'Status indicators', href: '/components/status' },
      { label: 'Note completion flow', href: '/components/note-completion' },
      { label: 'Denial prevention', href: '/components/denial-indicator' },
    ],
  },
  {
    title: 'Patterns',
    items: [
      { label: 'Landing page arc', href: '/patterns/landing-arc' },
      { label: 'Onboarding', href: '/patterns/onboarding' },
      { label: 'AI assistance', href: '/patterns/ai-assistance' },
      { label: 'Errors & warnings', href: '/patterns/errors' },
    ],
  },
  {
    title: 'Voice & tone',
    items: [{ label: 'Brand voice', href: '/voice' }],
  },
  {
    title: 'Art',
    items: [{ label: 'Logo & brand art', href: '/art' }],
  },
];

export function isActive(href: string, currentPath: string): boolean {
  if (href === '/') return currentPath === '/';
  return currentPath === href || currentPath.startsWith(href + '/');
}
