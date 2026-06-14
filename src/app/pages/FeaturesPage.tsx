import { Bot, ShieldCheck, Star, Zap, Globe, Smartphone, DollarSign, Users } from "lucide-react";

const purpleGrad = "linear-gradient(90deg, #5633ac, #9d4edd)";

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{ backgroundImage: purpleGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
    >
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
      style={{ background: "rgba(86,51,172,0.15)", border: "1px solid rgba(86,51,172,0.3)", color: "#9d4edd", fontFamily: "Poppins, sans-serif" }}
    >
      {children}
    </div>
  );
}

const features = [
  { icon: Bot, title: "AI Listing Creation", desc: "Upload photos and our AI automatically identifies make, model, condition, and generates professional multilingual descriptions in under 30 seconds.", badge: "Core Feature", bg: purpleGrad },
  { icon: ShieldCheck, title: "AI Trust Engine", desc: "Real-time fraud detection powered by machine learning. Behavioral analysis, image validation, and seller verification work 24/7 to protect buyers.", badge: "Trust & Safety", bg: "linear-gradient(135deg, #10b981, #059669)" },
  { icon: Star, title: "Smart Matching", desc: "Intent-based discovery algorithm that learns user preferences and surfaces the most relevant listings instantly — no endless scrolling required.", badge: "Discovery", bg: purpleGrad },
  { icon: Globe, title: "Multilingual Support", desc: "Full Arabic, English, and Hindi support throughout the platform — designed for the UAE's diverse expatriate and national population.", badge: "Localization", bg: "linear-gradient(135deg, #3b82f6, #2563eb)" },
  { icon: Smartphone, title: "Mobile First", desc: "Designed from the ground up for mobile — native app performance in the browser, optimized for UAE's 95%+ smartphone penetration rate.", badge: "UX", bg: "linear-gradient(135deg, #3b82f6, #2563eb)" },
  { icon: DollarSign, title: "Affordability First", desc: "Free basic listings for all users. No hidden fees, no forced upgrades. Premium features are optional enhancements, not paywalled necessities.", badge: "Pricing", bg: "linear-gradient(135deg, #f59e0b, #d97706)" },
  { icon: Users, title: "Emirates ID Verification", desc: "All sellers verified with government-issued Emirates ID for a trusted marketplace where every participant is accountable.", badge: "Verification", bg: "linear-gradient(135deg, #10b981, #059669)" },
  { icon: Zap, title: "Instant Publishing", desc: "From photo upload to live listing in under 30 seconds. AI validates pricing against market data and publishes to thousands of active buyers.", badge: "Speed", bg: purpleGrad },
];

export function FeaturesPage() {
  return (
    <div>
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: "#5633ac", filter: "blur(180px)" }} />
        </div>
        <div className="relative max-w-3xl mx-auto">
          <SectionLabel><Zap size={12} /> Platform Features</SectionLabel>
          <h1 className="font-['Poppins',sans-serif] font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
            Everything You Need to <GradientText>Buy &amp; Sell</GradientText>
          </h1>
          <p className="font-['Poppins',sans-serif] text-lg leading-relaxed" style={{ color: "#99a1af" }}>
            ALANN.AE is built from the ground up with AI at the core of every feature — making selling effortless and buying trustworthy.
          </p>
        </div>
      </section>

      <section className="py-8 px-6 pb-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc, badge, bg }) => (
              <div
                key={title}
                className="rounded-2xl p-8 flex flex-col gap-4 transition-transform hover:-translate-y-1 duration-300"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="rounded-xl w-14 h-14 flex items-center justify-center shrink-0" style={{ backgroundImage: bg }}>
                    <Icon size={26} color="white" />
                  </div>
                  <span
                    className="font-['Poppins',sans-serif] text-xs px-3 py-1 rounded-full"
                    style={{ background: "rgba(86,51,172,0.15)", color: "#9d4edd", border: "1px solid rgba(86,51,172,0.2)" }}
                  >
                    {badge}
                  </span>
                </div>
                <p className="font-['Poppins',sans-serif] font-bold text-xl text-white">{title}</p>
                <p className="font-['Poppins',sans-serif] text-sm leading-relaxed" style={{ color: "#99a1af" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
