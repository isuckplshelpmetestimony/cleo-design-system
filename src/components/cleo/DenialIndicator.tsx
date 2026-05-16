import { useState } from 'react';
import './cleo.css';

type DenialState = 'clean' | 'flag' | 'blocked';

const copy: Record<DenialState, { label: string; text: string }> = {
  clean: {
    label: 'Denial risk',
    text: 'No flags detected. This note reads clean for typical payer review.',
  },
  flag: {
    label: 'Review suggested',
    text: 'This phrasing may signal maintenance care to insurers. Suggested revision below.',
  },
  blocked: {
    label: 'Cannot submit',
    text: 'Required elements are missing before this note can be signed and submitted.',
  },
};

export function DenialIndicator({ state }: { state: DenialState }) {
  const { label, text } = copy[state];
  return (
    <aside className={`cleo-denial cleo-denial--${state === 'flag' ? 'flag' : state}`} role="status">
      <p className="cleo-denial__label">{label}</p>
      <p className="cleo-denial__text">{text}</p>
    </aside>
  );
}

export function DenialIndicatorDemo() {
  const [state, setState] = useState<DenialState>('clean');
  const states: DenialState[] = ['clean', 'flag', 'blocked'];

  return (
    <>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        {states.map((s) => (
          <button
            key={s}
            type="button"
            className="cleo-btn cleo-btn--ghost"
            style={{ padding: '6px 12px', fontSize: '0.875rem' }}
            onClick={() => setState(s)}
          >
            {s}
          </button>
        ))}
      </div>
      <DenialIndicator state={state} />
    </>
  );
}
