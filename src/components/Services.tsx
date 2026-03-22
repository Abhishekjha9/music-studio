import { motion, useReducedMotion } from 'framer-motion'
import { Sparkle } from './ui/DisneyIcons'

const services = [
  {
    title: 'Recording',
    description:
      'Capture every pristine detail of your performance—vocals, acoustic, and bands with crystal-clear precision.',
    icon: '❄️',
  },
  {
    title: 'Mixing',
    description:
      'We create depth and space across the spectrum—mixes that shine bright on earbuds and colossal speakers alike.',
    icon: '🧊',
  },
  {
    title: 'Mastering',
    description:
      'The final coat of frost: pure loudness, perfect tone, and polished brilliance for every platform.',
    icon: '💎',
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, damping: 24, stiffness: 280 },
  },
}

export function Services() {
  const reduce = useReducedMotion()

  return (
    <section
      id="services"
      className="scroll-mt-24 border-t border-ice-magic/10 bg-gradient-to-b from-ice-bg/80 to-ice-frost/80 backdrop-blur-md py-20 sm:py-28 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 -m-32 h-96 w-96 rounded-full bg-ice-glacier/30 blur-3xl" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8 relative z-10">
        <motion.div
          className="max-w-2xl"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
        >
          <div className="mb-3 inline-flex items-center gap-2 text-ice-sparkle">
            <Sparkle className="h-5 w-5" />
            <span className="text-xs font-bold uppercase tracking-[0.3em]">
              Crystal Clear
            </span>
          </div>
          <h2 className="font-display text-3xl text-ice-text sm:text-4xl md:text-5xl">
            Services sprinkled with{' '}
            <span className="text-ice-magic">snow</span>
          </h2>
          <p className="mt-4 text-base text-ice-text-dim">
            Full production or a single chill session in your journey—flexible flows
            shaped around your sound and your schedule.
          </p>
        </motion.div>

        <motion.ul
          className="mt-14 grid gap-8 sm:grid-cols-3"
          variants={reduce ? undefined : container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {services.map((s) => (
            <motion.li
              key={s.title}
              variants={reduce ? undefined : item}
              className="group relative overflow-hidden rounded-3xl border border-white p-8 shadow-xl shadow-ice-magic/5 glass-card transition hover:border-ice-magic/40 hover:shadow-ice-magic/10"
              whileHover={reduce ? undefined : { y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-ice-magic/10 blur-2xl transition group-hover:bg-ice-magic/20" />
              <span className="text-3xl" aria-hidden>
                {s.icon}
              </span>
              <h3 className="mt-4 font-display text-xl text-ice-sparkle">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ice-text-dim">
                {s.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
