import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SKILLS } from '../utils/data'

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="section-label mb-4">Skills & Stack</div>
          <h2 className="section-heading mb-6">What I build with</h2>
          <p className="text-white/40 max-w-xl text-sm leading-relaxed" style={{ fontFamily: 'Satoshi' }}>
            A polyglot engineer comfortable across the full stack — from JVM backend services to React frontends,
            Kubernetes deployments to Claude-powered AI features.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass rounded-lg p-5 hover:border-white/10 transition-all duration-300 group"
            >
              <div className="font-mono text-[10px] tracking-widest text-accent uppercase mb-3">
                {group.category}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map(item => (
                  <span key={item} className="tag-pill cursor-default">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider with gradient line */}
        <div className="mt-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  )
}
