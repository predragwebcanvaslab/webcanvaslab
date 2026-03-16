import { Palette, Code2, Smartphone, Layers } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Web Design",
    description: "Pixel-perfect designs that capture your brand essence and convert visitors into customers.",
    tags: ["UI Design", "Landing Pages", "Responsive"],
  },
  {
    icon: Layers,
    title: "UI/UX Strategy",
    description: "Research-driven interfaces built on user psychology, data patterns, and conversion science.",
    tags: ["User Research", "Wireframing", "Prototyping"],
  },
  {
    icon: Code2,
    title: "Development",
    description: "Clean, performant code using React, Next.js, and modern frameworks that scale with your growth.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: Smartphone,
    title: "Brand Identity",
    description: "Complete visual systems — from logo to typography to color — that make your brand unforgettable.",
    tags: ["Logo Design", "Style Guides", "Visual Identity"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            What We Do
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
            Crafted with precision
          </h2>
          <p className="text-foreground/60 text-lg mt-4 max-w-md mx-auto">
            Every project is a blend of aesthetic mastery and technical excellence
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={i}
                className="liquid-glass rounded-2xl p-8 group hover:bg-white/[0.03] transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-foreground/40 border border-foreground/10 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
