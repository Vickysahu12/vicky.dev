import { useScrollReveal } from '../../hooks/useScrollReveal'
import { SectionLabel } from '../ui/SectionLabel'
import { stack } from '../../data/stack'
export function Stack() {
  const { ref, isVisible } = useScrollReveal()

  const fromBottom = (delay = 0) => ({
    transition: 'opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
    transitionDelay: `${delay}ms`,
  })

  const fromLeft = (delay = 0) => ({
    transition: 'opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
    transitionDelay: `${delay}ms`,
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
          {stack.map((group, i) => (
            <div
              key={group.category}
              style={fromBottom(i * 120)}
              className="bg-surface border border-border rounded-2xl p-6 hover:border-accent/30 transition-colors"
            >
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-5">
                {group.category}
              </p>
              <div className="space-y-4">
                {group.items.map((item) => (
                  <div key={item.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-body text-text">{item.name}</span>
                      <span className="font-mono text-xs text-text-dim">{item.level}%</span>
                    </div>
                    <div className="h-1 bg-border rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent to-cyan-400 rounded-full transition-all duration-1000"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}