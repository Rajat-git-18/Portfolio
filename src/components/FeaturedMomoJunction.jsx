import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const LIVE_URL = 'https://momo-junction.netlify.app/'

const tags = ['Restaurant', 'Branding', 'UI/UX', 'Next.js', 'Tailwind', 'Local Business']

const techStack = [
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'ShadCN UI',
  'Framer Motion',
  'Netlify Deployment',
]

const highlights = [
  'Modern restaurant UI/UX',
  'Dark premium branding aesthetic',
  'WhatsApp ordering integration',
  'Mobile-first responsive design',
  'Local business focused website',
  'SEO optimized structure',
  'High-conversion landing page design',
  'Interactive food menu system',
  'Premium visual storytelling',
  'Fast-loading modern frontend',
]

const caseStudy = [
  {
    title: 'Problem',
    body: 'Momo Junction needed a digital presence that matched the quality of their street-food experience—moving beyond generic listings to a brand that feels premium, trustworthy, and easy to order from on mobile.',
  },
  {
    title: 'Solution',
    body: 'A conversion-focused website with dark premium aesthetics, clear menu discovery, and WhatsApp-first ordering so local customers can browse, choose, and place orders with minimal friction.',
  },
  {
    title: 'Design Approach',
    body: 'Visual hierarchy emphasizes hero storytelling, appetizing food presentation, and structured menu sections. Spacing, typography, and motion are tuned for a high-end local food brand feel.',
  },
  {
    title: 'Branding Strategy',
    body: 'UI language reflects modern street-food energy—bold accents, glass-style surfaces, and consistent CTA patterns that reinforce brand recall and repeat orders.',
  },
  {
    title: 'Mobile Experience',
    body: 'Mobile-first layouts prioritize thumb-friendly navigation, fast tap targets, and sticky order actions so users on the go can explore the menu and message on WhatsApp in seconds.',
  },
  {
    title: 'Conversion Strategy',
    body: 'Every section guides users toward action: featured items, social proof, location context, and persistent WhatsApp CTAs designed to turn visitors into real orders.',
  },
]

const keyFeatures = [
  { title: 'WhatsApp Ordering', desc: 'One-tap order flow aligned with how local customers actually buy.' },
  { title: 'Interactive Menu', desc: 'Structured categories and item presentation for faster decisions.' },
  { title: 'Mobile Optimized', desc: 'Responsive layouts built for phones-first local discovery.' },
  { title: 'Premium UI Design', desc: 'Dark, modern interface with brand-led visual storytelling.' },
  { title: 'Local SEO Ready', desc: 'Semantic structure and content patterns for local search visibility.' },
  { title: 'Modern Animations', desc: 'Subtle motion that adds polish without hurting performance.' },
]

const metrics = [
  'Fully Responsive',
  'SEO Optimized',
  'Fast Performance',
  'Modern UI/UX',
  'Conversion Focused',
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.4 },
}

