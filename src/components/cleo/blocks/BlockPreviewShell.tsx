import type { ReactNode } from 'react';
import './visit-shell.css';

interface Props {
  children: ReactNode;
  /** When true, locked band spans full frame width (no inner padding). */
  flush?: boolean;
}

export default function BlockPreviewShell({ children, flush = false }: Props) {
  return (
    <div className="visit-shell-frame block-preview-shell">
      {flush ? children : <div className="visit-shell-inner">{children}</div>}
    </div>
  );
}
