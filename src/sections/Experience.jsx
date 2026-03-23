import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { EXPERIENCE } from '../utils/data'

export default function Experience() {
  const [active, setActive] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="experience" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="section-label mb-4">Work History</div>
          <h2 className="section-heading">Where I've worked</h2>
        </motion.div>

        <div className="grid md:grid-cols-[220px_1fr] gap-8">

          {/* Tab list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0"
          >
            {EXPERIENCE.map((exp, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative text-left px-4 py-3 rounded font-mono text-xs tracking-wide transition-all duration-200 whitespace-nowrap shrink-0
                  ${active === i
                    ? 'text-white bg-white/5 border border-white/10'
                    : 'text-white/35 hover:text-white/65 border border-transparent'
                  }`}
              >
                {active === i && (
                  <motion.span
                    layoutId="activeBar"
                    className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full"
                    style={{ background: EXPERIENCE[i].color }}
                  />
                )}
                <div className="font-semibold text-[11px] uppercase tracking-widest mb-0.5">
                  {exp.company.split(' ').slice(0, 2).join(' ')}
                </div>
                <div className="text-[10px] text-white/25">{exp.period.split('—')[0].trim()}</div>
              </button>
            ))}
          </motion.div>

          {/* Content panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="glass rounded-xl p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-display font-semibold text-xl text-white/90 mb-1">
                    {EXPERIENCE[active].role}
                  </h3>
                  <div className="font-mono text-xs text-white/40">
                    {EXPERIENCE[active].company} · {EXPERIENCE[active].location}
                  </div>
                </div>
                <span
                  className="font-mono text-[10px] px-3 py-1.5 rounded tracking-wider"
                  style={{
                    background: EXPERIENCE[active].color + '15',
                    color: EXPERIENCE[active].color,
                    border: `1px solid ${EXPERIENCE[active].color}30`,
                  }}
                >
                  {EXPERIENCE[active].period}
                </span>
              </div>

              <ul className="space-y-3">
                {EXPERIENCE[active].bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="flex gap-3 text-sm text-white/50 leading-relaxed"
                  >
                    <span
                      className="mt-2 w-1 h-1 rounded-full shrink-0"
                      style={{ background: EXPERIENCE[active].color }}
                    />
                    {b}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  )
}
