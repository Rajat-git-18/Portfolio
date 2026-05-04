import { useEffect, useRef, useState } from 'react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

const services = [
  {
    title: 'Website Development',
    description:
      'Modern, fast, and responsive websites built using the latest technologies.',
  },
  {
    title: 'Website Redesign',
    description:
      'Transform outdated websites into clean, high-converting experiences.',
  },
  {
    title: 'Performance & Backend Optimization',
    description:
      'Scalable backend systems, APIs, and performance optimization for business growth.',
  },
]

const trustPoints = [
  'Fast delivery',
  'Clean, scalable code',
  'Business-focused approach',
  'Strong backend expertise',
]

const projects = [
  {
    title: 'UrbanFit Gym - High-Converting Fitness Website',
    description:
      'Designed and developed a high-converting fitness website focused on increasing gym memberships.',
    details:
      'The website is built with a strong focus on user experience, clear call-to-actions, and trust-building elements such as testimonials, pricing plans, and transformation-focused messaging.',
    impact:
      'Optimized for performance, responsiveness, and conversion to help fitness businesses attract and retain more customers.',
    tags: [
      'React',
      'Tailwind CSS',
      'Framer Motion',
      'Responsive Design',
      'Conversion-Focused UI',
    ],
    badge: 'Conversion-Focused Project',
    liveDemo: 'https://urbanfit-gym.netlify.app/',
    expandedDetails: [
      'This case study is structured around one goal: increasing qualified gym membership leads with a conversion-first layout and clearer trust signals.',
      'The build includes responsive sections, optimized loading, high-intent CTA placement, and sales-focused messaging to support better inquiry conversion.',
    ],
  },
  {
    title: 'UrbanBites – Premium Restaurant Website',
    description:
      'Designed and developed a premium restaurant website focused on increasing table reservations and enhancing user experience.',
    details:
      'The website features a visually rich interface with high-quality food imagery, optimized menu presentation, and strategically placed call-to-actions to drive bookings.',
    impact:
      'Built with a strong focus on conversion, responsiveness, and modern UI/UX principles to help restaurants attract and engage customers effectively.',
    tags: [
      'React',
      'Tailwind CSS',
      'Framer Motion',
      'Responsive Design',
      'UI/UX Design',
      'Conversion-Focused UI',
    ],
    badge: 'Reservation-Focused Design',
    liveDemo: 'https://urbanbitesresturant.netlify.app/',
    expandedDetails: [
      'This project is framed around restaurant outcomes: more reservations, clearer menu discovery, and stronger engagement from first scroll to booking.',
      'The experience combines premium presentation with conversion discipline—strategic CTAs, responsive layouts, and fast-feeling interactions so guests take action.',
    ],
  },
]

const skillGroups = {
  Frontend: ['React', 'JavaScript', 'Tailwind CSS'],
  Backend: ['Node.js', 'REST APIs', 'GraphQL'],
  'Cloud & Tools': [
    'AWS (Lambda, API Gateway, DynamoDB)',
    'Firebase',
    'Git',
    'Postman',
  ],
  Concepts: ['System Design', 'Microservices', 'Rate Limiting', 'Distributed Systems'],
}

function ThemeToggle({ darkMode, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-indigo-500 dark:hover:text-indigo-300"
      aria-label="Toggle dark mode"
    >
      {darkMode ? 'Light' : 'Dark'}
    </button>
  )
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-10 text-center md:mb-12">
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-400 md:text-base">
        {subtitle}
      </p>
    </div>
  )
}

function Card({ title, description, children }) {
  return (
    <article className="rounded-2xl border border-slate-200/80 bg-white/95 p-6 shadow-sm shadow-slate-200/60 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-200/40 dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-black/20 dark:hover:shadow-indigo-900/20">
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {description}
      </p>
      {children}
    </article>
  )
}

function ProjectImagePreview({ src, title }) {
  return (
    <div className="relative h-64 overflow-hidden border-b border-slate-200/80 bg-slate-950 sm:h-72 dark:border-slate-800">
      <img
        src={src}
        alt={`${title} homepage preview`}
        className="h-full w-full object-cover object-top transition duration-500 ease-out group-hover:scale-105"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/10 to-transparent opacity-90 transition duration-300 group-hover:via-slate-900/20" />
    </div>
  )
}

