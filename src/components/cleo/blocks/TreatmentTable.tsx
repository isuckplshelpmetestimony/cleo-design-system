import { Button } from '../Button';
import './visit-shell.css';

const rows = [
  {
    exercise: 'Supine Diaphragmatic Breathing',
    sets: '2 / 10',
    comment: 'Patient tolerated well; cueing for rib expansion.',
    suggested: true,
  },
  {
    exercise: 'Seated Thoracic Rotation',
    sets: '2 / 8',
    comment: 'Mild stiffness L side; improved end range.',
    suggested: true,
  },
  {
    exercise: 'Standing Hip Abduction',
    sets: '3 / 12',
    comment: '',
    suggested: true,
  },
];

export default function TreatmentTable() {
  return (
    <>
      <table className="treatment-table">
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Sets / Reps</th>
            <th>Skilled comment</th>
            <th>Suggested</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.exercise}>
              <td>{row.exercise}</td>
              <td>{row.sets}</td>
              <td>{row.comment || '—'}</td>
              <td>
                {row.suggested && <span className="cleo-chip-suggested">+ Suggested</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="treatment-table__actions">
        <Button variant="ghost" className="cleo-btn--sm">
          + Add exercise
        </Button>
      </div>
    </>
  );
}
