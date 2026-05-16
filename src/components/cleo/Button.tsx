import './cleo.css';

export type ButtonVariant = 'primary' | 'amber' | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={`cleo-btn cleo-btn--${variant} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonDemo() {
  return (
    <div className="button-demo">
      <div className="button-demo__item">
        <Button variant="primary">Sign note</Button>
        <span className="button-demo__label">Primary</span>
      </div>
      <div className="button-demo__item">
        <Button variant="amber">Sign and submit</Button>
        <span className="button-demo__label">Amber CTA (max one per page)</span>
      </div>
      <div className="button-demo__item">
        <Button variant="ghost">Edit draft</Button>
        <span className="button-demo__label">Ghost</span>
      </div>
    </div>
  );
}

export function ButtonStatesDemo() {
  return (
    <div className="button-demo button-demo--states">
      <div className="button-demo__item">
        <Button variant="primary" disabled>
          Sign note
        </Button>
        <span className="button-demo__label">Primary — disabled</span>
      </div>
    </div>
  );
}
