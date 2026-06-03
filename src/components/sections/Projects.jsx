import { useScrollReveal } from '../../hooks/useScrollReveal'
import { SectionLabel } from '../ui/SectionLabel'
import { Tag } from '../ui/Tag'
import { Button } from '../ui/Button'
import { projects } from '../../data/projects'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { HiArrowUpRight } from 'react-icons/hi2'

function ProjectCard({ project, featured }) {
  return (
    <div
      className={`relative group rounded-2xl border border-border bg-surface overflow-hidden transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_8px_40px_#00FFB210] ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Top gradient bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

      <div className={`p-6 md:p-8 ${featured ? 'md:grid md:grid-cols-2 md:gap-8 md:items-start' : ''}`}>
        <div>
          {/* Tag + year */}
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs text-text-dim">{project.tag}</span>
            <span className="font-mono text-xs text-text-dim">{project.year}</span>
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 group-hover:text-accent transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-text-dim font-body text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((t) => (
              <Tag key={t} variant="default">{t}</Tag>
            ))}
          </div>
        </div>

        <div className={`flex items-center gap-3 ${featured ? 'md:justify-end md:items-start md:flex-col md:gap-3' : ''}`}>
          <Tag variant="status">{project.status}</Tag>

          <div className="flex gap-2 ml-auto md:ml-0">
            {project.live && (
              <Button variant="primary" href={project.live}>
                <FaExternalLinkAlt size={14} /> Live
              </Button>
            )}
            <Button variant="outline" href={project.github}>
              <FaGithub size={14} /> Code
            </Button>
          </div>
        </div>
      </div>

      {/* Corner arrow */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <HiArrowUpRight size={16} className="text-accent" />
      </div>
    </div>
  )
}

export function Projects() {
  const ref = useScrollReveal()

  return (
    <section id="projects" className="py-28 w-full">
  <div className="px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <SectionLabel number={2} label="Selected Works" />
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mt-2">
              Selected <span className="text-gradient">Experiments.</span>
            </h2>
          </div>
          <a
            href="https://github.com/Vickysahu12"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm text-text-dim hover:text-accent transition-colors font-mono"
          >
            All on GitHub <HiArrowUpRight size={14} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} featured={project.featured && projects.indexOf(project) === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