function ProjectPreview({ url, title }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showFallback, setShowFallback] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setShowFallback(true)
    }, 4500)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [url])

  return (
    <div className="relative h-64 overflow-hidden border-b border-slate-200/80 bg-slate-950 sm:h-72 dark:border-slate-800">
      {!showFallback ? (
        <iframe
          src={url}
          title={`${title} live preview`}
          className="h-full w-full bg-white"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          referrerPolicy="strict-origin-when-cross-origin"
          onLoad={() => {
            setIsLoaded(true)
            setShowFallback(false)
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current)
            }
          }}
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-2 bg-slate-100 px-6 text-center dark:bg-slate-900">
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
            Preview not available in embed mode
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Some sites block iframe previews for security reasons. Use Live Demo to view it.
          </p>
        </div>
      )}

      {!isLoaded && !showFallback && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/70 text-sm font-medium text-slate-100">
          Loading live preview...
        </div>
      )}
    </div>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    const savedTheme = localStorage.getItem('theme')
    const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return savedTheme ? savedTheme === 'dark' : preferredDark
  })
  const [activeSection, setActiveSection] = useState('home')
  const [expandedProject, setExpandedProject] = useState(null)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  return (
    <div className="relative overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.14),transparent_30%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.25),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.2),transparent_30%)]" />

      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#home" className="text-base font-semibold text-slate-900 dark:text-white">
            Rajat Gupta
          </a>
          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeSection === item.id
                    ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300'
                    : 'text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-300'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <ThemeToggle darkMode={darkMode} onToggle={() => setDarkMode((prev) => !prev)} />
        </nav>
      </header>

      <main className="mx-auto max-w-6xl space-y-20 px-4 py-12 sm:px-6 md:space-y-28 md:py-20">
        <section id="home" className="scroll-mt-28">
          <div className="rounded-3xl border border-slate-200/80 bg-white/85 px-6 py-12 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 md:px-12 md:py-16">
            <p className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300">
              Full-Stack Developer
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white md:text-6xl">
              I Build High-Performance Websites That Help Businesses Grow
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
              Full-stack developer specializing in modern, scalable, and conversion-focused
              websites for businesses.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-500/30 transition hover:opacity-95"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
              >
                Get a Website
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-28">
          <SectionTitle
            title="Services"
            subtitle="Solutions designed to help businesses launch faster, convert better, and scale reliably."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} title={service.title} description={service.description} />
            ))}
          </div>
        </section>

        <section id="why-choose-me" className="scroll-mt-28">
          <div className="rounded-3xl border border-indigo-100/80 bg-gradient-to-r from-indigo-50 to-blue-50 p-6 shadow-sm shadow-indigo-100/60 dark:border-indigo-500/20 dark:from-indigo-500/10 dark:to-blue-500/10 dark:shadow-indigo-900/20 md:p-8">
            <SectionTitle
              title="Why Choose Me"
              subtitle="A dependable development partner focused on quality, speed, and measurable business impact."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 rounded-xl border border-white/70 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-700/70 dark:bg-slate-900/70 dark:text-slate-200"
                >
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-28">
          <SectionTitle
            title="Projects"
            subtitle="Client-focused case studies built to drive measurable business growth."
          />
          <div
            className={`grid w-full grid-cols-1 gap-6 md:grid-cols-2 ${projects.length >= 3 ? 'xl:grid-cols-3' : ''}`}
          >
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white/95 shadow-sm shadow-slate-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-200/40 dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-black/20 dark:hover:shadow-indigo-900/20"
              >
                <div className="relative shrink-0">
                  {project.previewImage ? (
                    <ProjectImagePreview src={project.previewImage} title={project.title} />
                  ) : (
                    <ProjectPreview url={project.liveDemo} title={project.title} />
                  )}
                  <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur">
                    {project.badge}
                  </span>
                </div>

                <div className="flex flex-1 flex-col space-y-5 p-6 md:p-7">
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
                    {project.description}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
                    {project.details}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
                    {project.impact}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-500/30 transition hover:opacity-95"
                    >
                      Live Demo
                    </a>
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedProject((prev) =>
                          prev === project.title ? null : project.title
                        )
                      }
                      className="inline-flex rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
                    >
                      {expandedProject === project.title ? 'Hide Details' : 'View Details'}
                    </button>
                  </div>

                  {expandedProject === project.title && (
                    <div className="space-y-2 rounded-2xl border border-slate-200/80 bg-slate-50 p-4 text-sm leading-relaxed text-slate-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300">
                      <p className="font-semibold text-slate-900 dark:text-white">
                        Project Details
                      </p>
                      {project.expandedDetails.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="scroll-mt-28">
          <SectionTitle title="About" subtitle="Developer profile and expertise." />
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8">
            <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300 md:text-lg">
              I&apos;m Rajat Gupta, a full-stack developer with experience in building scalable
              systems and modern applications.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-300 md:text-lg">
              I specialize in React, Node.js, and cloud-based architectures using AWS. I have
              worked on fintech systems involving secure APIs, payments, and high-performance
              backend services.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-300 md:text-lg">
              I focus on building websites that are not just visually appealing, but also optimized
              for performance, scalability, and business growth.
            </p>
          </div>
        </section>

        <section id="skills" className="scroll-mt-28">
          <SectionTitle
            title="Skills"
            subtitle="Tools and architecture expertise used to deliver production-ready platforms."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {Object.entries(skillGroups).map(([group, skills]) => (
              <article
                key={group}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-28">
          <SectionTitle
            title="Contact"
            subtitle="Share your project goals and I will help you build a high-performing website."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                Let&apos;s build your next website
              </h3>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                Email: Rajatg461@gmail.com
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Phone / WhatsApp: +91-7015885212
              </p>
            </div>
            <form className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-indigo-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-indigo-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                />
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-indigo-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                />
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-500/30 transition hover:opacity-95"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/80 px-4 py-8 dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-slate-600 dark:text-slate-400 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-medium text-slate-800 dark:text-slate-200">Rajat Gupta</p>
            <p className="text-xs text-slate-500 dark:text-slate-500">
              Helping businesses build fast, scalable websites
            </p>
          </div>
          <p>Rajatg461@gmail.com</p>
          <a href="https://linkedin.com" className="hover:text-indigo-600 dark:hover:text-indigo-300">
            LinkedIn
          </a>
          <p>&copy; {new Date().getFullYear()} Rajat Gupta. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
