import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const socials = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/Vickysahu12' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/vicky-sahu-234679326/' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/vickyfied12/' },
  { icon: MdEmail, label: 'Email', href: 'mailto:bikisahu161@gmail.com' },
]

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experience', href: '#experience' },
]

const moreLinks = [
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: 'mailto:bikisahu161@gmail.com' },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-border bg-surface/50 overflow-hidden">
      {/* Subtle glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] pointer-events-none"
        style={{ background: 'rgba(0,255,178,0.04)', filter: 'blur(100px)' }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8 relative">

        {/* Top grid */}
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-border">

          {/* Brand column */}
          <div className="md:col-span-2">
            <p className="font-display font-bold text-2xl mb-3">
              VICKY<span className="text-accent">.</span>
            </p>
            <p className="text-text-dim font-body text-sm leading-relaxed max-w-sm mb-5">
              Frontend engineer and React Native developer building products that
              feel as good as they look. Currently building Outriva.AI and open
              to opportunities in Bangalore.
            </p>
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-xs text-accent tracking-widest uppercase">
                Available for hire
              </span>
            </div>
          </div>

          {/* Navigate column */}
          <div>
            <p className="font-mono text-xs text-text-dim tracking-widest uppercase mb-4">
              Navigate
            </p>
            <div className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-text-dim text-sm font-body hover:text-accent transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* More column */}
          <div>
            <p className="font-mono text-xs text-text-dim tracking-widest uppercase mb-4">
              More
            </p>
            <div className="flex flex-col gap-2.5">
              {moreLinks.map((link) => (
               <a 
                  key={link.label}
                  href={link.href}
                  className="text-text-dim text-sm font-body hover:text-accent transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">
          <p className="text-text-dim text-xs font-mono order-2 md:order-1">
            © {new Date().getFullYear()} Vicky Sahu · Built with Passion 🚀❤️
          </p>

          <div className="flex items-center gap-4 order-1 md:order-2">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-dim hover:border-accent/50 hover:text-accent hover:-translate-y-0.5 transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}

            <span className="h-5 w-px bg-border mx-1" />

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-dim hover:border-accent/50 hover:text-accent hover:-translate-y-0.5 transition-all duration-200"
            >
              <FaArrowUp size={13} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}