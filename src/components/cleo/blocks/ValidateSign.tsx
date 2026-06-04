import { Button } from '../Button';
import './visit-shell.css';

const issues = [
  { id: 'skilled-hip', label: 'Skilled comment missing — Standing Hip Abduction' },
  { id: 'poc-dates', label: 'Plan of care end date not set' },
];

export default function ValidateSign() {
  return (
    <div className="validate-sign">
      <p className="validate-sign__lead">Ready to validate — fix items before signing.</p>
      <ul className="validate-sign__list">
        {issues.map((issue) => (
          <li key={issue.id}>
            <Button variant="ghost" className="cleo-btn--sm cleo-btn--block">
              {issue.label} →
            </Button>
          </li>
        ))}
      </ul>
      <div className="validate-sign__actions">
        <Button variant="primary" className="cleo-btn--sm" disabled>
          Sign note
        </Button>
        <p className="validate-sign__hint">No silent sign — all items must be resolved.</p>
      </div>
    </div>
  );
}
