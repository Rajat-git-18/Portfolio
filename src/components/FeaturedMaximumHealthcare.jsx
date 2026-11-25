import { motion } from 'framer-motion'

const LIVE_URL = 'https://www.maximumhealthcare.co.in/'
const PREVIEW_IMAGE = '/projects/maximum-healthcare-preview.png'

const tags = [
  'Healthcare',
  'Medical Tourism',
  'UI/UX',
  'Business Website',
  'Trust & Conversion',
  'Responsive Design',
]

const techStack = [
  'React',
  'Modern Frontend',
  'Responsive Design',
  'SEO Structure',
  'Conversion-Focused UI',
  'Netlify / Production Hosting',
]

const highlights = [
  'Patient-first healthcare journey design',
  'Trust-building hospital network showcase',
  'Specialty-focused treatment discovery',
  'Clear enquiry and consultation CTAs',
  'International patient journey flow',
  'Mobile-first responsive experience',
  'SEO-ready content architecture',
  'Premium medical brand aesthetic',
  'Testimonials & social proof system',
  'Fast, clean modern frontend',
]

const caseStudy = [
  {
    title: 'Problem',
    body: 'Maximum Healthcare needed a digital presence that could explain complex medical tourism journeys clearly—building trust for international patients while showcasing specialties, hospital partners, and end-to-end care coordination.',
  },
  {
    title: 'Solution',
    body: 'A premium healthcare website with structured specialty sections, trusted hospital network presentation, step-by-step patient journey, testimonials, FAQs, and strong enquiry CTAs designed to convert visitors into consultations.',
  },
  {
    title: 'Design Approach',
    body: 'Visual hierarchy prioritizes clarity and credibility—clean spacing, medical-trust color language, readable specialty cards, and conversion-first sections that guide users from discovery to contact without overwhelm.',
  },
  {
    title: 'Branding Strategy',
    body: 'The UI reinforces ethics, empathy, and excellence through calm premium surfaces, confident typography, and consistent trust signals (accreditations, hospital partners, patient stories) aligned with a global care brand.',
  },
  {
    title: 'Mobile Experience',
    body: 'Mobile-first layouts keep specialty browsing, journey steps, and contact actions easy on phones—critical for international patients researching treatment options on the go.',
  },
  {
    title: 'Conversion Strategy',
    body: 'Every major section supports enquiry generation: specialty discovery, care journey clarity, social proof, FAQ friction reduction, and persistent CTAs toward consultation and WhatsApp/call contact.',
  },
]

const keyFeatures = [
  {
    title: 'Specialty Care Showcase',
    desc: 'Transplant, neurology, oncology, cardiology, and more presented in clear, scannable treatment modules.',
  },
  {
    title: 'Hospital Network Trust',
    desc: 'Partner hospitals and accreditation signals designed to increase credibility for international patients.',
  },
  {
    title: 'Patient Journey Flow',
    desc: 'Consult → Coordinate → Care → Thrive steps that simplify medical travel decision-making.',
  },
  {
    title: 'Enquiry-Focused CTAs',
    desc: 'Strategic consultation and contact actions placed where intent is highest.',
  },
  {
    title: 'Mobile Optimized',
    desc: 'Responsive layouts tuned for fast browsing and easy outreach on mobile devices.',
  },
  {
    title: 'SEO & Content Structure',
    desc: 'Semantic sections, FAQs, and specialty content designed for discoverability and clarity.',
  },
]

const metrics = [
  'Fully Responsive',
  'Trust-Focused UI',
  'SEO Ready',
  'Enquiry Driven',
  'Premium Medical UX',
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.4 },
}

function ProjectPreview() {
  return (
    <motion.a
      href={LIVE_URL}
      target="_blank"
      rel="noreferrer"
      {...fadeUp}
      className="group/preview relative block h-56 overflow-hidden rounded-2xl border border-white/10 bg-slate-950 sm:h-72 md:h-80 lg:h-full lg:min-h-[320px]"
    >
      <img
        src={PREVIEW_IMAGE}
        alt="Maximum Healthcare homepage preview"
        className="h-full w-full object-cover object-top transition duration-500 ease-out group-hover/preview:scale-105"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent transition duration-300 group-hover/preview:from-slate-950/85" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
        <div>
          <p className="text-sm font-semibold text-white">Maximum Healthcare</p>
          <p className="text-xs text-slate-300">Homepage preview · click to open live site</p>
        </div>
        <span className="rounded-lg bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur transition group-hover/preview:bg-white/25">
          Open Live
        </span>
      </div>
    </motion.a>
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

export default function FeaturedMaximumHealthcare() {
  const scrollToCaseStudy = () => {
    document
      .getElementById('maximum-healthcare-case-study')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="mb-16 space-y-12">
      <motion.div {...fadeUp} className="text-center">
        <p className="inline-flex rounded-full border border-teal-200/80 bg-teal-50/80 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-teal-700 backdrop-blur dark:border-teal-500/30 dark:bg-teal-500/10 dark:text-teal-300">
          Featured Client Project
        </p>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-3xl">
          Healthcare & Medical Tourism Website
        </h3>
      </motion.div>

      <motion.article
        {...fadeUp}
        className="overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950 p-1 shadow-xl shadow-teal-900/20 dark:border-slate-700/80"
      >
        <motion.div
          whileHover={{ scale: 1.005 }}
          transition={{ duration: 0.3 }}
          className="grid gap-0 lg:grid-cols-2"
        >
          <div className="relative p-4 lg:p-5">
            <ProjectPreview />
            <span className="absolute left-7 top-7 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
              Trust-Focused Design
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="flex flex-col justify-center space-y-5 p-6 md:p-8 lg:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-300">
              Healthcare Business Website
            </p>
            <h4 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Maximum Healthcare
            </h4>
            <p className="text-sm leading-relaxed text-slate-300 md:text-base">
              A premium healthcare and medical tourism website designed to build patient trust,
              showcase specialty care, and convert international enquiries into consultations.
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              Designed and developed a modern digital presence for Maximum Healthcare—covering
              specialty treatments, trusted hospital networks, end-to-end patient journey support,
              and conversion-focused enquiry flows for global patients seeking care in India.
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
                className="inline-flex rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/30"
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

      <div id="maximum-healthcare-case-study" className="scroll-mt-32 space-y-8">
        <motion.div {...fadeUp} className="text-center">
          <h4 className="text-2xl font-semibold text-slate-900 dark:text-white">Case Study</h4>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Strategy, design, and execution for a healthcare facilitation brand
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
                <h5 className="text-sm font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-300">
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

      <div className="space-y-6">
        <motion.h4
          {...fadeUp}
          className="text-center text-xl font-semibold text-slate-900 dark:text-white"
        >
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

      <motion.div
        {...fadeUp}
        className="rounded-3xl border border-teal-100/80 bg-gradient-to-r from-teal-50/90 to-cyan-50/90 p-6 backdrop-blur dark:border-teal-500/20 dark:from-teal-500/10 dark:to-cyan-500/10 md:p-8"
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
              <p className="text-xs font-bold uppercase tracking-wide text-teal-700 dark:text-teal-300">
                {metric}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

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
              className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 dark:border-teal-500/30 dark:bg-teal-500/10 dark:text-teal-300"
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
            className="inline-flex rounded-xl bg-gradient-to-r from-teal-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-teal-500/30"
          >
            Live Website
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="inline-flex rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-teal-300 dark:border-slate-600 dark:text-slate-200"
          >
            Start a Similar Project
          </motion.a>
        </div>
      </motion.div>
    </div>
  )
}
