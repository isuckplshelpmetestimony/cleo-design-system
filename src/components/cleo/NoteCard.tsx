import './cleo.css';

type NoteCardState = 'draft' | 'progress' | 'complete';

interface NoteCardProps {
  patientName: string;
  noteType: string;
  meta: string;
  state: NoteCardState;
  statusLabel: string;
}

function StatusIcon({ state }: { state: NoteCardState }) {
  if (state === 'draft') {
    return (
      <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
        <circle cx="7" cy="7" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.25" />
      </svg>
    );
  }
  if (state === 'progress') {
    return (
      <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
        <circle cx="3" cy="7" r="1" fill="currentColor" />
        <circle cx="7" cy="7" r="1" fill="currentColor" />
        <circle cx="11" cy="7" r="1" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden className="cleo-status__check">
      <path d="M7 12l3 3 7-7" fill="none" stroke="#D4841A" strokeWidth="2" />
    </svg>
  );
}

export function NoteCard({ patientName, noteType, meta, state, statusLabel }: NoteCardProps) {
  const statusClass =
    state === 'draft' ? 'cleo-status--draft' : state === 'progress' ? 'cleo-status--progress' : 'cleo-status--complete';

  return (
    <article className={`cleo-note-card cleo-note-card--${state}`}>
      <h4 className="cleo-note-card__name">{patientName}</h4>
      <p className="cleo-note-card__type">{noteType}</p>
      <p className="cleo-note-card__meta">{meta}</p>
      <div className="cleo-note-card__footer">
        <span className={`cleo-status ${statusClass}`}>
          <StatusIcon state={state} />
          {statusLabel}
        </span>
      </div>
    </article>
  );
}
