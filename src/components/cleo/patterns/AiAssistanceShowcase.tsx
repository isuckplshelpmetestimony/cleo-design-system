import '../cleo.css';
import '../note-flow.css';
import './pattern-showcase.css';

export default function AiAssistanceShowcase() {
  return (
    <div className="pattern-showcase">
      <p className="pattern-showcase__section-label">Not Cleo</p>
      <div className="pattern-showcase__anti">
        <div className="pattern-showcase__anti-bubble">Cleo AI optimized your note ✨</div>
      </div>

      <p className="pattern-showcase__section-label">Cleo</p>
      <div className="pattern-showcase__cleo-panel">
        <p className="note-flow__hint">Transcribing your visit…</p>
        <div className="note-flow__progress">
          <div className="note-flow__progress-fill" style={{ width: '48%' }} />
        </div>
        <p className="pattern-showcase__inline-copy">Suggested revision below.</p>
        <p
          style={{
            margin: 'var(--space-3) 0 0',
            fontSize: '0.75rem',
            color: 'var(--color-steel)',
          }}
        >
          Inline suggestions — no chat persona, no boastful copy.
        </p>
      </div>
    </div>
  );
}
