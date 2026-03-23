import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const steps = [20, 45, 70, 90, 100]
    let i = 0
    const interval = setInterval(() => {
      if (i < steps.length) {
        setProgress(steps[i])
        i++
      } else {
        clearInterval(interval)
        setTimeout(() => {
          setDone(true)
          setTimeout(onDone, 600)
        }, 300)
      }
    }, 220)
    return () => clearInterval(interval)
  }, [onDone])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] bg-[#050508] flex flex-col items-center justify-center gap-8"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-4xl tracking-tight grad-text"
          >
            PS
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-px bg-white/8 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-accent via-purple-500 to-cyan-400 rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-[10px] text-white/20 tracking-widest uppercase"
          >
            {progress < 100 ? 'Loading' : 'Ready'}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
