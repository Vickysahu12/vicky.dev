import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const socials = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/Vickysahu12' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/vicky-sahu-234679326/' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/vickyfied12/' },
  { icon: MdEmail, label: 'Email', href: 'mailto:bikisahu161@gmail.com' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-display font-bold text-lg">
            <span className="text-accent">VICKY.IN</span>
          </p>
          <p className="text-text-dim text-xs font-mono mt-1">
            © {new Date().getFullYear()} Vicky Sahu · Built with Passion 🚀❤️
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-dim hover:border-accent/50 hover:text-accent transition-all"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
