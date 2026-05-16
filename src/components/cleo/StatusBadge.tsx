import './cleo.css';

type StatusVariant = 'neutral' | 'success' | 'warning' | 'error';

interface StatusBadgeProps {
  variant?: StatusVariant;
  children: React.ReactNode;
}

export function StatusBadge({ variant = 'neutral', children }: StatusBadgeProps) {
  return <span className={`cleo-status cleo-status--${variant}`}>{children}</span>;
}

export function StatusDemo() {
  return (
    <>
      <StatusBadge variant="success">Claim clean</StatusBadge>{' '}
      <StatusBadge variant="warning">Review suggested</StatusBadge>{' '}
      <StatusBadge variant="error">Cannot submit</StatusBadge>{' '}
      <StatusBadge>In progress</StatusBadge>
    </>
  );
}
