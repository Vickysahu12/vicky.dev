import { useScrollReveal } from '../../hooks/useScrollReveal'
import { SectionLabel } from '../ui/SectionLabel'
import { Tag } from '../ui/Tag'
import { experience } from '../../data/experience'
import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.3) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return [ref, inView]
}

function AnimatedLine() {
  const containerRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const line = lineRef.current
    if (!container || !line) return

    const onScroll = () => {
      const rect = container.getBoundingClientRect()
      const total = rect.height
      const scrolled = Math.max(0, window.innerHeight * 0.6 - rect.top)
      const pct = Math.min(100, Math.max(0, (scrolled / total) * 100))
      line.style.height = pct + '%'
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div ref={containerRef} className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border">
      <div
        ref={lineRef}
        style={{
          height: '0%',
          width: '100%',
          background: 'linear-gradient(to bottom, #00FFB2, #00C9FF)',
          transition: 'height 0.1s linear',
          boxShadow: '0 0 8px #00FFB280',
        }}
      />
    </div>
  )
}

function ExperienceItem({ item, index }) {
  const [cardRef, cardInView] = useInView(0.2)

  return (
    <div
      ref={cardRef}
      className="relative pl-14 md:pl-20"
      style={{
        opacity: cardInView ? 1 : 0,
        transform: cardInView ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
      }}
    >
      {/* Dot */}
      <div
        className="absolute left-2 md:left-[18px] top-1 w-4 h-4 rounded-full border-2 border-accent bg-bg flex items-center justify-center"
        style={{
          boxShadow: cardInView ? '0 0 0 4px #00FFB220, 0 0 12px #00FFB240' : 'none',
          transition: `box-shadow 0.4s ease ${index * 0.1 + 0.2}s`,
        }}
      >
        {/* Ping ring */}
        {cardInView && (
          <span
            style={{
              position: 'absolute',
              inset: '-4px',
              borderRadius: '9999px',
              border: '2px solid #00FFB2',
              animation: 'ping 1.5s ease-out forwards',
            }}
          />
        )}
        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
      </div>

      {/* Card */}
      <div className="bg-surface border border-border rounded-2xl p-6 hover:border-accent/30 transition-colors group">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-1">
              {item.type}
            </p>
            <h3 className="font-display text-xl font-bold group-hover:text-accent transition-colors">
              {item.role}
            </h3>
            <p className="text-text-dim font-body text-sm mt-0.5">{item.company}</p>
          </div>
          <span className="font-mono text-xs text-text-dim border border-border px-3 py-1 rounded-full">
            {item.period}
          </span>
        </div>

        <p className="text-text-dim font-body text-sm leading-relaxed mb-4">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Tag key={tag} variant="default">{tag}</Tag>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Experience() {
  const ref = useScrollReveal()

  return (
    <>
      {/* Ping keyframe */}
      <style>{`
        @keyframes ping {
          0%   { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.2); opacity: 0; }
        }
      `}</style>

      <section id="experience" className="py-28 w-full">
        <div className="px-4 md:px-6 max-w-6xl mx-auto">
          <div ref={ref} className="section-reveal">
            <SectionLabel number={4} label="The Odyssey" />
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-14">
              A Path of <span className="text-gradient">Mastery.</span>
            </h2>

            <div className="relative">
              <AnimatedLine />

              <div className="space-y-10">
                {experience.map((item, i) => (
                  <ExperienceItem key={item.id} item={item} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}