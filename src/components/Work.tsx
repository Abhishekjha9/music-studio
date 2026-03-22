import { motion, useReducedMotion } from 'framer-motion'

const projects = [
  {
    artist: 'Luna & The Lanterns',
    title: 'EP — “Midnight Parade”',
    role: 'Mix & master',
  },
  {
    artist: 'The Carousel Kids',
    title: 'Album — “Wide‑Eyed Wonder”',
    role: 'Production',
  },
  {
    artist: 'Solo: Aurora',
    title: 'Single — “First Star”',
    role: 'Recording',
  },
]

export function Work() {
  const reduce = useReducedMotion()

  return (
    <section
      id="work"
      className="scroll-mt-24 border-t border-ice-magic/10 bg-ice-bg/60 backdrop-blur-sm py-20 sm:py-28 relative overflow-hidden"
    >
      {/* Floating element echoing the hero background */}
      <div className="absolute right-0 bottom-1/4 -mr-32 h-80 w-80 rounded-full bg-ice-magic/5 blur-3xl pointer-events-none" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="font-display text-3xl text-ice-text sm:text-4xl md:text-5xl">
              Stories we’ve helped{' '}
              <span className="bg-gradient-to-r from-ice-magic to-ice-sparkle bg-clip-text text-transparent">
                tell
              </span>
            </h2>
            <p className="mt-4 max-w-lg text-ice-text-dim">
              A few credits from the road—swap in your own winter tale moments when
              you’re ready.
            </p>
          </div>
        </motion.div>
        <ul className="mt-14 divide-y divide-ice-magic/10 border-y border-ice-magic/10">
          {projects.map((p, i) => (
            <motion.li
              key={p.title}
              className="group flex flex-col gap-2 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8 transition-colors hover:bg-ice-frost/40 rounded-xl px-4 -mx-4"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ delay: 0.06 * i, duration: 0.45 }}
            >
              <div>
                <p className="text-sm font-bold text-ice-magic transition-colors group-hover:text-ice-sparkle">
                  {p.artist}
                </p>
                <p className="mt-1 font-display text-xl text-ice-text">
                  {p.title}
                </p>
              </div>
              <p className="text-sm font-semibold text-ice-sparkle/90">
                {p.role}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
