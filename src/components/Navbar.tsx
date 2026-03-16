import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setOpen(false)
  }

  const links = [
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Process", id: "process" },
    { label: "About", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 w-full py-4 px-6 md:px-8 flex flex-row items-center justify-between bg-background/80 backdrop-blur-xl border-b border-foreground/5">
        {/* Left: Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setOpen(false) }}>
          <img src="/logo.jpg" alt="WebCanvasLab" className="w-8 h-8 md:w-9 md:h-9" />
          <span className="text-foreground font-semibold text-base md:text-lg tracking-tight">
            WebCanvasLab
          </span>
        </div>

        {/* Center: Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Button key={link.id} variant="ghost" className="text-foreground/90 text-base cursor-pointer" onClick={() => scrollTo(link.id)}>
              {link.label}
            </Button>
          ))}
        </div>

        {/* Right: CTA (desktop) + Hamburger (mobile) */}
        <div className="flex items-center gap-3">
          <Button variant="hero" size="sm" className="hidden md:inline-flex rounded-full px-5 py-2 text-sm cursor-pointer" onClick={() => scrollTo("contact")}>
            Start a Project
          </Button>
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-foreground/80 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 top-[65px] z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center pt-12 gap-2 md:hidden">
          {links.map((link) => (
            <button
              key={link.id}
              className="text-foreground/80 text-lg py-3 px-6 w-full text-center hover:text-foreground transition-colors cursor-pointer"
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
          <div className="mt-4">
            <Button variant="hero" className="rounded-full px-8 py-5 text-base cursor-pointer" onClick={() => scrollTo("contact")}>
              Start a Project
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
