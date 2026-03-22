import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { HERO_FRAME_URLS } from '../lib/heroFrameUrls'
import { Sparkle } from './ui/DisneyIcons'

const SCROLL_SPAN_VH = 320

const ICE_PARTICLES = Array.from({ length: 40 }).map((_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 15}s`,
  duration: `${8 + Math.random() * 15}s`,
  size: `${Math.random() * 4 + 2}px`,
  opacity: Math.random() * 0.6 + 0.3,
}))

export function Hero() {
  const scrollRootRef = useRef<HTMLElement>(null)
  const [scrubProgress, setScrubProgress] = useState(0)
  const prefersReduced = useReducedMotion()
  const prefersReducedMotion = prefersReduced === true

  const frameCount = HERO_FRAME_URLS.length
  const hasFrames = frameCount > 0
  const maxIndex = Math.max(0, frameCount - 1)

  useEffect(() => {
    if (!hasFrames) return
    const imgs: HTMLImageElement[] = []
    for (const src of HERO_FRAME_URLS) {
      const img = new Image()
      img.decoding = 'async'
      img.src = src
      imgs.push(img)
    }
    return () => {
      for (const img of imgs) {
        img.src = ''
      }
    }
  }, [hasFrames, frameCount])

  useEffect(() => {
    if (!hasFrames || prefersReducedMotion) return

    const el = scrollRootRef.current
    if (!el) return

    let raf = 0

    const updateProgress = () => {
      const scrollRange = el.offsetHeight - window.innerHeight
      if (scrollRange <= 0) {
        setScrubProgress(0)
        return
      }
      const rect = el.getBoundingClientRect()
      const p = Math.min(1, Math.max(0, -rect.top / scrollRange))
      setScrubProgress(p)
    }

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [hasFrames, prefersReducedMotion])

  const p = prefersReducedMotion ? 0 : scrubProgress
  const frameFloat = p * maxIndex
  const baseIndex = Math.min(maxIndex, Math.floor(frameFloat))
  const blend =
    maxIndex === 0 ? 0 : Math.min(1, Math.max(0, frameFloat - baseIndex))
  const nextIndex = Math.min(baseIndex + 1, maxIndex)

  const baseSrc = hasFrames ? HERO_FRAME_URLS[baseIndex] : undefined
  const nextSrc =
    hasFrames && maxIndex > 0 ? HERO_FRAME_URLS[nextIndex] : undefined

  const useScrollScrub = hasFrames && !prefersReducedMotion

  const fadeProps = prefersReduced
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
      }

  return (
    <section
      ref={scrollRootRef}
      className={
        useScrollScrub
          ? 'relative'
          : 'relative min-h-[90svh] overflow-hidden'
      }
      style={
        useScrollScrub
          ? { height: `${SCROLL_SPAN_VH}vh`, minHeight: `${SCROLL_SPAN_VH}vh` }
          : undefined
      }
    >
      <div className="sticky top-0 flex min-h-[100svh] flex-col overflow-hidden pt-24">
        {hasFrames && baseSrc && (
          <div
            className="pointer-events-none absolute inset-0 z-0 [transform:translateZ(0)]"
            aria-hidden
          >
            <img
              src={baseSrc}
              alt=""
              className="absolute inset-0 h-full w-full object-cover [image-rendering:auto]"
              decoding="async"
              fetchPriority="high"
              sizes="100vw"
            />
            {maxIndex > 0 && nextSrc && (
              <img
                src={nextSrc}
                alt=""
                className="absolute inset-0 h-full w-full object-cover [image-rendering:auto] will-change-[opacity]"
                decoding="async"
                sizes="100vw"
                style={{ opacity: blend }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-ice-bg/60 via-ice-bg/10 to-transparent" />
          </div>
        )}

        {!hasFrames && (
          <div
            className="pointer-events-none absolute inset-0 z-0 snowfield"
            aria-hidden
            style={{
              backgroundColor: '#f8fafc',
              backgroundImage: `
                radial-gradient(ellipse 100% 80% at 50% -20%, rgba(56, 189, 248, 0.2), transparent),
                radial-gradient(ellipse 60% 50% at 100% 50%, rgba(186, 230, 253, 0.4), transparent),
                radial-gradient(ellipse 50% 40% at 0% 80%, rgba(14, 165, 233, 0.1), transparent)
              `,
            }}
          />
        )}



        {/* Dropping ice particles */}
        <div
          className="pointer-events-none absolute inset-0 z-[2] overflow-hidden"
          aria-hidden
        >
          {ICE_PARTICLES.map((p) => (
            <div
              key={p.id}
              className="absolute top-0 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)] animate-snowfall"
              style={{
                left: p.left,
                width: p.size,
                height: p.size,
                '--delay': p.delay,
                '--duration': p.duration,
                '--max-opacity': p.opacity,
              } as React.CSSProperties}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col items-start justify-center px-5 pb-20 pt-12 sm:px-8 lg:px-12 md:pb-28 md:pt-8 h-full">
          <motion.div className="w-full max-w-lg rounded-3xl p-6 md:p-8 mr-auto glass-effect shadow-2xl border border-white/40 -ml-2 lg:-ml-6" {...fadeProps}>
            <p className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-ice-sparkle [text-shadow:0_1px_10px_rgba(255,255,255,0.8)]">
              <Sparkle className="h-4 w-4 text-ice-magic" />
              Pure as snow
            </p>
            <h1 className="font-display text-4xl leading-[0.90] tracking-tight text-ice-text sm:text-5xl md:text-6xl lg:text-[4rem]">
              Where your sound{' '}
              <span className="bg-gradient-to-r from-ice-magic via-ice-sparkle to-ice-magic-soft bg-clip-text text-transparent drop-shadow-sm">
                becomes crystal clear.
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ice-text-dim">
              Step into a pristine studio wrapped in winter calm—crisp acoustics, frosted booths,
              and engineers who capture every fragile detail.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-ice-magic to-ice-sparkle px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-ice-magic/20 border border-white/50"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Begin your adventure
              </motion.a>
              <motion.a
                href="#work"
                className="inline-flex items-center justify-center rounded-full border-2 border-ice-magic/30 bg-white/50 px-7 py-3.5 text-sm font-bold text-ice-text backdrop-blur-md transition hover:border-ice-magic hover:text-ice-magic shadow-sm shadow-ice-glacier"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Hear the magic
              </motion.a>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  )
}
