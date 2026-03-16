export function Footer() {
  return (
    <footer className="border-t border-foreground/5 pt-12 pb-8 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <img src="/logo.jpg" alt="WebCanvasLab" className="w-9 h-9" />
            <span className="text-foreground font-semibold text-lg">WebCanvasLab</span>
          </div>

          {/* Email */}
          <a href="mailto:hello@webcanvaslab.com" className="text-foreground/40 hover:text-foreground/70 text-sm transition-colors">
            hello@webcanvaslab.com
          </a>
        </div>

        {/* Bottom bar */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground/25 text-sm">
            © 2026 WebCanvasLab. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms"].map((item) => (
              <a key={item} href="#" className="text-foreground/25 hover:text-foreground/50 text-sm transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
