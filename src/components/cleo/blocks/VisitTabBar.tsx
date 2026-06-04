import './visit-shell.css';

const tabs = [
  { label: 'Treatment', active: true },
  { label: 'SOAP', active: false },
  { label: 'Plan (POC)', active: false },
  { label: 'Bill', active: false },
];

export default function VisitTabBar() {
  return (
    <div className="visit-tabs" role="tablist" aria-label="Visit sections">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          type="button"
          className={`visit-tab${tab.active ? ' visit-tab--active' : ''}`}
          role="tab"
          aria-selected={tab.active}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
