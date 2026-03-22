const modules = import.meta.glob('../assets/hero-frames2/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
}) as Record<string, { default: string }>

/** Sorted image URLs for scroll-scrubbed hero (lexicographic with numeric segments). */
export const HERO_FRAME_URLS = Object.keys(modules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((key) => modules[key].default)
