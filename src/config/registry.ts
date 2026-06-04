export type RegistryLayer = 'foundation' | 'component' | 'block' | 'pattern';
export type RegistryStatus = 'ready' | 'draft' | 'planned';
export type MvpTag = 'core' | 'module' | 'defer';

export interface RegistryEntry {
  id: string;
  name: string;
  layer: RegistryLayer;
  status: RegistryStatus;
  mvp: MvpTag;
  href: string;
  copyPath?: string;
  /** Lowercase phrases from Cleo Vault / Obsidian that map to this entry (agent resolution). */
  vaultKeywords?: string[];
  description: string;
  updated: string;
  relatedIds?: string[];
}

export const registryEntries: RegistryEntry[] = [
  // Blocks
  {
    id: 'visit-shell',
    name: 'Visit shell block',
    layer: 'block',
    status: 'ready',
    mvp: 'core',
    href: '/blocks/visit-shell',
    copyPath: 'src/components/cleo/blocks/VisitShellShowcase.tsx',
    vaultKeywords: [
      'visit shell',
      'daily note',
      'ipad note',
      'circumnavigable',
      'closed geometry',
      'julie mvp',
      'one visit',
    ],
    description: 'One circumnavigable iPad surface for Julie daily note — closed geometry.',
    updated: '2026-06-04',
    relatedIds: ['status-strip', 'stepper', 'tab-bar', 'treatment-table', 'locked-band'],
  },
  {
    id: 'note-completion',
    name: 'Record in note',
    layer: 'block',
    status: 'ready',
    mvp: 'core',
    href: '/blocks/note-completion',
    copyPath: 'src/components/cleo/blocks/RecordInNoteShowcase.tsx',
    vaultKeywords: [
      'note completion',
      'record in note',
      'record inside',
      'proceed to charting',
      'listening',
      'recording',
      'ipad record',
    ],
    description: 'In-note capture on iPad — Listening… then Proceed to charting on the visit strip.',
    updated: '2026-05-20',
    relatedIds: ['visit-shell'],
  },
  {
    id: 'denial-guardian',
    name: 'Denial guardian',
    layer: 'block',
    status: 'ready',
    mvp: 'defer',
    href: '/components/denial-indicator',
    copyPath: 'src/components/cleo/DenialIndicator.tsx',
    vaultKeywords: ['denial', 'guardian', 'no flags', 'review suggested', 'cannot submit'],
    description: 'Guardian panel — clean, flag, blocked states.',
    updated: '2026-05-18',
  },
  // Block sub-primitives
  {
    id: 'status-strip',
    name: 'Status strip',
    layer: 'component',
    status: 'ready',
    mvp: 'core',
    href: '/blocks/status-strip',
    copyPath: 'src/components/cleo/blocks/StatusStripShowcase.tsx',
    vaultKeywords: ['status strip', 'poles', 'draft', 'charting', 'ready to validate', 'signed'],
    description: 'Draft → Recording → Charting → Ready → Signed.',
    updated: '2026-06-04',
    relatedIds: ['visit-shell'],
  },
  {
    id: 'stepper',
    name: 'Stepper',
    layer: 'component',
    status: 'ready',
    mvp: 'core',
    href: '/blocks/stepper',
    copyPath: 'src/components/cleo/blocks/VisitStepperShowcase.tsx',
    vaultKeywords: ['stepper', 'intake', 'record', 'treatment', 'soap', 'plan', 'bill'],
    description: 'Intake → Record → Treatment → SOAP → Plan → Bill.',
    updated: '2026-06-04',
    relatedIds: ['visit-shell'],
  },
  {
    id: 'tab-bar',
    name: 'Tab bar',
    layer: 'component',
    status: 'ready',
    mvp: 'core',
    href: '/blocks/tab-bar',
    copyPath: 'src/components/cleo/blocks/VisitTabBarShowcase.tsx',
    vaultKeywords: ['tab bar', 'visit tabs', 'circumnavigable tabs'],
    description: 'Circumnavigable visit tabs — Treatment, SOAP, Plan, Bill.',
    updated: '2026-06-04',
    relatedIds: ['visit-shell'],
  },
  {
    id: 'treatment-table',
    name: 'Treatment table',
    layer: 'component',
    status: 'ready',
    mvp: 'core',
    href: '/blocks/treatment-table',
    copyPath: 'src/components/cleo/blocks/TreatmentTableShowcase.tsx',
    vaultKeywords: [
      'treatment table',
      'skilled comment',
      'hitl',
      'suggestion chip',
      'exercise row',
    ],
    description: 'Exercise rows with per-row skilled comment and HITL suggestions.',
    updated: '2026-06-04',
    relatedIds: ['visit-shell'],
  },
  {
    id: 'locked-band',
    name: 'Locked band',
    layer: 'component',
    status: 'ready',
    mvp: 'core',
    href: '/blocks/locked-band',
    copyPath: 'src/components/cleo/blocks/LockedBandShowcase.tsx',
    vaultKeywords: ['locked band', 'billing locked', 'treatment complete'],
    description: 'Billing unavailable until treatment section complete.',
    updated: '2026-06-04',
    relatedIds: ['visit-shell'],
  },
  {
    id: 'validate-sign',
    name: 'Validate and sign',
    layer: 'block',
    status: 'ready',
    mvp: 'core',
    href: '/blocks/validate-sign',
    copyPath: 'src/components/cleo/blocks/ValidateSignShowcase.tsx',
    vaultKeywords: ['validate and sign', 'validate', 'jump-to-fix', 'compliance gate'],
    description: 'Compliance gate before sign — jump-to-fix, no silent sign.',
    updated: '2026-06-04',
    relatedIds: ['visit-shell'],
  },
  // Components
  {
    id: 'buttons',
    name: 'Buttons',
    layer: 'component',
    status: 'ready',
    mvp: 'core',
    href: '/components/buttons',
    copyPath: 'src/components/cleo/Button.tsx',
    description: 'Primary, amber CTA, ghost, disabled.',
    updated: '2026-05-15',
  },
  {
    id: 'inputs',
    name: 'Form inputs',
    layer: 'component',
    status: 'ready',
    mvp: 'core',
    href: '/components/inputs',
    copyPath: 'src/components/cleo/Input.tsx',
    description: 'Labels, fog fields, midnight focus.',
    updated: '2026-05-15',
  },
  {
    id: 'cards',
    name: 'Cards',
    layer: 'component',
    status: 'ready',
    mvp: 'core',
    href: '/components/cards',
    copyPath: 'src/components/cleo/NoteCard.tsx',
    description: 'Note list cards with left accent.',
    updated: '2026-05-16',
  },
  {
    id: 'navigation',
    name: 'Navigation',
    layer: 'component',
    status: 'ready',
    mvp: 'core',
    href: '/components/navigation',
    copyPath: 'src/components/cleo/NavExample.tsx',
    description: '260px sidebar, amber active indicator.',
    updated: '2026-05-16',
  },
  {
    id: 'status',
    name: 'Status indicators',
    layer: 'component',
    status: 'ready',
    mvp: 'core',
    href: '/components/status',
    copyPath: 'src/components/cleo/StatusBadge.tsx',
    description: 'Soft tint pills for draft, progress, complete.',
    updated: '2026-05-17',
  },
  {
    id: 'ai-assistance',
    name: 'AI assistance',
    layer: 'component',
    status: 'ready',
    mvp: 'core',
    href: '/components/ai-assistance',
    copyPath: 'src/components/cleo/patterns/AiAssistanceShowcase.tsx',
    vaultKeywords: ['ai assistance', 'transcribing', 'inline suggestion', 'no chat bubble'],
    description: 'Inline suggestions and soft transcription progress — no AI persona.',
    updated: '2026-06-04',
    relatedIds: ['visit-shell', 'record-in-note'],
  },
  {
    id: 'errors-warnings',
    name: 'Errors & warnings',
    layer: 'component',
    status: 'ready',
    mvp: 'core',
    href: '/components/errors-warnings',
    copyPath: 'src/components/cleo/patterns/ErrorWarningShowcase.tsx',
    vaultKeywords: ['error', 'warning', 'denial risk', 'muted red', 'amber warning'],
    description: 'Amber warnings for denial risk; muted red for blocked submission or system failure.',
    updated: '2026-06-04',
    relatedIds: ['denial-guardian'],
  },
  {
    id: 'hitl',
    name: 'HITL',
    layer: 'component',
    status: 'ready',
    mvp: 'core',
    href: '/components/hitl',
    copyPath: 'src/components/cleo/patterns/HitlShowcase.tsx',
    vaultKeywords: ['hitl', 'human in the loop', 'suggested chip', 'accept', 'dismiss'],
    description: 'Per-row suggested chips — therapist accepts, edits, or dismisses explicitly.',
    updated: '2026-06-04',
    relatedIds: ['visit-shell', 'treatment-table'],
  },
  {
    id: 'ipad-constraints',
    name: 'iPad constraints',
    layer: 'component',
    status: 'ready',
    mvp: 'core',
    href: '/components/ipad-constraints',
    copyPath: 'src/components/cleo/patterns/IpadConstraintsShowcase.tsx',
    vaultKeywords: ['ipad', 'landscape', 'touch target', 'visit shell', '260px sidebar'],
    description: 'iPad landscape as primary surface — one visit shell, touch-first layout.',
    updated: '2026-06-04',
    relatedIds: ['visit-shell', 'locked-band'],
  },
  // Foundations
  {
    id: 'theming',
    name: 'Theming',
    layer: 'foundation',
    status: 'ready',
    mvp: 'core',
    href: '/foundations/theming',
    description: 'Primitive → semantic → component token map.',
    updated: '2026-06-04',
  },
  {
    id: 'color',
    name: 'Color',
    layer: 'foundation',
    status: 'ready',
    mvp: 'core',
    href: '/foundations/color',
    description: 'Quiet Authority palette.',
    updated: '2026-05-10',
  },
];

export function getRegistryEntry(id: string): RegistryEntry | undefined {
  return registryEntries.find((e) => e.id === id);
}

export function getRelatedEntries(id: string): RegistryEntry[] {
  const entry = getRegistryEntry(id);
  if (!entry?.relatedIds) return [];
  return entry.relatedIds
    .map((rid) => getRegistryEntry(rid))
    .filter((e): e is RegistryEntry => e !== undefined);
}

export function filterRegistry(opts?: {
  layer?: RegistryLayer;
  ids?: string[];
  mvp?: MvpTag;
}): RegistryEntry[] {
  let result = [...registryEntries];
  if (opts?.layer) result = result.filter((e) => e.layer === opts.layer);
  if (opts?.ids) result = result.filter((e) => opts.ids!.includes(e.id));
  if (opts?.mvp) result = result.filter((e) => e.mvp === opts.mvp);
  return result;
}
