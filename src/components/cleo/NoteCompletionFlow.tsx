import { useState } from 'react';
import { Button } from './Button';
import './cleo.css';
import './note-flow.css';

const STEPS = ['recording', 'transcribing', 'review', 'sign', 'complete'] as const;
type Step = (typeof STEPS)[number];

const stepLabels: Record<Step, string> = {
  recording: 'Recording',
  transcribing: 'Transcribing',
  review: 'Review',
  sign: 'Sign',
  complete: 'Complete',
};

export function NoteCompletionFlow() {
  const [step, setStep] = useState<Step>('recording');
  const idx = STEPS.indexOf(step);

  return (
    <div className="note-flow">
      <nav className="note-flow__tabs" aria-label="Note completion states">
        {STEPS.map((s) => (
          <button
            key={s}
            type="button"
            className={`note-flow__tab${s === step ? ' note-flow__tab--active' : ''}`}
            onClick={() => setStep(s)}
          >
            {stepLabels[s]}
          </button>
        ))}
      </nav>

      <div className="note-flow__stage">
        {step === 'recording' && (
          <div className="note-flow__recording">
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
          </div>
        )}

        {step === 'transcribing' && (
          <div className="note-flow__transcribing">
            <p className="note-flow__hint">Transcribing your visit…</p>
            <div className="note-flow__progress">
              <div className="note-flow__progress-fill" style={{ width: '62%' }} />
            </div>
          </div>
        )}

        {step === 'review' && (
          <div className="note-flow__review">
            <p className="note-flow__note-text">
              Patient presents with left shoulder pain, 6 weeks duration. ROM limited in abduction.
              Plan: progressive strengthening, manual therapy 2x/week.
            </p>
            <div className="note-flow__review-actions">
              <Button variant="ghost" className="cleo-btn--sm">
                Edit section
              </Button>
              <Button variant="ghost" className="cleo-btn--sm">
                Add objective
              </Button>
            </div>
          </div>
        )}

        {step === 'sign' && (
          <div className="note-flow__sign">
            <p className="note-flow__hint">Ready to sign and submit</p>
            <p className="note-flow__note-text note-flow__sign-line">
              Maria Chen — Initial evaluation — May 16, 2026
            </p>
            <Button variant="amber" className="cleo-btn--sm">
              Sign and submit
            </Button>
          </div>
        )}

        {step === 'complete' && (
          <div className="note-flow__complete">
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden className="note-flow__complete-icon">
              <circle className="note-flow__complete-mark" cx="12" cy="12" r="11" fill="none" strokeWidth="1.5" />
              <path className="note-flow__complete-mark" d="M7 12l3 3 7-7" fill="none" strokeWidth="1.5" />
            </svg>
            <h4 className="note-flow__complete-title">Maria Chen — Initial evaluation</h4>
            <p className="note-flow__timestamp">Signed · 4:47 PM</p>
          </div>
        )}
      </div>

      <p className="note-flow__step-note">
        Step {idx + 1} of 5 —{' '}
        {idx === 4 ? 'The quietest screen in the product.' : 'Each state is quieter than the last.'}
      </p>
    </div>
  );
}

export default NoteCompletionFlow;
