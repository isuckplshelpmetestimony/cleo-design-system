import LockedBand from './LockedBand';
import './visit-shell.css';

export default function LockedBandShowcase() {
  return (
    <div className="visit-shell-frame block-preview-shell locked-band-showcase">
      <div className="visit-shell-inner locked-band-showcase__body">
        <p className="locked-band-showcase__context">Bill tab</p>
        <div className="visit-tabs visit-tabs--compact" aria-hidden="true">
          <span className="visit-tab visit-tab--active">Treatment</span>
          <span className="visit-tab">SOAP</span>
          <span className="visit-tab">Plan (POC)</span>
          <span className="visit-tab visit-tab--locked">Bill</span>
        </div>
        <p className="locked-band-showcase__hint">
          Sits at the bottom of the visit frame until treatment is accepted.
        </p>
      </div>
      <LockedBand />
    </div>
  );
}
