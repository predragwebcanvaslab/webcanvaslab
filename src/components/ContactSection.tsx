import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Send, Mail, MapPin, Phone, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [focused, setFocused] = useState("")
  const [selectedBudget, setSelectedBudget] = useState("")
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    )
  }

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)

    const form = e.currentTarget
    const nameVal = (form.elements.namedItem("name") as HTMLInputElement)?.value || ""
    const emailVal = (form.elements.namedItem("email") as HTMLInputElement)?.value || ""
    const messageVal = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || ""

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          name: nameVal,
          email: emailVal,
          budget: selectedBudget,
          services: selectedServices.join(", "),
          message: messageVal,
        }),
      })
      setSubmitted(true)
    } catch {
      alert("Something went wrong. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-4 scroll-mt-20">
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
            {submitted ? (
              <div className="liquid-glass rounded-2xl p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
                <CheckCircle className="w-16 h-16 text-emerald-400 mb-6" />
                <h3 className="text-2xl font-semibold text-foreground mb-3">Message Sent!</h3>
                <p className="text-foreground/60 max-w-sm">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="liquid-glass rounded-2xl p-8 space-y-6"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>Don't fill this out: <input name="bot-field" /></label>
                </p>

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
                      name="name"
                      required
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
                      name="email"
                      required
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
                        onClick={() => setSelectedBudget(budget)}
                        className={`border rounded-xl px-4 py-3 text-sm transition-all cursor-pointer ${
                          selectedBudget === budget
                            ? "border-primary text-primary bg-primary/10"
                            : "border-foreground/10 text-foreground/70 hover:border-primary/50 hover:text-primary hover:bg-primary/5"
                        }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="budget" value={selectedBudget} />
                </div>

                {/* Services */}
                <div className="relative">
                  <label className="block text-sm text-foreground/50 mb-3">Services Needed</label>
                  <div className="flex flex-wrap gap-2">
                    {["Web Design", "Development", "UI/UX", "Branding", "E-commerce", "SEO"].map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`border rounded-full px-4 py-2 text-sm transition-all cursor-pointer ${
                          selectedServices.includes(service)
                            ? "border-primary text-primary bg-primary/10"
                            : "border-foreground/10 text-foreground/60 hover:border-primary/50 hover:text-primary hover:bg-primary/5"
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="services" value={selectedServices.join(", ")} />
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
                    name="message"
                    onFocus={() => setFocused("message")}
                    onBlur={(e) => !e.target.value && setFocused("")}
                    className="w-full bg-white/[0.03] border border-foreground/10 rounded-xl px-4 pt-7 pb-3 text-foreground text-sm outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <Button variant="hero" className="w-full py-6 text-base gap-2 cursor-pointer" disabled={submitting}>
                  {submitting ? "Sending..." : "Send Message"} <Send className="w-4 h-4" />
                </Button>
                <p className="text-foreground/30 text-xs text-center">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
