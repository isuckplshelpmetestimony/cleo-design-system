export const duration = {
  fast: 150,
  base: 300,
  slow: 400,
} as const;

export const easing = {
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

export const colors = {
  page: '#F5F3F0',
  sidebar: '#E2E5EA',
  steel: '#8C95A6',
  midnight: '#0F1F30',
  slate: '#2E4057',
  fog: '#F4F5F7',
  amber: '#D4841A',
  cream: '#F5EBD6',
  green: '#3D6B4F',
  red: '#8B3A3A',
} as const;

export const status = {
  draft: 'var(--status-draft)',
  recording: 'var(--status-recording)',
  charting: 'var(--status-charting)',
  validate: 'var(--status-validate)',
  signed: 'var(--status-signed)',
} as const;

export const surfaces = {
  locked: 'var(--surface-locked)',
  preview: 'var(--surface-preview)',
  bandMuted: 'var(--surface-band-muted)',
} as const;
