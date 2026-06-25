import { useState, useEffect } from 'react'
import { cn } from '../../utils/cn'
import logo from "../../assets/logo.webp"

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = scrolled || menuOpen

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 40,
          background: 'rgba(0,0,0,0.5)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s',
        }}
      />

      {/* Drawer */}
      <aside
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 45,
          height: '100vh',
          width: '260px',
          background: '#0D1117',
          borderRight: '1px solid #1A1F2E',
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '80px',
          paddingBottom: '32px',
          transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 350ms cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        {links.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'block',
              padding: '12px 24px',
              color: '#9ca3af',
              fontSize: '14px',
              textDecoration: 'none',
              borderBottom: i < links.length - 1 ? '1px solid rgba(26,31,46,0.5)' : 'none',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#00FFB2'}
            onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}
          >
            {link.label}
          </a>
        ))}
        <a
          href="mailto:bikisahu161@gmail.com"
          onClick={() => setMenuOpen(false)}
          style={{
            margin: '20px 24px 0',
            padding: '10px',
            textAlign: 'center',
            border: '1px solid rgba(0,255,178,0.4)',
            color: '#00FFB2',
            fontFamily: 'monospace',
            fontSize: '14px',
            borderRadius: '8px',
            textDecoration: 'none',
          }}
        >
          Hire Me
        </a>
      </aside>

      {/* Header */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
          background: isActive ? 'rgba(8,11,15,0.95)' : 'transparent',
          backdropFilter: isActive ? 'blur(20px)' : 'none',
          borderBottom: isActive ? '1px solid #1A1F2E' : '1px solid transparent',
        }}
      >
        <nav
          style={{
            width: '100%',
            height: '64px',
            padding: '0 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0,
              textDecoration: 'none',
            }}
          >
            <img
              src={logo}
              alt="Vicky Logo"
              style={{
                height: '76px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
                filter: 'brightness(0) saturate(100%) invert(88%) sepia(47%) saturate(600%) hue-rotate(100deg) brightness(105%)',
              }}
            />
          </a>

          {/* Desktop links */}
          <ul
            className="hidden md:flex"
            style={{ alignItems: 'center', gap: '24px', listStyle: 'none', margin: 0, padding: 0 }}
          >
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#00FFB2'}
                  onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="mailto:bikisahu161@gmail.com"
            className="hidden md:inline-flex"
            style={{
              alignItems: 'center',
              gap: '8px',
              border: '1px solid rgba(0,255,178,0.5)',
              color: '#00FFB2',
              fontSize: '14px',
              fontFamily: 'monospace',
              padding: '8px 16px',
              borderRadius: '8px',
              textDecoration: 'none',
              flexShrink: 0,
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#00FFB2'; e.currentTarget.style.color = '#000' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#00FFB2' }}
          >
            Hire Me
          </a>

          {/* Hamburger */}
          <button
  onClick={() => setMenuOpen(prev => !prev)}
  className="md:hidden flex"
  style={{
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '10px',
    flexShrink: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '6px',
    width: '48px',
    height: '48px',
  }}
  aria-label="Toggle menu"
>
            <span style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: 'white',
              borderRadius: '9999px',
              transition: 'all 0.3s',
              transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
            }} />
            <span style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: 'white',
              borderRadius: '9999px',
              transition: 'all 0.3s',
              opacity: menuOpen ? 0 : 1,
              transform: menuOpen ? 'scaleX(0)' : 'scaleX(1)',
            }} />
            <span style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: 'white',
              borderRadius: '9999px',
              transition: 'all 0.3s',
              transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
            }} />
          </button>
        </nav>
      </header>
    </>
  )
}