import { Button } from '../Button';
import BlockPreviewShell from './BlockPreviewShell';
import StatusStrip from './StatusStrip';
import '../cleo.css';
import '../note-flow.css';
import './visit-shell.css';

export default function RecordInNoteShowcase() {
  return (
    <BlockPreviewShell>
      <StatusStrip activePole="recording" />
      <div className="record-in-note">
        <p className="note-flow__hint">Listening…</p>
        <svg className="note-flow__wave" viewBox="0 0 280 48" aria-hidden>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
            <rect
              key={i}
              className="note-flow__wave-bar"
              x={i * 22 + 4}
              y={24 - (8 + (i % 4) * 4)}
              width={8}
              height={16 + (i % 5) * 6}
              opacity={0.4 + (i % 3) * 0.15}
              rx={2}
            />
          ))}
        </svg>
        <div className="record-in-note__actions">
          <Button variant="primary" className="cleo-btn--sm">
            Proceed to charting →
          </Button>
        </div>
        <p className="record-in-note__caption">
          Capture stays inside this visit — signing comes later after validate.
        </p>
      </div>
    </BlockPreviewShell>
  );
}
