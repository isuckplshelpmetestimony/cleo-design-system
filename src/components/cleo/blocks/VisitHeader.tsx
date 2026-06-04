import '../cleo.css';
import './visit-shell.css';

export default function VisitHeader() {
  return (
    <header className="visit-header">
      <div className="visit-header-patient">
        <div className="visit-avatar" aria-hidden="true">
          EJ
        </div>
        <div>
          <p className="visit-header-name">Emma Johnson</p>
          <p className="visit-header-meta">DOB 04/12/1968 · MRN 87654321</p>
        </div>
      </div>
      <div className="visit-header-date">
        <div>May 13, 2025</div>
        <span className="cleo-status cleo-status--progress visit-header-note-type">Daily note</span>
      </div>
    </header>
  );
}
