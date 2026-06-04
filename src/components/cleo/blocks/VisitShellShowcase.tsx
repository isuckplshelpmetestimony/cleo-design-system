import { Button } from '../Button';
import './visit-shell.css';
import VisitHeader from './VisitHeader';
import StatusStrip from './StatusStrip';
import VisitStepper from './VisitStepper';
import VisitTabBar from './VisitTabBar';
import TreatmentTable from './TreatmentTable';
import LockedBand from './LockedBand';

export default function VisitShellShowcase() {
  return (
    <div className="visit-shell-frame">
      <div className="visit-shell-inner">
        <VisitHeader />
        <StatusStrip />
        <VisitStepper />
        <VisitTabBar />
        <TreatmentTable />
        <div className="visit-actions">
          <Button variant="primary" className="cleo-btn--sm">
            Complete treatment section →
          </Button>
        </div>
      </div>
      <LockedBand />
    </div>
  );
}
