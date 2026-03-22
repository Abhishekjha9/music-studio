import { motion, useReducedMotion } from 'framer-motion'
import { Sparkle } from './ui/DisneyIcons'

export function Contact() {
  const reduce = useReducedMotion()

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-ice-magic/10 bg-gradient-to-b from-ice-glacier/10 via-ice-frost/40 to-ice-bg/80 backdrop-blur-md py-20 sm:py-28 relative overflow-hidden"
    >
      <div className="absolute left-0 bottom-0 -m-32 h-96 w-96 rounded-full bg-ice-glacier/30 blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-0 -m-32 h-96 w-96 rounded-full bg-ice-magic/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 relative z-10">
        <motion.div
          className="mx-auto max-w-2xl text-center glass-card p-10 sm:p-14 rounded-3xl shadow-xl shadow-ice-magic/5 border border-white"
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', damping: 22, stiffness: 200 }}
        >
          <div className="mb-4 flex justify-center gap-2 text-ice-sparkle">
            <Sparkle className="h-6 w-6 animate-twinkle" />
            <Sparkle className="h-4 w-4 animate-twinkle [animation-delay:0.4s]" />
            <Sparkle className="h-6 w-6 animate-twinkle [animation-delay:0.8s]" />
          </div>
          <h2 className="font-display text-3xl text-ice-text sm:text-4xl md:text-5xl">
            Ready for your{' '}
            <span className="text-ice-magic">perfect winter</span>?
          </h2>
          <p className="mt-4 text-ice-text-dim text-lg">
            Tell us about your project—genre, timeline, and the feeling you want
            listeners to carry home. We’ll answer within a few business days.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <motion.a
              href="mailto:hello@frostlight.studio"
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-ice-magic to-ice-sparkle px-8 py-3.5 text-sm font-bold text-white shadow-xl shadow-ice-magic/20 border border-white/50 sm:w-auto transition hover:shadow-ice-magic/40"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              hello@frostlight.studio
            </motion.a>
            <span className="text-sm font-medium text-ice-text-dim">
              or call (555) 000‑0000
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
