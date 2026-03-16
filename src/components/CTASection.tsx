import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="liquid-glass rounded-3xl p-16 relative overflow-hidden">
          {/* Ambient glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, rgba(124,58,237,0.15) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10">
            <h2
              className="text-5xl md:text-7xl font-normal tracking-tight mb-6"
              style={{
                fontFamily: "'General Sans', 'Manrope', sans-serif",
                backgroundImage: "linear-gradient(223deg, #E8E8E9 0%, #3A7BBF 104.15%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Let's build
              <br />
              something great
            </h2>
            <p className="text-foreground/60 text-lg max-w-md mx-auto mb-10">
              Ready to elevate your digital presence? Let's talk about your next project.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button variant="hero" className="px-8 py-6 text-base gap-2">
                Start a Project <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="heroSecondary" className="px-8 py-6 text-base">
                hello@webcanvaslab.com
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
