import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Send, Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  const [focused, setFocused] = useState("")

  return (
    <section id="contact" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Get In Touch
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
            Start your project
          </h2>
          <p className="text-foreground/60 text-lg mt-4 max-w-md mx-auto">
            Tell us about your vision. We'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="liquid-glass rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Contact Details
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/50 mb-0.5">Email</div>
                    <a href="mailto:hello@webcanvaslab.com" className="text-foreground hover:text-primary transition-colors">
                      hello@webcanvaslab.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/50 mb-0.5">Phone</div>
                    <a href="tel:+1234567890" className="text-foreground hover:text-primary transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/50 mb-0.5">Location</div>
                    <span className="text-foreground">Remote — Worldwide</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="liquid-glass rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Response Time
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-primary">&lt;24h</span>
                <span className="text-foreground/40 text-sm">average reply</span>
              </div>
              <div className="mt-4 w-full h-1.5 bg-foreground/5 rounded-full overflow-hidden">
                <div className="h-full w-[92%] bg-gradient-to-r from-primary to-primary/50 rounded-full" />
              </div>
              <p className="text-foreground/40 text-xs mt-2">92% of inquiries answered within 24h</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              className="liquid-glass rounded-2xl p-8 space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="relative">
                  <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    focused === "name" ? "top-2 text-xs text-primary" : "top-4 text-sm text-foreground/40"
                  }`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    onFocus={() => setFocused("name")}
                    onBlur={(e) => !e.target.value && setFocused("")}
                    className="w-full bg-white/[0.03] border border-foreground/10 rounded-xl px-4 pt-7 pb-3 text-foreground text-sm outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    focused === "email" ? "top-2 text-xs text-primary" : "top-4 text-sm text-foreground/40"
                  }`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    onFocus={() => setFocused("email")}
                    onBlur={(e) => !e.target.value && setFocused("")}
                    className="w-full bg-white/[0.03] border border-foreground/10 rounded-xl px-4 pt-7 pb-3 text-foreground text-sm outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all"
                  />
                </div>
              </div>

              {/* Budget */}
              <div className="relative">
                <label className="block text-sm text-foreground/50 mb-3">Project Budget</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {["$5k–$10k", "$10k–$25k", "$25k–$50k", "$50k+"].map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      className="border border-foreground/10 rounded-xl px-4 py-3 text-sm text-foreground/70 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all cursor-pointer focus:border-primary focus:text-primary focus:bg-primary/5"
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="relative">
                <label className="block text-sm text-foreground/50 mb-3">Services Needed</label>
                <div className="flex flex-wrap gap-2">
                  {["Web Design", "Development", "UI/UX", "Branding", "E-commerce", "SEO"].map((service) => (
                    <button
                      key={service}
                      type="button"
                      className="border border-foreground/10 rounded-full px-4 py-2 text-sm text-foreground/60 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all cursor-pointer focus:border-primary focus:text-primary focus:bg-primary/5"
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                  focused === "message" ? "top-2 text-xs text-primary" : "top-4 text-sm text-foreground/40"
                }`}>
                  Tell us about your project
                </label>
                <textarea
                  rows={4}
                  onFocus={() => setFocused("message")}
                  onBlur={(e) => !e.target.value && setFocused("")}
                  className="w-full bg-white/[0.03] border border-foreground/10 rounded-xl px-4 pt-7 pb-3 text-foreground text-sm outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <Button variant="hero" className="w-full py-6 text-base gap-2">
                Send Message <Send className="w-4 h-4" />
              </Button>
              <p className="text-foreground/30 text-xs text-center">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