function MomoPreview() {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setTimeout(() => setFailed(true), 5000)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  return (
    <motion.div
      {...fadeUp}
      className="relative h-56 overflow-hidden rounded-2xl border border-white/10 bg-slate-950 sm:h-72 md:h-80 lg:h-full lg:min-h-[320px]"
    >
      {!failed ? (
        <iframe
          src={LIVE_URL}
          title="Momo Junction live preview"
          className="h-full w-full bg-slate-950"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          onLoad={() => {
            setLoaded(true)
            setFailed(false)
            if (timerRef.current) clearTimeout(timerRef.current)
          }}
        />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-900 to-slate-950 px-6 text-center"
        >
          <p className="text-lg font-semibold text-white">Momo Junction</p>
          <p className="text-sm text-slate-400">Open Live Website to explore the full experience</p>
        </motion.div>
      )}
      {!loaded && !failed && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center bg-slate-950/80 text-sm text-slate-300"
        >
          Loading preview…
        </motion.div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
    </motion.div>
  )
}

function GlassCard({ children, className = '' }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className={`rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10 backdrop-blur-md dark:border-slate-700/60 dark:bg-slate-900/40 ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default function FeaturedMomoJunction() {
  const scrollToCaseStudy = () => {
    document.getElementById('momo-junction-case-study')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="mb-16 space-y-12">
      <motion.div {...fadeUp} className="text-center">
        <p className="inline-flex rounded-full border border-indigo-200/80 bg-indigo-50/80 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700 backdrop-blur dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300">
          Featured Client Project
        </p>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-3xl">
          Local Food Business Branding & Website Design
        </h3>
      </motion.div>

      {/* Featured card */}
      <motion.article
        {...fadeUp}
        className="overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 p-1 shadow-xl shadow-indigo-900/20 dark:border-slate-700/80"
      >
        <motion.div
          whileHover={{ scale: 1.005 }}
          transition={{ duration: 0.3 }}
          className="grid gap-0 lg:grid-cols-2"
        >
          <div className="relative p-4 lg:p-5">
            <MomoPreview />
            <span className="absolute left-7 top-7 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
              Client Project
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="flex flex-col justify-center space-y-5 p-6 md:p-8 lg:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-indigo-300">
              Momo Junction
            </p>
            <h4 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Momo Junction
            </h4>
            <p className="text-sm leading-relaxed text-slate-300 md:text-base">
              A premium modern website and branding experience designed for a local momo food
              business focused on increasing customer engagement and WhatsApp orders.
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              Designed and developed a premium digital presence including branding-inspired UI,
              modern website experience, WhatsApp ordering flow, and local business focused design
              strategy.
            </p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05 } },
              }}
              className="flex flex-wrap gap-2"
            >
              {tags.map((tag) => (
                <motion.span
                  key={tag}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
            <div className="flex flex-wrap gap-3 pt-1">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={LIVE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30"
              >
                Live Website
              </motion.a>
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToCaseStudy}
                className="inline-flex rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                View Case Study
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.article>

      {/* Case study */}
      <div id="momo-junction-case-study" className="scroll-mt-32 space-y-8">
        <motion.div {...fadeUp} className="text-center">
          <h4 className="text-2xl font-semibold text-slate-900 dark:text-white">Case Study</h4>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Strategy, design, and execution for a real local food brand
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {caseStudy.map((block) => (
            <motion.div
              key={block.title}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <GlassCard className="h-full border-slate-200/80 bg-white/70 dark:bg-slate-900/50">
                <h5 className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-300">
                  {block.title}
                </h5>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {block.body}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Highlights strip */}
      <motion.div {...fadeUp} className="flex flex-wrap justify-center gap-2">
        {highlights.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 text-[11px] font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300"
          >
            {item}
          </span>
        ))}
      </motion.div>

      {/* Key features */}
      <div className="space-y-6">
        <motion.h4 {...fadeUp} className="text-center text-xl font-semibold text-slate-900 dark:text-white">
          Key Features
        </motion.h4>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {keyFeatures.map((feature) => (
            <motion.div
              key={feature.title}
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <GlassCard className="h-full border-slate-200/80 bg-white/80 dark:bg-slate-900/60">
                <h5 className="font-semibold text-slate-900 dark:text-white">{feature.title}</h5>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{feature.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Metrics */}
      <motion.div
        {...fadeUp}
        className="rounded-3xl border border-indigo-100/80 bg-gradient-to-r from-indigo-50/90 to-blue-50/90 p-6 backdrop-blur dark:border-indigo-500/20 dark:from-indigo-500/10 dark:to-blue-500/10 md:p-8"
      >
        <h4 className="text-center text-lg font-semibold text-slate-900 dark:text-white">
          Project Outcomes
        </h4>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
          className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-5"
        >
          {metrics.map((metric) => (
            <motion.div
              key={metric}
              variants={{
                hidden: { opacity: 0, scale: 0.92 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/60 bg-white/80 px-3 py-4 text-center shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70"
            >
              <p className="text-xs font-bold uppercase tracking-wide text-indigo-600 dark:text-indigo-300">
                {metric}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Tech stack */}
      <motion.div {...fadeUp} className="text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Tech Stack
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.04 } },
          }}
          className="mt-3 flex flex-wrap justify-center gap-2"
        >
          {techStack.map((tech) => (
            <motion.span
              key={tech}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href={LIVE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-500/30"
          >
            Live Website
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="inline-flex rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 dark:border-slate-600 dark:text-slate-200"
          >
            Start a Similar Project
          </motion.a>
        </div>
      </motion.div>
    </div>
  )
}
