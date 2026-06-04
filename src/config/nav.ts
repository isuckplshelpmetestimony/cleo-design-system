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
    title: 'Principles',
    items: [{ label: 'Overview', href: '/principles' }],
  },
  {
    title: 'Getting started',
    items: [
      { label: 'Cursor + Cleo Vault', href: '/getting-started/cursor-vault' },
      { label: 'Designers', href: '/getting-started/designers' },
      { label: 'Engineers', href: '/getting-started/engineers' },
      { label: 'AI prompt', href: '/getting-started/ai-prompt' },
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
      { label: 'Theming', href: '/foundations/theming' },
    ],
  },
  {
    title: 'Registry',
    items: [{ label: 'All components', href: '/registry' }],
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
      { label: 'AI assistance', href: '/components/ai-assistance' },
      { label: 'Errors & warnings', href: '/components/errors-warnings' },
      { label: 'HITL', href: '/components/hitl' },
      { label: 'iPad constraints', href: '/components/ipad-constraints' },
    ],
  },
  {
    title: 'Blocks',
    items: [
      { label: 'Visit shell block', href: '/blocks/visit-shell' },
      { label: 'Status strip', href: '/blocks/status-strip' },
      { label: 'Stepper', href: '/blocks/stepper' },
      { label: 'Tab bar', href: '/blocks/tab-bar' },
      { label: 'Treatment table', href: '/blocks/treatment-table' },
      { label: 'Locked band', href: '/blocks/locked-band' },
      { label: 'Validate and sign', href: '/blocks/validate-sign' },
      { label: 'Record in note', href: '/blocks/note-completion' },
    ],
  },
  {
    title: 'Patterns',
    items: [
      { label: 'Landing page arc', href: '/patterns/landing-arc' },
      { label: 'Onboarding', href: '/patterns/onboarding' },
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

export const quietAuthoritySwatches = [
  { name: 'Page', token: '--color-page', hex: '#F5F3F0' },
  { name: 'Midnight', token: '--color-midnight', hex: '#0F1F30' },
  { name: 'Slate', token: '--color-slate', hex: '#2E4057' },
  { name: 'Amber', token: '--color-amber', hex: '#D4841A' },
  { name: 'Green', token: '--color-green', hex: '#3D6B4F' },
  { name: 'Fog', token: '--color-fog', hex: '#F4F5F7' },
] as const;

export function isActive(href: string, currentPath: string): boolean {
  if (href === '/') return currentPath === '/';
  return currentPath === href || currentPath.startsWith(href + '/');
}
