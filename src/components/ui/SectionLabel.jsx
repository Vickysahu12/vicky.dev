export function SectionLabel({ number, label }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono text-xs text-accent tracking-widest">
        {String(number).padStart(2, '0')} /
      </span>
      <span className="font-mono text-xs text-text-dim tracking-widest uppercase">
        {label}
      </span>
      <div className="h-px flex-1 bg-border max-w-[60px]" />
    </div>
  )
}
