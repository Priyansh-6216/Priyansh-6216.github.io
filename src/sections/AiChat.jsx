import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { AI_SYSTEM_PROMPT } from '../utils/data'

const QUICK_QUESTIONS = [
  "What's his tech stack?",
  "Tell me about his AI projects",
  "Is he open to new roles?",
  "What certifications does he have?",
  "Experience at Harvard Pilgrim?",
  "What makes him unique?",
]

function Message({ msg }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      {msg.role === 'assistant' && (
        <div className="w-6 h-6 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-[10px] mr-2 mt-0.5 shrink-0">
          ✦
        </div>
      )}
      <div
        className={`max-w-[80%] px-3.5 py-2.5 rounded-xl text-sm leading-relaxed ${
          msg.role === 'user'
            ? 'bg-accent text-white rounded-tr-sm'
            : 'bg-white/5 border border-white/8 text-white/65 rounded-tl-sm'
        }`}
      >
        {msg.content}
      </div>
    </motion.div>
  )
}

function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="flex items-center gap-2"
    >
      <div className="w-6 h-6 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-[10px] shrink-0">
        ✦
      </div>
      <div className="bg-white/5 border border-white/8 px-4 py-3 rounded-xl rounded-tl-sm flex gap-1.5 items-center">
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-white/30"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function AiChat() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Priyansh's AI assistant, powered by Groq. Ask me anything about his experience, skills, or projects. 👋"
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [history, setHistory] = useState([])
  const chatContainerRef = useRef(null)
  const inputRef = useRef(null)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }, [messages, loading])

  const send = async (text) => {
    const q = text || input.trim()
    if (!q || loading) return
    setInput('')

    const userMsg = { role: 'user', content: q }
    setMessages(prev => [...prev, userMsg])
    const newHistory = [...history, { role: 'user', content: q }]
    setHistory(newHistory)
    setLoading(true)

    try {
      const apiKey = import.meta.env.VITE_GROQ_API_KEY
      
      if (!apiKey) {
        throw new Error("API Key is missing. Did you add VITE_GROQ_API_KEY to your .env file?")
      }

      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            { role: 'system', content: AI_SYSTEM_PROMPT },
            ...newHistory
          ],
          max_tokens: 300
        })
      })
      
      const data = await res.json()
      
      if (!res.ok) {
        throw new Error(data.error?.message || `API Error: ${res.status}`)
      }

      const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn't get a response. Try again!"
      setMessages(prev => [...prev, { role: 'assistant', content: reply }])
      setHistory(prev => [...prev, { role: 'assistant', content: reply }])
    } catch (err) {
      console.error("Groq API Error:", err)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `Oops: ${err.message}. If this persists, remember Priyansh is a Software Developer looking for opportunities!`
      }])
    } finally {
      setLoading(false)
      inputRef.current?.focus()
    }
  }

  return (
    <section id="ai" className="py-32 px-6 bg-[#0d0d14]/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-accent border border-accent/20 bg-accent/5 px-3 py-1.5 rounded mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Live · Groq API
            </div>
            <div className="section-label mb-4">AI Assistant</div>
            <h2 className="section-heading mb-6">Ask me anything</h2>
            <p className="text-white/40 text-sm leading-relaxed mb-6" style={{ fontFamily: 'Satoshi' }}>
              This portfolio features a live AI assistant built with the ultra-fast Groq API.
              Ask it about his background, tech stack, or availability.
            </p>
            <p className="font-mono text-[11px] text-white/20 leading-relaxed border-l-2 border-accent/30 pl-4">
              Certified: Claude Code in Action · Building with Claude API<br />
              Earned: March 9, 2026
            </p>

            {/* Quick questions */}
            <div className="mt-8">
              <div className="font-mono text-[10px] text-white/25 tracking-widest uppercase mb-3">Quick questions</div>
              <div className="flex flex-wrap gap-2">
                {QUICK_QUESTIONS.map(q => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    disabled={loading}
                    className="font-mono text-[10px] px-3 py-1.5 border border-white/8 hover:border-accent/40 text-white/30 hover:text-accent/80 rounded transition-all duration-200 disabled:opacity-30"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Chat widget */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="glass rounded-2xl overflow-hidden border border-white/8">

              {/* Header */}
              <div className="px-5 py-4 bg-white/3 border-b border-white/6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center text-xs font-bold text-white">
                  ✦
                </div>
                <div>
                  <div className="font-display font-semibold text-sm text-white/80">Portfolio Assistant</div>
                  <div className="font-mono text-[10px] text-green-400">● Online — Powered by Groq</div>
                </div>
                <div className="ml-auto flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-accent/40" />
                </div>
              </div>

              {/* Messages */}
              <div ref={chatContainerRef} className="h-72 overflow-y-auto px-4 py-4 flex flex-col gap-3 scrollbar-thin">
                <AnimatePresence>
                  {messages.map((msg, i) => (
                    <Message key={i} msg={msg} />
                  ))}
                  {loading && <TypingIndicator key="typing" />}
                </AnimatePresence>
              </div>

              {/* Input */}
              <div className="px-4 pb-4">
                <div className="flex gap-2 bg-white/4 border border-white/8 rounded-xl px-4 py-2.5 focus-within:border-accent/30 transition-colors">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && send()}
                    placeholder="Ask something about Priyansh..."
                    disabled={loading}
                    className="flex-1 bg-transparent font-sans text-sm text-white/70 placeholder-white/20 outline-none disabled:opacity-50"
                  />
                  <button
                    onClick={() => send()}
                    disabled={!input.trim() || loading}
                    className="w-7 h-7 rounded-lg bg-accent hover:bg-[#6c6bf7] disabled:opacity-30 flex items-center justify-center text-white text-xs transition-all"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
        <div className="mt-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  )
}
