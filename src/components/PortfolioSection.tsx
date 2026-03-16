import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "TechFlow Platform",
    category: "SaaS · Web App",
    image: "/portfolio/techflow_portfolio_1773620981312.png",
    year: "2026",
  },
  {
    title: "Meridian Finance",
    category: "Fintech · Dashboard",
    image: "/portfolio/meridian_portfolio_1773620996092.png",
    year: "2025",
  },
  {
    title: "Aether Wellness",
    category: "Health · E-commerce",
    image: "/portfolio/aether_portfolio_1773621012150.png",
    year: "2025",
  },
  {
    title: "NovaPay Checkout",
    category: "Payments · Mobile",
    image: "/portfolio/novapay_portfolio_1773621030161.png",
    year: "2026",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 md:py-32 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 md:mb-16">
          <div>
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Selected Work
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
              Our portfolio
            </h2>
          </div>
          <button className="text-foreground/60 hover:text-foreground text-sm flex items-center gap-1 transition-colors cursor-pointer">
            View all projects <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-foreground/5 hover:border-foreground/10 transition-all duration-500"
            >
              {/* Project thumbnail */}
              <div className="h-72 relative overflow-hidden bg-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-10">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-1 group-hover:translate-x-1 transition-transform">
                      {project.title}
                    </h3>
                    <p className="text-foreground/50 text-sm">{project.category}</p>
                  </div>
                  <div className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 text-foreground" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
