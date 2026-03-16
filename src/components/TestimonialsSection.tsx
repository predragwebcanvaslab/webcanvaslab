import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "WebCanvasLab transformed our entire digital presence. The attention to detail and design quality exceeded every expectation.",
    name: "Sarah Chen",
    role: "CEO, TechFlow",
    avatar: "SC",
  },
  {
    quote: "Working with them felt effortless. They understood our vision instantly and delivered a product that truly represents our brand.",
    name: "Marcus Rivera",
    role: "Founder, Meridian",
    avatar: "MR",
  },
  {
    quote: "The best investment we ever made. Our conversion rate increased by 340% within the first month of launching the new site.",
    name: "Aiko Tanaka",
    role: "CMO, NovaPay",
    avatar: "AT",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Client Love
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
            What they say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="liquid-glass rounded-2xl p-8 flex flex-col justify-between hover:bg-white/[0.03] transition-all duration-300"
            >
              <div>
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-foreground/80 leading-relaxed text-[15px]">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-3 mt-8 pt-6 border-t border-foreground/5">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-semibold text-primary">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{t.name}</div>
                  <div className="text-xs text-foreground/40">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
