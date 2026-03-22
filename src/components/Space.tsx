import { motion, useReducedMotion } from 'framer-motion'
import { Sparkle } from './ui/DisneyIcons'

const highlights = [
  'Acoustic treatment tuned for frosty clarity',
  'Analog warmth & digital ice—best of both realms',
  'Cozy winter lounges for when the muse needs a warm tea',
]

export function Space() {
  const reduce = useReducedMotion()

  return (
    <section
      id="space"
      className="scroll-mt-24 border-t border-ice-magic/10 bg-ice-frost/40 backdrop-blur-md py-20 sm:py-28 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-32 h-64 w-64 rounded-full bg-ice-glacier/20 blur-3xl pointer-events-none" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -28 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-3 inline-flex items-center gap-2 text-ice-magic-soft">
              <Sparkle className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-ice-sparkle">
                Behind the mirror
              </span>
            </div>
            <h2 className="font-display text-3xl text-ice-text sm:text-4xl md:text-5xl">
              The studio{' '}
              <span className="text-ice-magic">where dreams crystalize</span>
            </h2>
            <p className="mt-4 text-ice-text-dim">
              Sunlit lounges, pure‑quiet rooms, and a layout that keeps bands
              and soloists completely at peace from first note to final bow.
            </p>
            <ul className="mt-8 space-y-4">
              {highlights.map((line, i) => (
                <motion.li
                  key={line}
                  className="flex gap-3 text-sm font-medium text-ice-text"
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i, duration: 0.45 }}
                >
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-ice-magic to-ice-sparkle text-xs font-bold text-white shadow-sm shadow-ice-magic/30"
                    aria-hidden
                  >
                    ✓
                  </span>
                  {line}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            initial={reduce ? false : { opacity: 0, x: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="relative overflow-hidden rounded-3xl border border-white bg-gradient-to-br from-ice-glacier/30 to-ice-bg p-8 sm:col-span-2 sm:min-h-[200px] glass-card shadow-lg shadow-ice-magic/10"
              whileHover={reduce ? undefined : { scale: 1.02 }}
            >
              <div className="absolute inset-0 snowfield opacity-30" />
              <p className="relative font-display text-lg text-ice-text">
                “Every session feels like stepping into a snow globe.”
              </p>
            </motion.div>
            <motion.div
              className="rounded-3xl border border-white glass-effect p-6 shadow-md shadow-ice-magic/5"
              whileHover={reduce ? undefined : { y: -4 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-ice-sparkle">
                Hours
              </p>
              <p className="mt-2 text-sm text-ice-text font-medium">
                Mon–Sat · 10am–10pm
                <br />
                By appointment
              </p>
            </motion.div>
            <motion.div
              className="rounded-3xl border border-white glass-effect p-6 shadow-md shadow-ice-magic/5"
              whileHover={reduce ? undefined : { y: -4 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-ice-sparkle">
                Location
              </p>
              <p className="mt-2 text-sm text-ice-text font-medium">
                The Ice Crest
                <br />
                Easy load-in
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
