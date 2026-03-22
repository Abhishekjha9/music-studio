import { motion } from 'framer-motion'
import { CastleSilhouette } from './ui/DisneyIcons'

export function Footer() {
  return (
    <footer className="border-t border-ice-magic/20 bg-ice-bg/80 backdrop-blur-xl py-12 relative overflow-hidden">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 sm:px-8 relative z-10">
        <motion.div
          className="text-ice-magic/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <CastleSilhouette className="h-10 w-32 drop-shadow-sm" />
        </motion.div>
        <div className="flex w-full flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <p className="font-display text-lg text-ice-text font-semibold">
            <span className="text-ice-magic">Frostlight</span> Studio
          </p>
          <p className="text-sm text-ice-text-dim font-medium">
            © {new Date().getFullYear()} Frostlight Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
