import { DenialIndicator } from '../DenialIndicator';
import '../cleo.css';
import './pattern-showcase.css';

function SystemErrorPanel() {
  return (
    <aside className="cleo-error-panel" role="alert">
      <p className="cleo-error-panel__label">Could not save note</p>
      <p className="cleo-error-panel__text">
        Connection lost while saving. Your edits are still on screen — tap Retry once you are back
        online.
      </p>
    </aside>
  );
}

export default function ErrorWarningShowcase() {
  return (
    <div className="pattern-showcase">
      <div className="pattern-showcase__compare">
        <div>
          <p className="pattern-showcase__section-label">Warning (amber)</p>
          <DenialIndicator state="flag" />
        </div>
        <div>
          <p className="pattern-showcase__section-label">Error (muted red)</p>
          <SystemErrorPanel />
        </div>
      </div>
    </div>
  );
}
