import { cn } from '../../utils/cn'

export function Tag({ children, variant = 'default', className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium border transition-colors',
        variant === 'accent' &&
          'bg-accent/10 text-accent border-accent/30 hover:bg-accent/20',
        variant === 'default' &&
          'bg-surface text-text-dim border-border hover:border-accent/40 hover:text-text',
        variant === 'status' &&
          'bg-green-500/10 text-green-400 border-green-500/30',
        className
      )}
    >
      {children}
    </span>
  )
}
