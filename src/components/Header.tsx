import { motion } from 'framer-motion'
import { Sparkle } from './ui/DisneyIcons'

const nav = [
  { label: 'Services', href: '#services' },
  { label: 'The Studio', href: '#space' },
  { label: 'Stories', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 pointer-events-none">
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 28, stiffness: 260 }}
        className="relative w-full max-w-5xl pointer-events-auto rounded-[2rem] md:rounded-full border border-white/60 bg-white/20 backdrop-blur-xl shadow-xl shadow-ice-magic/10 before:absolute before:inset-0 before:rounded-[2rem] md:before:rounded-full before:bg-gradient-to-b before:from-white/40 before:to-transparent before:pointer-events-none"
      >
        <div className="relative flex flex-col gap-4 px-6 py-4 md:py-2 sm:px-8 md:flex-row md:items-center md:justify-between md:gap-6">
          <div className="flex items-center justify-between gap-4">
            <motion.a
              href="#"
              className="flex items-center gap-2 font-display text-lg tracking-tight text-ice-text sm:text-xl"
              whileHover={{ scale: 1.02, textShadow: "0 0 8px rgba(56,189,248,0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              <Sparkle className="h-5 w-5 text-ice-magic drop-shadow-sm" />
              <span>
                <span className="bg-gradient-to-r from-ice-magic to-ice-magic-soft bg-clip-text text-transparent font-bold">
                  Frostlight
                </span>{' '}
                <span className="text-ice-text/90">Studio</span>
              </span>
            </motion.a>
            <motion.a
              href="#contact"
              className="rounded-full bg-white px-4 py-2 text-sm font-bold text-ice-magic shadow-sm border border-white/80 md:hidden"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Book
            </motion.a>
          </div>
          
          <nav
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-ice-text/80 md:gap-8"
            aria-label="Primary"
          >
            {nav.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="relative transition-colors hover:text-ice-magic"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i + 0.15 }}
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>
          
          <motion.a
            href="#contact"
            className="hidden md:inline-flex rounded-full bg-white px-6 py-2.5 text-sm font-bold text-ice-magic shadow-md shadow-ice-magic/10 border border-white transition-all hover:bg-ice-frost hover:shadow-ice-magic/30 hover:text-ice-sparkle"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Book a session
          </motion.a>
        </div>
      </motion.header>
    </div>
  )
}
