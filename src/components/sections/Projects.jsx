import { useScrollReveal } from '../../hooks/useScrollReveal'
import { SectionLabel } from '../ui/SectionLabel'
import { Tag } from '../ui/Tag'
import { Button } from '../ui/Button'
import { projects } from '../../data/projects'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { HiArrowUpRight } from 'react-icons/hi2'

const statusStyles = {
  green:  { border: 'rgba(0,255,178,0.4)',   color: '#00FFB2',  bg: 'rgba(0,255,178,0.08)'  },
  blue:   { border: 'rgba(96,165,250,0.4)',  color: '#60a5fa',  bg: 'rgba(96,165,250,0.08)' },
  purple: { border: 'rgba(167,139,250,0.4)', color: '#a78bfa',  bg: 'rgba(167,139,250,0.08)'},
}

function ProjectVisual({ project, featured }) {
  // Jab real image ho toh yeh render hoga
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)',
        }}
        className="group-hover:scale-[1.04]"
      />
    )
  }

  // Placeholder — mock UI screens
  return (
    <div
      className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
    >
      <div
        style={{
          background: '#111827',
          borderRadius: '10px',
          border: '1px solid #1f2937',
          padding: featured ? '16px' : '12px',
          width: featured ? '340px' : '200px',
          transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)',
        }}
        className="group-hover:scale-[1.04]"
      >
        <div style={{ height: '6px', borderRadius: '3px', background: 'rgba(0,255,178,0.4)', width: '60%', marginBottom: '8px' }} />
        <div style={{ height: '6px', borderRadius: '3px', background: '#1f2937', width: '40%', marginBottom: '12px' }} />
        <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
          <div style={{ height: '40px', borderRadius: '6px', background: 'rgba(0,255,178,0.12)', flex: 1 }} />
          <div style={{ height: '40px', borderRadius: '6px', background: '#1f2937', flex: 1 }} />
          {featured && <div style={{ height: '40px', borderRadius: '6px', background: '#1f2937', flex: 1 }} />}
        </div>
        <div style={{ height: '6px', borderRadius: '3px', background: '#1f2937', width: '70%', marginBottom: '6px' }} />
        <div style={{ height: '6px', borderRadius: '3px', background: '#1f2937', width: '45%' }} />
      </div>
    </div>
  )
}

function ProjectCard({ project, index, featured, style }) {
  const s = statusStyles[project.statusColor] || statusStyles.green

  return (
    <div
      style={style}
      className={`relative group rounded-2xl border border-border bg-surface overflow-hidden transition-all duration-300 hover:border-accent/30 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,255,178,0.08)] ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Visual area */}
      <div
        style={{ height: featured ? '280px' : '210px', overflow: 'hidden', position: 'relative' }}
      >
        <ProjectVisual project={project} featured={featured} />

        {/* Gradient overlay — bottom fade */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, #0D1117 0%, transparent 60%)',
        }} />

        {/* Top badges */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          right: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <span style={{
            fontSize: '11px',
            fontFamily: 'monospace',
            padding: '3px 10px',
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.1)',
            color: 'rgba(255,255,255,0.5)',
            background: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(8px)',
          }}>
            {project.tag}
          </span>
          <span style={{
            fontSize: '11px',
            fontFamily: 'monospace',
            padding: '3px 10px',
            borderRadius: '20px',
            border: `1px solid ${s.border}`,
            color: s.color,
            background: s.bg,
            backdropFilter: 'blur(8px)',
          }}>
            {project.status}
          </span>
        </div>

        {/* Hover arrow */}
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          width: '28px',
          height: '28px',
          borderRadius: '8px',
          background: 'rgba(0,255,178,0.1)',
          border: '1px solid rgba(0,255,178,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'opacity 0.3s',
        }} className="opacity-0 group-hover:opacity-100">
          <HiArrowUpRight size={14} className="text-accent" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <div className="flex justify-between items-center mb-3">
          <span className="font-mono text-xs text-text-dim">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-mono text-xs text-text-dim">{project.year}</span>
        </div>

        <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 transition-colors duration-200 group-hover:text-accent">
          {project.title}
        </h3>

        <p className="text-text-dim font-body text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((t) => (
            <Tag key={t} variant="default">{t}</Tag>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {project.live && (
            <Button variant="primary" href={project.live}>
              <FaExternalLinkAlt size={12} /> Live
            </Button>
          )}
          <Button variant="outline" href={project.github}>
            <FaGithub size={12} /> GitHub
          </Button>
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const { ref, isVisible } = useScrollReveal()

  const base = {
    transition: 'opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)',
  }

  const fromLeft = (delay = 0) => ({
    ...base,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
    transitionDelay: `${delay}ms`,
  })

  const fromRight = (delay = 0) => ({
    ...base,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
    transitionDelay: `${delay}ms`,
  })

  const fromBottom = (delay = 0) => ({
    ...base,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    transitionDelay: `${delay}ms`,
  })

  return (
    <section id="projects" className="py-28 w-full">
      <div ref={ref} className="px-4 md:px-6 max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div style={fromLeft(0)}>
            <SectionLabel number={2} label="Selected Works" />
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mt-2">
              Selected{' '}
              <span style={{
                backgroundImage: 'linear-gradient(135deg, #00FFB2, #00cc8e)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Experiments.
              </span>
            </h2>
          </div>
          <a
            href="https://github.com/Vickysahu12"
            target="_blank"
            rel="noopener noreferrer"
            style={fromRight(0)}
            className="hidden md:flex items-center gap-2 text-sm text-text-dim hover:text-accent transition-colors font-mono"
          >
            All on GitHub <HiArrowUpRight size={14} />
          </a>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              featured={project.featured && index === 0}
              style={fromBottom(index * 120)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}