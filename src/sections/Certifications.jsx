import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CERTIFICATIONS, EDUCATION } from '../utils/data'

export default function Certifications() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="certifications" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-20">

          {/* Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="section-label mb-4">Credentials</div>
              <h2 className="section-heading mb-10">Certifications</h2>
            </motion.div>

            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass rounded-xl p-4 flex items-center gap-4 hover:border-white/10 transition-all duration-300 group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0"
                    style={{ background: cert.color + '15', border: `1px solid ${cert.color}25` }}
                  >
                    {cert.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-display font-semibold text-sm text-white/80 leading-tight mb-0.5">
                      {cert.name}
                    </div>
                    <div className="font-mono text-[10px] text-white/25 tracking-wide">
                      {cert.issuer}
                    </div>
                  </div>
                  <div
                    className="w-1.5 h-1.5 rounded-full shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ background: cert.color }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="section-label mb-4">Academic</div>
              <h2 className="section-heading mb-10">Education</h2>
            </motion.div>

            <div className="space-y-4">
              {EDUCATION.map((edu, i) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.1 }}
                  className="glass rounded-xl p-6 hover:border-white/10 transition-all duration-300"
                >
                  <div className="font-display font-semibold text-white/80 text-base mb-1 leading-tight">
                    {edu.degree}
                  </div>
                  <div className="font-sans text-sm text-cyan-400/60 mb-2">{edu.school}</div>
                  <div className="font-mono text-[10px] text-white/20 tracking-wider">{edu.period}</div>
                </motion.div>
              ))}

              {/* Open to work card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="rounded-xl p-6 border border-accent/20 bg-accent/5 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -translate-y-12 translate-x-12" />
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-mono text-[10px] text-green-400 tracking-widest uppercase">Open to work</span>
                </div>
                <div className="font-display font-semibold text-white/75 text-sm leading-snug mb-2">
                  Seeking Full Stack, DevOps & AI/ML roles in the USA
                </div>
                <div className="font-mono text-[10px] text-white/25">
                  Remote · Relocation · OPT/CPT · Visa sponsorship
                </div>
              </motion.div>
            </div>
          </div>

        </div>
        <div className="mt-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  )
}
