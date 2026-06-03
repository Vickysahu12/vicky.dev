import { useTypewriter } from '../../hooks/useTypewriter'
import { Button } from '../ui/Button'
import { FaGithub, FaLinkedin, FaInstagram, FaArrowDown } from 'react-icons/fa'
import{Link} from 'react-router-dom'

const roles = [
  'React Native Developer.',
  'React Developer.',
  'Frontend Engineer.',
  'Aspiring Founder.',
  'Builder of Things.',
]

const socials = [
  { icon: FaGithub, href: 'https://github.com/Vickysahu12', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/vicky-sahu-234679326/', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://www.instagram.com/vickyfied12/', label: 'Instagram' },
]

export function Hero() {
  const typed = useTypewriter(roles, 80, 2200)

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
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Available badge */}
      <div className="inline-flex items-center gap-2 mb-8 w-fit">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span className="font-mono text-xs text-accent tracking-widest uppercase border border-accent/30 px-3 py-1 rounded-full">
          Available for hire · Bangalore
        </span>
      </div>

      {/* Main heading */}
      <div className="mb-6">
        <h1 className="font-display text-7xl md:text-[9rem] font-extrabold leading-none tracking-tight">
          VICKY
        </h1>
        <h1 className="font-display text-7xl md:text-[9rem] font-extrabold leading-none tracking-tight text-gradient">
          SAHU.
        </h1>
      </div>

      {/* Typewriter role */}
      <div className="mb-8 h-8 flex items-center">
        <span className="font-mono text-lg md:text-xl text-text-dim">
          {typed}
          <span className="text-accent animate-blink ml-0.5">|</span>
        </span>
      </div>

      {/* Bio line */}
      <p className="font-body text-text-dim text-base md:text-lg max-w-xl mb-10 leading-relaxed">
        BCA graduate building apps people love with{' '}
        <span className="text-accent font-medium">React & React Native</span>.
        Founder-in-progress. Currently interning at{' '}
        <span className="text-text">Kaaya AI</span>, building{' '}
        <span className="text-text">LingoLift</span>, and running{' '}
        <span className="text-text">WEBNETIC AI</span>.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap items-center gap-4 mb-12">
        <Button href="#projects">View Work</Button>
        <Link to="/blog/why-react-native">
  <Button variant="outline">
    Read Blog
  </Button>
</Link>
      </div>

      {/* Social links */}
      <div className="flex items-center gap-4">
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
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-dim animate-float">
        <FaArrowDown size={16} />
        <span className="font-mono text-[10px] tracking-widest">SCROLL</span>
      </div>
    </section>
  )
}
