/** Inline SVG storyboard panels — Lim Heng Swee register, Quiet Authority palette */

export function Frame01() {
  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="320" height="240" fill="#0F1F30" />
      <rect x="0" y="160" width="320" height="80" fill="#2E4057" />
      <rect x="200" y="40" width="80" height="100" fill="#8C95A6" opacity="0.5" />
      <ellipse cx="120" cy="130" rx="28" ry="36" fill="#2E4057" />
      <rect x="60" y="150" width="120" height="8" fill="#E2E5EA" opacity="0.3" />
      <circle cx="280" cy="36" r="14" fill="#D4841A" />
    </svg>
  );
}

export function Frame02() {
  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="320" height="240" fill="#2E4057" />
      <rect x="80" y="60" width="160" height="120" fill="#E2E5EA" />
      <rect x="100" y="90" width="120" height="4" fill="#8C95A6" />
      <rect x="100" y="110" width="90" height="4" fill="#8C95A6" />
      <rect x="100" y="130" width="100" height="4" fill="#8C95A6" />
      <path d="M120 160 L140 175 L180 140" stroke="#D4841A" strokeWidth="3" fill="none" />
    </svg>
  );
}

export function Frame03() {
  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="320" height="240" fill="#0F1F30" />
      <rect x="0" y="180" width="320" height="60" fill="#2E4057" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={40 + i * 52} y={50 + (i % 2) * 20} width="40" height="80" fill="#8C95A6" opacity="0.35" />
      ))}
      <ellipse cx="160" cy="200" rx="20" ry="28" fill="#2E4057" />
    </svg>
  );
}

export function Frame04() {
  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="320" height="240" fill="#E2E5EA" />
      <rect x="40" y="80" width="240" height="80" fill="#F4F5F7" />
      <rect x="60" y="100" width="180" height="8" fill="#0F1F30" opacity="0.8" />
      <rect x="60" y="120" width="140" height="6" fill="#8C95A6" />
      <circle cx="260" cy="50" r="18" fill="#D4841A" />
      <ellipse cx="160" cy="200" rx="24" ry="8" fill="#2E4057" opacity="0.2" />
    </svg>
  );
}

export function Frame05() {
  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="320" height="240" fill="#0F1F30" />
      <rect x="60" y="40" width="200" height="120" fill="#2E4057" rx="4" />
      <rect x="80" y="70" width="80" height="50" fill="#8C95A6" opacity="0.4" />
      <ellipse cx="200" cy="95" rx="30" ry="40" fill="#E2E5EA" opacity="0.15" />
      <circle cx="160" cy="200" r="10" fill="#D4841A" />
    </svg>
  );
}

export function Frame06() {
  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="320" height="240" fill="#F4F5F7" />
      <rect x="50" y="50" width="220" height="140" fill="#FAFAF8" stroke="#2E4057" strokeWidth="0.5" />
      <rect x="70" y="80" width="120" height="6" fill="#8C95A6" />
      <rect x="70" y="100" width="160" height="40" fill="#E2E5EA" />
      <rect x="70" y="150" width="80" height="20" fill="rgba(212,132,26,0.2)" stroke="#D4841A" strokeWidth="0.5" />
      <circle cx="240" cy="70" r="8" fill="#D4841A" />
    </svg>
  );
}

export function Frame07() {
  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="320" height="240" fill="#2E4057" />
      <path d="M0 120 Q80 80 160 120 T320 100 L320 240 L0 240 Z" fill="#0F1F30" />
      <circle cx="260" cy="50" r="28" fill="#D4841A" />
      <ellipse cx="100" cy="160" rx="16" ry="40" fill="#8C95A6" />
      <rect x="180" y="140" width="60" height="4" fill="#E2E5EA" opacity="0.4" transform="rotate(-15 210 142)" />
    </svg>
  );
}

export function Frame08() {
  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="320" height="240" fill="#0F1F30" />
      <rect x="40" y="100" width="120" height="80" fill="#2E4057" />
      <ellipse cx="200" cy="150" rx="50" ry="20" fill="#2E4057" />
      <circle cx="80" cy="80" r="6" fill="#D4841A" />
      <circle cx="100" cy="75" r="6" fill="#D4841A" />
      <circle cx="120" cy="85" r="6" fill="#D4841A" />
      <rect x="180" y="130" width="100" height="6" fill="#8C95A6" opacity="0.5" />
    </svg>
  );
}

export function Frame09() {
  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="320" height="240" fill="#E2E5EA" />
      <path d="M40 180 C80 120 120 200 160 140 S240 100 280 160" stroke="#2E4057" strokeWidth="3" fill="none" />
      <ellipse cx="80" cy="160" rx="18" ry="28" fill="#0F1F30" />
      <ellipse cx="240" cy="150" rx="18" ry="28" fill="#0F1F30" />
      <circle cx="160" cy="60" r="20" fill="#D4841A" />
    </svg>
  );
}

export const frames = [Frame01, Frame02, Frame03, Frame04, Frame05, Frame06, Frame07, Frame08, Frame09];
