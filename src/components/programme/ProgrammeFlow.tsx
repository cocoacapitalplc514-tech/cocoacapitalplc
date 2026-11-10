type FlowStep = { label: string; detail?: string };

function FlowColumn({
  title,
  steps,
}: {
  title: string;
  steps: FlowStep[];
}) {
  return (
    <div>
      <h3 className="label mb-5 text-forest">{title}</h3>
      <ol className="space-y-0">
        {steps.map((step, index) => (
          <li key={step.label} className="relative flex gap-4 pb-6 last:pb-0">
            {index < steps.length - 1 && (
              <span
                className="absolute left-[11px] top-7 bottom-0 w-px bg-border"
                aria-hidden
              />
            )}
            <span
              className="relative z-10 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold bg-white text-xs font-semibold text-cocoa"
              aria-hidden
            >
              {index + 1}
            </span>
            <div>
              <p className="font-medium text-cocoa">{step.label}</p>
              {step.detail && (
                <p className="mt-1 text-sm text-muted">{step.detail}</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

const ISSUANCE_STEPS: FlowStep[] = [
  { label: "Investors", detail: "Subscribe to Notes under the Programme" },
  { label: "Cocoa Capital PLC", detail: "Issues Notes in Series and Tranches" },
  { label: "Subscription Accounts", detail: "Proceeds received into designated accounts" },
  {
    label: "Commercial Paper",
    detail: "Cocoa purchase financing",
  },
  {
    label: "Bonds",
    detail: "Approved refinancing purposes",
  },
  { label: "COCOBOD", detail: "Approved cocoa-sector financing applications" },
];

const REPAYMENT_STEPS: FlowStep[] = [
  { label: "Cocoa Sales" },
  { label: "Assigned Receivables" },
  { label: "Collections / Escrow Accounts" },
  { label: "Debt Service Accounts" },
  { label: "Trust / Paying Agent" },
  { label: "Noteholders" },
];

export function ProgrammeFlow() {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
      <FlowColumn title="Issuance path" steps={ISSUANCE_STEPS} />
      <FlowColumn title="Repayment path" steps={REPAYMENT_STEPS} />
    </div>
  );
}

export function RepaymentFlow() {
  const steps: FlowStep[] = [
    { label: "Cocoa Sales" },
    { label: "Assigned Cocoa Receivables" },
    { label: "Collections Escrow Account" },
    { label: "Debt Service Account" },
    { label: "Trust Account" },
    { label: "Noteholders" },
  ];

  return <FlowColumn title="Repayment structure" steps={steps} />;
}

export function ProceedsFlow({
  title,
  endpoint,
}: {
  title: string;
  endpoint: string;
}) {
  const steps: FlowStep[] = [
    { label: "Note Proceeds" },
    { label: "Subscription Account" },
    { label: "Proceeds Utilisation Account" },
    { label: endpoint },
  ];

  return <FlowColumn title={title} steps={steps} />;
}
