import { useRef, useEffect, useCallback } from "react"
import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafRef = useRef<number>(0)

  const fadeLoop = useCallback(() => {
    const video = videoRef.current
    if (!video || video.paused || !video.duration) {
      rafRef.current = requestAnimationFrame(fadeLoop)
      return
    }

    const { currentTime, duration } = video
    const fadeInEnd = 0.5
    const fadeOutStart = duration - 0.5
    let opacity = 1

    if (currentTime < fadeInEnd) {
      opacity = currentTime / fadeInEnd
    } else if (currentTime > fadeOutStart) {
      opacity = (duration - currentTime) / 0.5
    }

    video.style.opacity = String(Math.max(0, Math.min(1, opacity * 0.35)))
    rafRef.current = requestAnimationFrame(fadeLoop)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleEnded = () => {
      video.style.opacity = "0"
      setTimeout(() => {
        video.currentTime = 0
        video.play()
      }, 100)
    }

    video.addEventListener("ended", handleEnded)
    rafRef.current = requestAnimationFrame(fadeLoop)

    return () => {
      video.removeEventListener("ended", handleEnded)
      cancelAnimationFrame(rafRef.current)
    }
  }, [fadeLoop])

  return (
    <section className="bg-background relative overflow-hidden min-h-screen">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0 }}
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260308_114720_3dabeb9e-2c39-4907-b747-bc3544e2d5b7.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient overlays on video */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />

      <Navbar />

      {/* Animated radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(124,58,237,0.08) 0%, transparent 70%)",
          animation: "glowPulse 6s ease-in-out infinite",
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center pt-28 px-4">
        {/* Badge */}
        <div className="hero-stagger-1 liquid-glass rounded-full px-4 py-1.5 mb-8 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-foreground/70 text-sm font-medium">
            Available for Q2 2026 projects
          </span>
        </div>

        {/* Headline */}
        <h1
          className="hero-stagger-2 text-[140px] sm:text-[180px] md:text-[230px] font-normal leading-[1] tracking-[-0.024em] text-center pb-4 overflow-visible"
          style={{
            fontFamily: "'General Sans', 'Manrope', sans-serif",
            backgroundImage: "linear-gradient(200deg, #F0F0F1 0%, #7EB8E5 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "heroFadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both, shimmer 8s ease-in-out 2s infinite",
          }}
        >
          Design
        </h1>

        {/* Sub-headline */}
        <p className="hero-stagger-3 text-hero-sub text-center text-lg sm:text-xl leading-8 max-w-xl mt-6 opacity-80">
          We craft immersive digital experiences that
          <br />
          captivate audiences and drive real results
        </p>

        {/* CTAs */}
        <div className="hero-stagger-4 flex flex-col sm:flex-row items-center gap-4 mt-10 mb-10">
          <Button variant="hero" className="px-8 py-6 text-base gap-2 hover:scale-105 transition-transform duration-200">
            Start Your Project <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="heroSecondary" className="px-8 py-6 text-base hover:scale-105 transition-transform duration-200">
            View Our Work
          </Button>
        </div>

        {/* Social proof */}
        <div className="hero-stagger-5 flex items-center gap-3 mb-12">
          <div className="flex -space-x-2">
            {["SC", "MR", "AT"].map((initials, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-[10px] font-bold text-primary"
              >
                {initials}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-foreground/50 text-sm">Loved by 150+ clients</span>
        </div>
      </div>
    </section>
  )
}
