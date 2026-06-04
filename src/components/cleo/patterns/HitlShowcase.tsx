import { Button } from '../Button';
import '../cleo.css';
import '../blocks/visit-shell.css';
import './pattern-showcase.css';

export default function HitlShowcase() {
  return (
    <div className="pattern-showcase">
      <table className="pattern-showcase__hitl-row">
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Skilled comment</th>
            <th>Suggested</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Standing Hip Abduction</td>
            <td style={{ color: 'var(--color-steel)' }}>—</td>
            <td>
              <span className="cleo-chip-suggested">+ Suggested</span>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="pattern-showcase__inline-copy">Suggested revision below.</p>
      <div className="pattern-showcase__hitl-actions">
        <Button variant="ghost" className="cleo-btn--sm">
          Accept
        </Button>
        <Button variant="ghost" className="cleo-btn--sm">
          Edit
        </Button>
        <Button variant="ghost" className="cleo-btn--sm">
          Dismiss
        </Button>
      </div>
    </div>
  );
}
