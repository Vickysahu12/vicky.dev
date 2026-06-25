import { useTypewriter } from '../../hooks/useTypewriter'
import { Button } from '../ui/Button'
import { FaGithub, FaLinkedin, FaInstagram, FaArrowDown } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const roles = [
  'React Native Developer.',
  'React Developer.',
  'Frontend Engineer.',
  'SaaS Founder in Progress.',
  'Building Outriva.AI.',
]

const socials = [
  { icon: FaGithub, href: 'https://github.com/Vickysahu12', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/vicky-sahu-234679326/', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://www.instagram.com/vickyfied12/', label: 'Instagram' },
]

export function Hero() {
  const typed = useTypewriter(roles, 80, 2200)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Thoda delay taaki page paint ho sake pehle
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  const base = {
    transition: 'opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)',
  }

  const fromTop = (delay = 0) => ({
    ...base,
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(-30px)',
    transitionDelay: `${delay}ms`,
  })

  const fromLeft = (delay = 0) => ({
    ...base,
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateX(0)' : 'translateX(-60px)',
    transitionDelay: `${delay}ms`,
  })

  const fromRight = (delay = 0) => ({
    ...base,
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateX(0)' : 'translateX(60px)',
    transitionDelay: `${delay}ms`,
  })

  const fromBottom = (delay = 0) => ({
    ...base,
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(40px)',
    transitionDelay: `${delay}ms`,
  })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#00FFB2 1px, transparent 1px), linear-gradient(90deg, #00FFB2 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow blob */}
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full -z-10 pointer-events-none"
        style={{
          background: 'rgba(0,255,178,0.08)',
          filter: 'blur(120px)',
        }}
      />

      {/* Available badge — upar se aata hai */}
      <div style={fromTop(0)} className="inline-flex items-center gap-2 mb-8 w-fit">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span className="font-mono text-xs text-accent tracking-widest uppercase border border-accent/30 px-3 py-1 rounded-full">
          Available for hire · Bangalore
        </span>
      </div>

      {/* Main heading — VICKY left se, SAHU. right se */}
      <div className="mb-6 overflow-hidden">
        <h1
          style={fromLeft(150)}
          className="font-display text-7xl md:text-[9rem] font-extrabold leading-none tracking-tight"
        >
          VICKY
        </h1>
        <h1
          style={{
            ...fromRight(300),
            backgroundImage: 'linear-gradient(135deg, #00FFB2, #00cc8e)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          className="font-display text-7xl md:text-[9rem] font-extrabold leading-none tracking-tight"
        >
          SAHU.
        </h1>
      </div>

      {/* Typewriter — neeche se */}
      <div style={fromBottom(450)} className="mb-8 h-8 flex items-center">
        <span className="font-mono text-lg md:text-xl text-text-dim">
          {typed}
          <span className="text-accent animate-blink ml-0.5">|</span>
        </span>
      </div>

      {/* Bio — neeche se, thoda baad */}
      <p
        style={fromBottom(550)}
        className="font-body text-text-dim text-base md:text-lg max-w-xl mb-10 leading-relaxed"
      >
        BCA graduate building apps people love with{' '}
        <span className="text-accent font-medium">React & React Native</span>.
        Founder-in-progress. Ex-intern at{' '}
        <span className="text-text">Kaaya AI</span> · Building{' '}
        <span className="text-text">LingoLift</span>,{' '}
        <span className="text-text">WEBNETIC AI</span> &{' '}
        <span className="text-text">Outriva.AI</span>.
      </p>

      {/* CTAs — neeche se */}
      <div style={fromBottom(650)} className="flex flex-wrap items-center gap-4 mb-12">
        <Button href="#projects">View Work</Button>
        <Button href="/blog" variant="outline">Read Blog</Button>
      </div>

      {/* Socials — neeche se, sabse last */}
      <div style={fromBottom(750)} className="flex items-center gap-4">
        {socials.map(({ icon: Icon, href, label }) => (
         <a 
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-text-dim hover:border-accent/50 hover:text-accent transition-all duration-200 hover:-translate-y-0.5"
          >
            <Icon size={17} />
          </a>
        ))}
        <span className="h-px w-8 bg-border" />
        <a
          href="mailto:bikisahu161@gmail.com"
          className="font-mono text-xs text-text-dim hover:text-accent transition-colors"
        >
          bikisahu161@gmail.com
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-dim"
        style={{ animation: 'float 2s ease-in-out infinite' }}
      >
        <FaArrowDown size={16} />
        <span className="font-mono text-[10px] tracking-widest">SCROLL</span>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-6px); }
        }
      `}</style>
    </section>
  )
}