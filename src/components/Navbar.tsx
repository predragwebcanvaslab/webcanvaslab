import { Button } from "@/components/ui/button"

export function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 w-full py-4 px-8 flex flex-row items-center justify-between bg-background/80 backdrop-blur-xl border-b border-foreground/5">
        {/* Left: Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src="/logo.jpg" alt="WebCanvasLab" className="w-9 h-9" />
          <span className="text-foreground font-semibold text-lg tracking-tight">
            WebCanvasLab
          </span>
        </div>

        {/* Center: Nav items */}
        <div className="flex items-center gap-1">
          <Button variant="ghost" className="text-foreground/90 text-base cursor-pointer" onClick={() => scrollTo("services")}>
            Services
          </Button>
          <Button variant="ghost" className="text-foreground/90 text-base cursor-pointer" onClick={() => scrollTo("portfolio")}>
            Portfolio
          </Button>
          <Button variant="ghost" className="text-foreground/90 text-base cursor-pointer" onClick={() => scrollTo("process")}>
            Process
          </Button>
          <Button variant="ghost" className="text-foreground/90 text-base cursor-pointer" onClick={() => scrollTo("testimonials")}>
            About
          </Button>
          <Button variant="ghost" className="text-foreground/90 text-base cursor-pointer" onClick={() => scrollTo("contact")}>
            Contact
          </Button>
        </div>

        {/* Right: Get Started */}
        <Button variant="hero" size="sm" className="rounded-full px-5 py-2 text-sm cursor-pointer" onClick={() => scrollTo("contact")}>
          Start a Project
        </Button>
      </nav>

    </>
  )
}
