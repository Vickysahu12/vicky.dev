import { cn } from '../../utils/cn'

export function Button({ children, variant = 'primary', href, onClick, className, ...props }) {
  const base =
    'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-display font-semibold text-sm transition-all duration-200 cursor-pointer'

  const variants = {
    primary:
      'bg-accent text-bg hover:bg-accent/90 hover:shadow-[0_0_20px_#00FFB240] active:scale-95',
    outline:
      'border border-border text-text hover:border-accent/50 hover:text-accent hover:bg-accent/5 active:scale-95',
    ghost:
      'text-text-dim hover:text-accent hover:bg-accent/5 active:scale-95',
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cn(base, variants[variant], className)} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  )
}
