import { ShieldCheck, CheckCircle, Bot, Lock, Eye, AlertTriangle, Users, Phone } from "lucide-react";

const purpleGrad = "linear-gradient(90deg, #5633ac, #9d4edd)";
const greenGrad = "linear-gradient(135deg, #10b981, #059669)";

function GradientText({ children, gradient = purpleGrad }: { children: React.ReactNode; gradient?: string }) {
  return (
    <span
      style={{ backgroundImage: gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
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

export function TrustSafetyPage() {
  return (
    <div>
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: "#5633ac", filter: "blur(180px)" }} />
        </div>
        <div className="relative max-w-3xl mx-auto">
          <SectionLabel><ShieldCheck size={12} /> Trust &amp; Safety</SectionLabel>
          <h1 className="font-['Poppins',sans-serif] font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
            Every Listing <GradientText gradient={greenGrad}>Verified</GradientText>
          </h1>
          <p className="font-['Poppins',sans-serif] text-lg leading-relaxed" style={{ color: "#99a1af" }}>
            Trust is built into every layer of ALANN.AE — from seller verification to real-time fraud detection.
          </p>
        </div>
      </section>

      <section className="py-8 px-6 pb-24">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
          {/* Verification systems */}
          <div>
            <SectionLabel><CheckCircle size={12} /> Verification Systems</SectionLabel>
            <h2 className="font-['Poppins',sans-serif] font-bold text-2xl md:text-3xl text-white mb-8">How We Verify Every Seller</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: Users, title: "Emirates ID Verification", desc: "Every seller must verify with a government-issued Emirates ID before listing." },
                { icon: Bot, title: "AI Photo Validation", desc: "Computer vision detects fake, manipulated, or stolen images before they go live." },
                { icon: Eye, title: "Behavioral Analysis", desc: "ML models continuously monitor accounts for suspicious activity patterns." },
                { icon: Lock, title: "Secure Messaging", desc: "All buyer-seller communication is end-to-end encrypted." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-6 rounded-xl flex flex-col gap-4" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="w-12 h-12 rounded-[14px] flex items-center justify-center" style={{ background: "rgba(16,185,129,0.15)" }}>
                    <Icon size={22} style={{ color: "#10b981" }} />
                  </div>
                  <p className="font-['Poppins',sans-serif] font-semibold text-white text-sm">{title}</p>
                  <p className="font-['Poppins',sans-serif] text-xs leading-relaxed" style={{ color: "#99a1af" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Buyer protection */}
          <div
            className="rounded-2xl p-8 md:p-12"
            style={{ background: "linear-gradient(135deg, rgba(86,51,172,0.15), rgba(157,78,221,0.08))", border: "1px solid rgba(86,51,172,0.25)" }}
          >
            <SectionLabel><ShieldCheck size={12} /> Buyer Protection</SectionLabel>
            <h2 className="font-['Poppins',sans-serif] font-bold text-2xl md:text-3xl text-white mb-6">Your Protection, Our Priority</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: AlertTriangle, title: "Fraud Reporting", desc: "Easy one-tap reporting for suspicious listings. Our team reviews all reports within 24 hours." },
                { icon: ShieldCheck, title: "Listing Guarantee", desc: "All listings reviewed by AI before going live — no fake or misleading listings allowed." },
                { icon: Phone, title: "24/7 Support", desc: "Contact our safety team at any time via email or phone for urgent concerns." },
                { icon: Eye, title: "Real-Time Monitoring", desc: "Automated systems continuously scan the platform for policy violations." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 items-start p-5 rounded-xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="rounded-lg w-10 h-10 flex items-center justify-center shrink-0" style={{ backgroundImage: purpleGrad }}>
                    <Icon size={18} color="white" />
                  </div>
                  <div>
                    <p className="font-['Poppins',sans-serif] font-semibold text-white text-sm mb-1">{title}</p>
                    <p className="font-['Poppins',sans-serif] text-xs leading-relaxed" style={{ color: "#99a1af" }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
