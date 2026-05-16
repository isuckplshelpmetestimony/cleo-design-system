import './cleo.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  caption?: string;
  message?: string;
  error?: boolean;
}

export function Input({ label, caption, message, error = false, className = '', id, ...props }: InputProps) {
  const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const messageId = message && inputId ? `${inputId}-message` : undefined;

  return (
    <div className={`cleo-field${error ? ' cleo-field--error' : ''}`}>
      {label && (
        <label className="cleo-field__label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`cleo-input${error ? ' cleo-input--error' : ''} ${className}`.trim()}
        aria-describedby={messageId}
        aria-invalid={error || undefined}
        {...props}
      />
      {message && (
        <p id={messageId} className="cleo-field__message">
          {message}
        </p>
      )}
      {caption && <span className="cleo-field__caption">{caption}</span>}
    </div>
  );
}

export function InputDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Input label="Patient name" placeholder="Search patients…" caption="Default" />
      <Input label="Chief complaint" defaultValue="Left shoulder pain, 6 weeks" caption="Filled" />
      <Input
        label="Plan"
        defaultValue="Continue maintenance program weekly"
        error
        message="This phrasing may signal maintenance care to insurers. Suggested revision below."
        caption="Error"
      />
    </div>
  );
}
