import './nav-example.css';

export function NavExample() {
  return (
    <nav className="cleo-nav-example" aria-label="Example">
      <a href="#" className="cleo-nav-example__link cleo-nav-example__link--active">
        Notes
      </a>
      <a href="#" className="cleo-nav-example__link">
        Patients
      </a>
      <a href="#" className="cleo-nav-example__link">
        Schedule
      </a>
    </nav>
  );
}
