import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { PROJECTS } from '../utils/data'

function ProjectCard({ project, index, featured }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className={`group glass rounded-xl p-6 flex flex-col transition-all duration-300 hover:border-white/10 cursor-default relative overflow-hidden ${
        featured ? 'md:col-span-1' : ''
      }`}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top right, ${project.color}10 0%, transparent 60%)`
        }}
      />

      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
          style={{ background: project.color + '15', border: `1px solid ${project.color}25` }}
        >
          {project.icon}
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[10px] text-white/20 hover:text-white/60 transition-colors tracking-wider flex items-center gap-1.5 border border-white/5 hover:border-white/15 px-2.5 py-1.5 rounded"
          onClick={e => e.stopPropagation()}
        >
          GitHub ↗
        </a>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div
          className="font-mono text-[10px] tracking-widest uppercase mb-1"
          style={{ color: project.color }}
        >
          {project.tagline}
        </div>
        <h3 className="font-display font-semibold text-white/85 text-lg mb-3 leading-tight">
          {project.name}
        </h3>
        <p className="text-sm text-white/35 leading-relaxed mb-4" style={{ fontFamily: 'Satoshi' }}>
          {project.description}
        </p>
      </div>

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
        {project.stack.map(s => (
          <span key={s} className="tag-pill">{s}</span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })
  const featured = PROJECTS.filter(p => p.featured)
  const rest = PROJECTS.filter(p => !p.featured)

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="section-label mb-4">Work</div>
          <h2 className="section-heading mb-4">Things I've built</h2>
          <p className="text-white/35 text-sm max-w-lg leading-relaxed" style={{ fontFamily: 'Satoshi' }}>
            From AI-powered productivity tools to cloud infrastructure and healthcare systems.
          </p>
        </motion.div>

        {/* Featured 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {featured.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} featured />
          ))}
        </div>

        {/* Rest 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {rest.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i + featured.length} />
          ))}
        </div>

        <div className="mt-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  )
}
