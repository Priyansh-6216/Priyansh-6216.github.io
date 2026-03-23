import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const LINKS = [
  { icon: '✉', label: 'Email', value: 'Priyanshdb11@gmail.com', href: 'mailto:Priyanshdb11@gmail.com' },
  { icon: 'in', label: 'LinkedIn', value: 'linkedin.com/in/priyanshx', href: 'https://linkedin.com/in/priyanshx' },
  { icon: '⌥', label: 'GitHub', value: 'github.com/Priyansh-6216', href: 'https://github.com/Priyansh-6216' },
]

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="contact" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label mb-4">Get in touch</div>
            <h2 className="section-heading mb-6">Let's connect</h2>
            <p className="text-white/40 text-sm leading-relaxed mb-4" style={{ fontFamily: 'Satoshi' }}>
              I'm actively looking for Full Stack, DevOps, and AI/ML engineering roles across the USA.
              Open to remote positions and willing to relocate.
            </p>
            <p className="text-white/25 font-mono text-xs leading-relaxed">
              Work authorization: OPT/CPT · Visa sponsorship required
            </p>

            {/* Big CTA */}
            <motion.a
              href="mailto:Priyanshdb11@gmail.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 mt-10 px-8 py-4 bg-accent hover:bg-[#6c6bf7] text-white rounded-xl font-mono text-sm tracking-wide transition-colors duration-200"
            >
              Say hello →
            </motion.a>
          </motion.div>

          {/* Right links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            {LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                whileHover={{ x: 6 }}
                className="glass rounded-xl p-4 flex items-center gap-4 hover:border-white/12 transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/15 flex items-center justify-center text-sm text-accent font-mono shrink-0">
                  {link.icon}
                </div>
                <div>
                  <div className="font-mono text-[10px] text-white/25 tracking-widest uppercase mb-0.5">{link.label}</div>
                  <div className="font-sans text-sm text-white/55 group-hover:text-white/80 transition-colors">{link.value}</div>
                </div>
                <div className="ml-auto text-white/20 group-hover:text-white/50 transition-colors text-sm">↗</div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
