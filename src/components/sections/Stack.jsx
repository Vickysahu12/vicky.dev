import { useScrollReveal } from '../../hooks/useScrollReveal'
import { SectionLabel } from '../ui/SectionLabel'
import { stack } from '../../data/stack'

export function Stack() {
  const { ref, isVisible } = useScrollReveal()

  const fromLeft = (delay = 0) => ({
    transition: 'opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
    transitionDelay: `${delay}ms`,
  })

  const cardReveal = (delay = 0) => ({
    transition: 'opacity 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.6s cubic-bezier(0.4,0,0.2,1)',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.96)',
    transitionDelay: `${delay}ms`,
  })

  const barWidth = (level, delay = 0) => ({
    width: isVisible ? `${level}%` : '0%',
    transition: `width 1s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  })

  return (
    <section id="stack" className="py-28 px-6 max-w-6xl mx-auto">
      <div ref={ref}>
        <div style={fromLeft(0)}>
          <SectionLabel number={3} label="The Power Grid" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-12">
            The{' '}
            <span style={{
              backgroundImage: 'linear-gradient(135deg, #00FFB2, #00cc8e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Stack.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stack.map((group, gi) => (
            <div
              key={group.category}
              style={cardReveal(gi * 140)}
              className="bg-surface border border-border rounded-2xl p-6 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,255,178,0.08)]"
            >
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-5">
                {group.category}
              </p>
              <div className="space-y-4">
                {group.items.map((item, ii) => {
                  const delay = gi * 140 + 300 + ii * 100
                  return (
                    <div key={item.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-body text-text">{item.name}</span>
                        <span
                          className="font-mono text-xs text-text-dim"
                          style={{
                            opacity: isVisible ? 1 : 0,
                            transition: `opacity 0.4s ease ${delay + 400}ms`,
                          }}
                        >
                          {item.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-border rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full relative"
                          style={{
                            ...barWidth(item.level, delay),
                            background: 'linear-gradient(90deg, #00FFB2, #00C9FF)',
                            boxShadow: isVisible ? '0 0 8px rgba(0,255,178,0.5)' : 'none',
                          }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}