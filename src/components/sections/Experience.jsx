import { useScrollReveal } from '../../hooks/useScrollReveal'
import { SectionLabel } from '../ui/SectionLabel'
import { Tag } from '../ui/Tag'
import { experience } from '../../data/experience'
import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.25) {
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

function AnimatedLine({ containerRef }) {
  const lineRef = useRef(null)

  useEffect(() => {
    const line = lineRef.current
    const container = containerRef.current
    if (!container || !line) return

    let raf = null
    const update = () => {
      const rect = container.getBoundingClientRect()
      const viewportCenter = window.innerHeight * 0.65
      const scrolled = viewportCenter - rect.top
      const pct = Math.min(100, Math.max(0, (scrolled / rect.height) * 100))
      line.style.height = pct + '%'
      raf = null
    }
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [containerRef])

  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border hidden md:block">
      <div
        ref={lineRef}
        style={{
          height: '0%',
          width: '100%',
          background: 'linear-gradient(to bottom, #00FFB2, #00C9FF)',
          transition: 'height 0.15s ease-out',
          boxShadow: '0 0 10px rgba(0,255,178,0.6)',
        }}
      />
    </div>
  )
}

function ExperienceItem({ item, index }) {
  const [cardRef, cardInView] = useInView(0.25)
  const isLeft = index % 2 === 0

  return (
    <div ref={cardRef} className="relative">

      {/* Mobile layout — single column with left line */}
      <div className="md:hidden relative pl-12">
        <div className="absolute left-3 top-0 bottom-0 w-px bg-border">
          <div
            style={{
              height: cardInView ? '100%' : '0%',
              width: '100%',
              background: 'linear-gradient(to bottom, #00FFB2, #00C9FF)',
              transition: 'height 0.8s cubic-bezier(0.16,1,0.3,1)',
            }}
          />
        </div>
        <Dot inView={cardInView} index={index} mobile />
        <Card item={item} inView={cardInView} delay={0} />
      </div>

      {/* Desktop layout — zigzag */}
      <div
        className="hidden md:grid md:grid-cols-2 md:gap-12 items-center mb-2"
      >
        {/* Left slot */}
        <div className={isLeft ? 'flex justify-end' : ''}>
          {isLeft && <Card item={item} inView={cardInView} delay={index * 0.1} align="right" />}
        </div>

        {/* Right slot */}
        <div className={!isLeft ? '' : ''}>
          {!isLeft && <Card item={item} inView={cardInView} delay={index * 0.1} align="left" />}
        </div>

        {/* Center dot */}
        <Dot inView={cardInView} index={index} />
      </div>
    </div>
  )
}

function Dot({ inView, index, mobile }) {
  return (
    <div
      className={mobile
        ? "absolute left-1 top-1 w-4 h-4 rounded-full flex items-center justify-center z-10"
        : "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full flex items-center justify-center z-10"
      }
      style={{
        background: inView ? '#080B0F' : '#0D1117',
        border: `2px solid ${inView ? '#00FFB2' : '#374151'}`,
        transition: `border-color 0.4s ease ${index * 0.1 + 0.15}s`,
      }}
    >
      {inView && (
        <span
          style={{
            position: 'absolute',
            inset: '-6px',
            borderRadius: '9999px',
            border: '2px solid #00FFB2',
            opacity: 0.5,
            animation: 'pulse-ring 2s ease-out infinite',
            animationDelay: `${index * 0.1 + 0.3}s`,
          }}
        />
      )}
      <div
        className="w-2 h-2 rounded-full"
        style={{
          background: inView ? '#00FFB2' : '#374151',
          transition: `background 0.4s ease ${index * 0.1 + 0.15}s`,
        }}
      />
    </div>
  )
}

function Card({ item, inView, delay, align = 'left' }) {
  return (
    <div
      className="w-full max-w-md"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? 'translateX(0) scale(1)'
          : `translateX(${align === 'right' ? '40px' : '-40px'}) scale(0.96)`,
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      <div className="bg-surface border border-border rounded-2xl p-6 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,255,178,0.08)] group">
        <div className={`flex flex-wrap items-start gap-3 mb-3 ${align === 'right' ? 'justify-between' : 'justify-between'}`}>
          <div>
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-1">
              {item.type}
            </p>
            <h3 className="font-display text-xl font-bold group-hover:text-accent transition-colors duration-200">
              {item.role}
            </h3>
            <p className="text-text-dim font-body text-sm mt-0.5">{item.company}</p>
          </div>
          <span className="font-mono text-xs text-text-dim border border-border px-3 py-1 rounded-full flex-shrink-0">
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
  const { ref, isVisible } = useScrollReveal()
  const timelineRef = useRef(null)

  return (
    <>
      <style>{`
        @keyframes pulse-ring {
          0%   { transform: scale(1); opacity: 0.5; }
          70%  { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>

      <section id="experience" className="py-28 w-full overflow-hidden">
        <div className="px-4 md:px-6 max-w-6xl mx-auto">
          <div ref={ref}>

            {/* Header */}
            <div
              className="text-center mb-16"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
                transition: 'opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)',
              }}
            >
              <SectionLabel number={4} label="The Odyssey" center />
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
                A Path of{' '}
                <span style={{
                  backgroundImage: 'linear-gradient(135deg, #00FFB2, #00cc8e)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>Mastery.</span>
              </h2>
            </div>

            <div className="relative" ref={timelineRef}>
              <AnimatedLine containerRef={timelineRef} />
              <div className="space-y-10 md:space-y-16">
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