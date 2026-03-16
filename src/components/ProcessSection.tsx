const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into your brand, audience, and goals. Through research and workshops we map the perfect foundation.",
    accent: "bg-violet-500/10 text-violet-400",
  },
  {
    number: "02",
    title: "Design",
    description: "High-fidelity mockups and interactive prototypes. Every pixel is intentional, every interaction meaningful.",
    accent: "bg-blue-500/10 text-blue-400",
  },
  {
    number: "03",
    title: "Develop",
    description: "Clean, performant code brings the design to life. React, Next.js, TypeScript — built to scale.",
    accent: "bg-cyan-500/10 text-cyan-400",
  },
  {
    number: "04",
    title: "Deploy",
    description: "Launch with confidence. Hosting, performance, analytics, plus 30 days of post-launch support.",
    accent: "bg-emerald-500/10 text-emerald-400",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-32 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            How We Work
          </span>
          <h2
            className="text-5xl md:text-6xl font-normal mt-4 tracking-tight"
            style={{
              fontFamily: "'General Sans', 'Manrope', sans-serif",
              backgroundImage: "linear-gradient(223deg, #E8E8E9 0%, #3A7BBF 104.15%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Our process
          </h2>
          <p className="text-foreground/60 text-lg mt-4 max-w-md mx-auto">
            A proven methodology refined over 150+ projects
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-14 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px bg-gradient-to-r from-violet-500/20 via-cyan-500/20 to-emerald-500/20" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative group">
                {/* Step dot on line */}
                <div className="hidden md:flex absolute -top-[3px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/40 z-10 top-[53px]" />

                <div className="liquid-glass rounded-2xl p-8 h-full hover:bg-white/[0.03] transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${step.accent} mb-5`}>
                    <span className="text-lg font-bold">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-foreground/50 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
