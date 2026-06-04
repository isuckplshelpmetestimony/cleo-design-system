import VisitShellShowcase from '../blocks/VisitShellShowcase';
import './pattern-showcase.css';

export default function IpadConstraintsShowcase() {
  return (
    <div className="pattern-showcase">
      <span className="pattern-showcase__device-tag">iPad · Safari · landscape</span>
      <VisitShellShowcase />
      <p
        style={{
          margin: 0,
          fontSize: '0.6875rem',
          color: 'var(--color-steel)',
          lineHeight: 'var(--leading-body)',
        }}
      >
        One visit shell · tabs stay visible · touch targets ≥ 44px · locked band when Bill is
        unavailable.
      </p>
    </div>
  );
}
