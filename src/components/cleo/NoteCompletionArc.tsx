import './note-completion-showcase.css';

const waveHeights = [10, 14, 8, 16, 12, 9];

export default function NoteCompletionArc() {
  return (
    <div className="note-flow-arc" aria-label="Note completion arc — five steps">
      <div className="note-flow-arc__item">
        <p className="note-flow-arc__label">1 · Recording</p>
        <div className="note-flow-arc__mini">
          <svg className="note-flow-arc__mini-wave" viewBox="0 0 64 24" aria-hidden>
            {waveHeights.map((h, i) => (
              <rect
                key={i}
                className="note-flow-arc__wave-bar"
                x={i * 10 + 2}
                y={12 - h / 4}
                width={4}
                height={h / 2}
                rx={1}
              />
            ))}
          </svg>
        </div>
      </div>
      <div className="note-flow-arc__item">
        <p className="note-flow-arc__label">2 · Transcribing</p>
        <div className="note-flow-arc__mini">
          <div className="note-flow-arc__mini-progress">
            <span />
          </div>
        </div>
      </div>
      <div className="note-flow-arc__item">
        <p className="note-flow-arc__label">3 · Review</p>
        <p className="note-flow-arc__mini">Note text + ghost edits</p>
      </div>
      <div className="note-flow-arc__item">
        <p className="note-flow-arc__label">4 · Sign</p>
        <p className="note-flow-arc__mini">Amber CTA</p>
      </div>
      <div className="note-flow-arc__item">
        <p className="note-flow-arc__label">5 · Complete</p>
        <div className="note-flow-arc__mini note-flow-arc__mini--complete">
          <svg className="note-flow-arc__check" viewBox="0 0 24 24" aria-hidden>
            <circle className="note-flow-arc__check-mark" cx="12" cy="12" r="11" fill="none" strokeWidth="1.5" />
            <path className="note-flow-arc__check-mark" d="M7 12l3 3 7-7" fill="none" strokeWidth="1.5" />
          </svg>
          <span>Signed</span>
        </div>
      </div>
    </div>
  );
}
