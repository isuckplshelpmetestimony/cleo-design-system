import './visit-shell.css';

type StepState = 'done' | 'active' | 'upcoming';

const steps: { label: string; state: StepState }[] = [
  { label: 'Intake', state: 'done' },
  { label: 'Record', state: 'done' },
  { label: 'Treatment', state: 'active' },
  { label: 'SOAP', state: 'upcoming' },
  { label: 'Plan', state: 'upcoming' },
  { label: 'Bill', state: 'upcoming' },
];

export default function VisitStepper() {
  return (
    <div className="visit-stepper" aria-label="Visit progress">
      {steps.map((step, i) => (
        <span
          key={step.label}
          className={`visit-step visit-step--${step.state}`}
          aria-current={step.state === 'active' ? 'step' : undefined}
        >
          {step.state === 'done' ? '✓' : i + 1} {step.label}
        </span>
      ))}
    </div>
  );
}
