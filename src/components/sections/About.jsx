import { useScrollReveal } from '../../hooks/useScrollReveal'
import { SectionLabel } from '../ui/SectionLabel'
import { Tag } from '../ui/Tag'

const skills = [
  'React.js', 'React Native', 'Tailwind CSS', 'Framer Motion',
  'FastAPI', 'PostgreSQL', 'Supabase', 'TypeScript', 'Vite', 'Git',
]

const learning = [
  'System Design fundamentals',
  'TypeScript at scale',
  'Startup sales & GTM',
  'Building in public',
]

export function About() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="about" className="py-28 px-6 max-w-6xl mx-auto">
      <div ref={ref}>
        {/* SectionLabel bhi fade in karega */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
        >
          <SectionLabel number={1} label="About" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start mt-8">

          {/* Left — left se aayega */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-60px)',
              transition: 'opacity 0.7s cubic-bezier(0.4,0,0.2,1) 0.1s, transform 0.7s cubic-bezier(0.4,0,0.2,1) 0.1s',
            }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              Engineering with{' '}
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #00FFB2, #00cc8e)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Visual Precision.
              </span>
            </h2>

            <div className="space-y-4 text-text-dim font-body leading-relaxed text-[15px]">
              <p>
                I'm a frontend engineer and React Native developer who loves building
                products that feel as good as they look. Based in{' '}
                <span className="text-text">Bangalore</span>, open to on-site, hybrid,
                or remote roles.
              </p>
              <p>
                Ex-Frontend Intern at{' '}
                <span className="text-accent font-medium">Kaaya AI</span>, where I built
                UI for an AI platform. Currently running{' '}
                <span className="text-text">WEBNETIC AI</span> (my dev studio),
                developing <span className="text-text">LingoLift</span> — a full-stack
                mobile app for CAT aspirants — and building{' '}
                <span className="text-text">Outriva.AI</span>, an AI-powered B2B cold
                outreach tool for early-stage SaaS startups.
              </p>
              <p>
                Long-term goal: found a SaaS company. For now: ship great code, learn
                fast, and work with teams that care about quality.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Tag key={skill} variant="default">{skill}</Tag>
              ))}
            </div>
          </div>

          {/* Right — right se aayega, thoda delay */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(60px)',
              transition: 'opacity 0.7s cubic-bezier(0.4,0,0.2,1) 0.25s, transform 0.7s cubic-bezier(0.4,0,0.2,1) 0.25s',
            }}
          >
            <div className="space-y-6">
              {/* Currently */}
              <div className="bg-surface border border-border rounded-2xl p-6">
                <p className="font-mono text-xs text-accent tracking-widest mb-4 uppercase">
                  Currently
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"
                      style={{ boxShadow: '0 0 6px rgba(0,255,178,0.6)' }}
                    />
                    <span className="text-sm text-text-dim font-body">
                      Building <span className="text-text">Outriva.AI</span> — AI cold outreach for SaaS
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <span className="text-sm text-text-dim font-body">
                      Building <span className="text-text">LingoLift</span> (React Native + FastAPI)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                    <span className="text-sm text-text-dim font-body">
                      Running <span className="text-text">WEBNETIC AI</span> — dev studio for cafes & restaurants
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                    <span className="text-sm text-text-dim font-body">
                      Open to Frontend / React Native roles · <span className="text-text">Bangalore</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Learning */}
              <div className="bg-surface border border-border rounded-2xl p-6">
                <p className="font-mono text-xs text-accent tracking-widest mb-4 uppercase">
                  Currently Learning
                </p>
                <div className="space-y-2">
                  {learning.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="font-mono text-accent text-xs">→</span>
                      <span className="text-sm text-text-dim font-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social quick links */}
              <div className="bg-surface border border-border rounded-2xl p-6">
                <p className="font-mono text-xs text-accent tracking-widest mb-4 uppercase">
                  Find Me On
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: 'GitHub', sub: '@Vickysahu12', href: 'https://github.com/Vickysahu12' },
                    { label: 'LinkedIn', sub: 'vicky-sahu', href: 'https://www.linkedin.com/in/vicky-sahu-234679326/' },
                    { label: 'Instagram', sub: '@vickyfied12', href: 'https://www.instagram.com/vickyfied12/' },
                    { label: 'Email', sub: 'bikisahu161@...', href: 'mailto:bikisahu161@gmail.com' },
                  ].map(({ label, sub, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col gap-0.5 p-3 rounded-xl border border-border hover:border-accent/40 hover:bg-accent/5 transition-all group"
                    >
                      <span className="text-xs font-display font-semibold text-text group-hover:text-accent transition-colors">
                        {label}
                      </span>
                      <span className="font-mono text-[11px] text-text-dim">{sub}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}