import { useState } from 'react';
import { Button } from './Button';
import { duration, easing } from '../../lib/tokens';
import './motion-demos.css';

export function MotionDemos() {
  const [fadeKey, setFadeKey] = useState(0);
  const [settled, setSettled] = useState(false);
  const [denialState, setDenialState] = useState<'clean' | 'flag'>('clean');

  return (
    <>
      <section className="motion-demo-block">
        <h4>Page transition</h4>
        <p className="motion-demo-desc">Fade, {duration.base}ms ease-out</p>
        <button type="button" className="cleo-btn cleo-btn--ghost" onClick={() => setFadeKey((k) => k + 1)}>
          Replay fade
        </button>
        <div key={fadeKey} className="motion-fade-box">
          Content settles into view without urgency.
        </div>
      </section>

      <section className="motion-demo-block">
        <h4>Note completion settle</h4>
        <p className="motion-demo-desc">Elements reduce and center, {duration.slow}ms ease-out</p>
        <button type="button" className="cleo-btn cleo-btn--ghost" onClick={() => setSettled((s) => !s)}>
          Toggle settle
        </button>
        <div className={`motion-settle-box${settled ? ' motion-settle-box--settled' : ''}`}>
          <span>Visit note</span>
        </div>
      </section>

      <section className="motion-demo-block">
        <h4>Denial indicator cross-fade</h4>
        <p className="motion-demo-desc">Color cross-fades, no flash, {duration.base}ms</p>
        <button
          type="button"
          className="cleo-btn cleo-btn--ghost"
          onClick={() => setDenialState((s) => (s === 'clean' ? 'flag' : 'clean'))}
        >
          Toggle state
        </button>
        <div
          className={`motion-denial-pill motion-denial-pill--${denialState}`}
          style={{ transition: `background ${duration.base}ms ${easing.out}, border-color ${duration.base}ms ${easing.out}` }}
        >
          {denialState === 'clean' ? 'No flags' : 'Review suggested'}
        </div>
      </section>

      <section className="motion-demo-block">
        <h4>Button press</h4>
        <p className="motion-demo-desc">scale(0.98), {duration.fast}ms ease-out, no bounce</p>
        <Button variant="primary">Press me</Button>
      </section>
    </>
  );
}
