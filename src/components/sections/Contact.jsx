import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Button } from '../ui/Button'
import { FaGithub, FaLinkedin, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const socials = [
  {
    icon: FaGithub,
    label: 'GitHub',
    sub: '@Vickysahu12',
    href: 'https://github.com/Vickysahu12',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    sub: 'vicky-sahu-234679326',
    href: 'https://www.linkedin.com/in/vicky-sahu-234679326/',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    sub: '@vickyfied12',
    href: 'https://www.instagram.com/vickyfied12/',
  },
  {
    icon: MdEmail,
    label: 'Email',
    sub: 'bikisahu161@gmail.com',
    href: 'mailto:bikisahu161@gmail.com',
  },
]

export function Contact() {
  const ref = useScrollReveal()

  return (
    <section id="contact" className="py-28 px-6 max-w-6xl mx-auto">
      <div ref={ref} className="section-reveal">
        {/* Big CTA */}
        <div className="rounded-3xl border border-border bg-surface p-10 md:p-16 text-center relative overflow-hidden mb-14">
          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
            06 / Get In Touch
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-extrabold leading-none mb-4">
            LET'S BUILD
          </h2>
          <h2 className="font-display text-5xl md:text-7xl font-extrabold leading-none text-gradient mb-6">
            THE FUTURE.
          </h2>
          <p className="text-text-dim font-body text-base max-w-md mx-auto mb-10">
            Open to React Native / React roles in Bangalore. Also up for freelance projects,
            collabs, and conversations about startups.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button href="mailto:bikisahu161@gmail.com">
              <MdEmail size={15} /> Say Hello
            </Button>
            <Button variant="outline" href="https://www.linkedin.com/in/vicky-sahu-234679326/">
              <FaLinkedin size={15} /> LinkedIn
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 mt-8 text-text-dim">
            <FaMapMarkerAlt size={13} />
            <span className="font-mono text-xs">Hyderabad → Bangalore</span>
          </div>
        </div>

        {/* Social grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socials.map(({ icon: Icon, label, sub, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-border bg-surface hover:border-accent/40 hover:bg-accent/5 transition-all duration-200 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-text-dim group-hover:border-accent/50 group-hover:text-accent transition-all">
                <Icon size={18} />
              </div>
              <div className="text-center">
                <p className="font-display font-semibold text-sm group-hover:text-accent transition-colors">
                  {label}
                </p>
                <p className="font-mono text-[11px] text-text-dim mt-0.5">{sub}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
