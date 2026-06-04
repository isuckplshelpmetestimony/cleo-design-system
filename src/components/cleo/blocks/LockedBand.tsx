import './visit-shell.css';

function LockIcon() {
  return (
    <svg
      className="locked-band__svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      aria-hidden="true"
    >
      <rect x="3" y="6" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.25" fill="none" />
      <path
        d="M5 6V4.5a2 2 0 0 1 4 0V6"
        stroke="currentColor"
        strokeWidth="1.25"
        fill="none"
      />
    </svg>
  );
}

interface Props {
  message?: string;
}

export default function LockedBand({
  message = 'Billing suggestions unavailable until treatment is complete',
}: Props) {
  return (
    <div className="locked-band" role="status">
      <span className="locked-band__icon">
        <LockIcon />
      </span>
      <span className="locked-band__text">{message}</span>
    </div>
  );
}
