import './visit-shell.css';

export type VisitPoleId = 'draft' | 'recording' | 'charting' | 'validate' | 'signed';
type PoleState = 'done' | 'active' | 'upcoming';

const POLES: { id: VisitPoleId; label: string }[] = [
  { id: 'draft', label: 'Draft' },
  { id: 'recording', label: 'Recording' },
  { id: 'charting', label: 'Charting' },
  { id: 'validate', label: 'Ready to validate' },
  { id: 'signed', label: 'Signed' },
];

function poleState(id: VisitPoleId, activePole: VisitPoleId): PoleState {
  const order = POLES.map((p) => p.id);
  const activeIdx = order.indexOf(activePole);
  const idx = order.indexOf(id);
  if (idx < activeIdx) return 'done';
  if (idx === activeIdx) return 'active';
  return 'upcoming';
}

interface Props {
  /** Which visit status pole is active — defaults to Charting (visit shell demo). */
  activePole?: VisitPoleId;
}

export default function StatusStrip({ activePole = 'charting' }: Props) {
  return (
    <div className="status-strip" role="status" aria-label="Visit status">
      {POLES.map((pole) => {
        const state = poleState(pole.id, activePole);
        return (
          <span
            key={pole.id}
            className={`visit-pole visit-pole--${pole.id} visit-pole--${state}`}
            aria-current={state === 'active' ? 'step' : undefined}
          >
            {pole.label}
          </span>
        );
      })}
    </div>
  );
}
