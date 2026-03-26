import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { STATS } from '../utils/data'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } }
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="hero">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(91,90,246,0.08)_0%,rgba(5,5,8,0.6)_70%)]" />

      {/* Grid lines overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <motion.div variants={container} initial="hidden" animate="show">

          {/* Eyebrow */}
          <motion.div variants={item} className="section-label mb-6">
            Software Engineer · Full Stack · Cloud · AI
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="font-display font-semibold leading-none tracking-tight mb-4"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}
          >
            <span className="block text-white/90">Priyansh</span>
            <span className="block grad-text">Suthar.</span>
          </motion.h1>

          {/* Type animation */}
          <motion.div variants={item} className="font-mono text-sm text-white/40 mb-6 tracking-wide">
            <span className="text-white/20">$ </span>
            <TypeAnimation
              sequence={[
                'building scalable backend systems',
                2000,
                'shipping AI-powered products',
                2000,
                'deploying cloud infrastructure',
                2000,
                'seeking new opportunities in the USA',
                3000,
              ]}
              repeat={Infinity}
              className="text-cyan-400/70"
            />
            <span className="animate-pulse text-white/60">_</span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="text-white/45 max-w-xl text-base leading-relaxed mb-10"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            3+ years building production-grade systems across Java, Python, and React.
            Currently at Harvard Pilgrim Healthcare. Certified in AWS, Azure, Claude Code, and Generative AI.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-3 mb-16">
            <a
              href="#contact"
              className="font-mono text-xs tracking-wider px-6 py-3 bg-accent hover:bg-[#6c6bf7] text-white rounded transition-all duration-200 flex items-center gap-2"
            >
              Get in touch <span>→</span>
            </a>
            <a
              href="#projects"
              className="font-mono text-xs tracking-wider px-6 py-3 border border-white/10 hover:border-white/25 text-white/50 hover:text-white/80 rounded transition-all duration-200"
            >
              View projects
            </a>
            <a
              href="#ai"
              className="font-mono text-xs tracking-wider px-6 py-3 border border-cyan-500/20 hover:border-cyan-500/40 text-cyan-400/60 hover:text-cyan-400 rounded transition-all duration-200 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Chat with AI
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={item} className="flex flex-wrap gap-8">
            {STATS.map((stat, i) => (
              <div key={i}>
                <div
                  className="font-display font-semibold text-white/90"
                  style={{ fontSize: '2rem', lineHeight: 1 }}
                >
                  {stat.value}{stat.suffix}
                </div>
                <div className="font-mono text-xs text-white/25 tracking-widest uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-widest text-white/20 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"
        />
      </motion.div>
    </section>
  )
}
