const clients = [
  { name: "TechFlow", letter: "T" },
  { name: "Meridian", letter: "M" },
  { name: "Aether", letter: "A" },
  { name: "Luminos", letter: "L" },
  { name: "NovaPay", letter: "N" },
  { name: "Synapse", letter: "S" },
  { name: "Helix", letter: "H" },
  { name: "Prysma", letter: "P" },
]

export function SocialProofSection() {
  const duplicatedClients = [...clients, ...clients]

  return (
    <section className="relative w-full overflow-hidden py-20 px-4">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-16">
        {/* Stats row */}
        <div className="flex items-center gap-16 text-center">
          <div>
            <div className="text-4xl font-bold text-foreground">150+</div>
            <div className="text-sm text-foreground/50 mt-1">Projects Delivered</div>
          </div>
          <div className="w-px h-12 bg-foreground/10" />
          <div>
            <div className="text-4xl font-bold text-foreground">98%</div>
            <div className="text-sm text-foreground/50 mt-1">Client Satisfaction</div>
          </div>
          <div className="w-px h-12 bg-foreground/10" />
          <div>
            <div className="text-4xl font-bold text-foreground">12</div>
            <div className="text-sm text-foreground/50 mt-1">Industry Awards</div>
          </div>
        </div>

        {/* Logo Marquee */}
        <div className="max-w-5xl w-full flex items-center gap-12">
          <p className="text-foreground/50 text-sm whitespace-nowrap shrink-0 leading-5">
            Trusted by brands
            <br />
            worldwide
          </p>

          <div className="overflow-hidden flex-1">
            <div className="flex animate-marquee gap-16">
              {duplicatedClients.map((client, i) => (
                <div key={i} className="flex items-center gap-3 shrink-0">
                  <div className="liquid-glass w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold text-foreground">
                    {client.letter}
                  </div>
                  <span className="text-base font-semibold text-foreground whitespace-nowrap">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
