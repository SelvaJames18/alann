import { Link } from "react-router";
import {
  Bot, ShieldCheck, Zap, Lock, HeadphonesIcon,
  Building2, Star, CheckCircle,
  Car, Smartphone, Sofa, Wrench, Upload, Cpu, Rocket
} from "lucide-react";

const purpleGrad = "linear-gradient(90deg, #5633ac, #9d4edd)";
const greenGrad = "linear-gradient(135deg, #10b981, #059669)";

function GradientText({ children, gradient = purpleGrad }: { children: React.ReactNode; gradient?: string }) {
  return (
    <span
      className="font-['Poppins',sans-serif] font-bold"
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

function FeatureCard({ icon: Icon, title, desc, iconBg }: { icon: React.ElementType; title: string; desc: string; iconBg: string }) {
  return (
    <div
      className="rounded-2xl p-8 flex flex-col gap-4 transition-transform hover:-translate-y-1 duration-300"
      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="rounded-xl w-14 h-14 flex items-center justify-center" style={{ backgroundImage: iconBg }}>
        <Icon size={26} color="white" />
      </div>
      <p className="font-['Poppins',sans-serif] font-bold text-xl text-white">{title}</p>
      <p className="font-['Poppins',sans-serif] text-sm leading-relaxed" style={{ color: "#99a1af" }}>{desc}</p>
    </div>
  );
}

function TrustBadge({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div
      className="flex items-center gap-3 px-5 py-3 rounded-xl"
      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <Icon size={18} style={{ color: "#10b981" }} />
      <span className="font-['Poppins',sans-serif] text-sm font-medium text-white">{label}</span>
    </div>
  );
}

function StepCard({ num, icon: Icon, title, desc }: { num: string; icon: React.ElementType; title: string; desc: string }) {
  return (
    <div className="flex flex-col items-center text-center gap-5">
      <div className="relative">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 font-['Poppins',sans-serif] font-bold text-xl text-white"
          style={{ backgroundImage: purpleGrad }}
        >
          {num}
        </div>
      </div>
      <div
        className="w-20 h-20 rounded-2xl flex items-center justify-center"
        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <Icon size={36} style={{ color: "#9d4edd" }} />
      </div>
      <div>
        <p className="font-['Poppins',sans-serif] font-bold text-xl text-white mb-2">{title}</p>
        <p className="font-['Poppins',sans-serif] text-sm leading-relaxed" style={{ color: "#99a1af" }}>{desc}</p>
      </div>
    </div>
  );
}

export function HomePage() {
  return (
    <div className="overflow-x-hidden">

      {/* HERO */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-15" style={{ background: "#5633ac", filter: "blur(200px)" }} />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <SectionLabel><Building2 size={12} /> Registered UAE Company</SectionLabel>
          <h1 className="font-['Poppins',sans-serif] font-bold text-4xl md:text-6xl text-white leading-tight mb-6">
            AI-Powered UAE
            <br />
            <GradientText>Marketplace Platform</GradientText>
          </h1>
          <p className="font-['Poppins',sans-serif] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10" style={{ color: "#99a1af" }}>
            Buy and sell vehicles, electronics, furniture, and services across the UAE with AI-driven listings, verified sellers, and smart matching — built by a registered UAE company.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="font-['Poppins',sans-serif] font-semibold px-8 py-4 rounded-[12px] text-white text-base transition-opacity hover:opacity-90"
              style={{ backgroundImage: purpleGrad }}
            >
              Start Selling
            </Link>
            <Link
              to="/features"
              className="font-['Poppins',sans-serif] font-medium px-8 py-4 rounded-[12px] text-white text-base transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)" }}
            >
              Explore Marketplace
            </Link>
            <Link
              to="/contact"
              className="font-['Poppins',sans-serif] text-sm px-6 py-4 rounded-[12px] transition-colors"
              style={{ color: "#9d4edd" }}
            >
              Join Early Access →
            </Link>
          </div>
        </div>

        {/* Category pills */}
        <div className="relative mt-16 flex flex-wrap justify-center gap-3">
          {[
            { icon: Car, label: "Vehicles" },
            { icon: Smartphone, label: "Electronics" },
            { icon: Sofa, label: "Furniture" },
            { icon: Wrench, label: "Services" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "#d1d5dc", fontFamily: "Poppins, sans-serif" }}
            >
              <Icon size={15} />
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* TRUST VERIFICATION BADGES */}
      <section className="py-16 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{ background: "linear-gradient(135deg, rgba(86,51,172,0.15), rgba(157,78,221,0.08))", border: "1px solid rgba(86,51,172,0.25)" }}
          >
            <div className="text-center mb-8">
              <SectionLabel><ShieldCheck size={12} /> Verified &amp; Trusted</SectionLabel>
              <h2 className="font-['Poppins',sans-serif] font-bold text-2xl md:text-3xl text-white">
                Built by a <GradientText>Registered UAE Company</GradientText>
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <TrustBadge icon={CheckCircle} label="Registered UAE Business" />
              <TrustBadge icon={ShieldCheck} label="Secure Platform" />
              <TrustBadge icon={Bot} label="AI-Powered Verification" />
              <TrustBadge icon={Lock} label="Privacy Focused" />
              <TrustBadge icon={HeadphonesIcon} label="Customer Support" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT THE COMPANY */}
      <section className="py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel><Building2 size={12} /> About the Company</SectionLabel>
              <h2 className="font-['Poppins',sans-serif] font-bold text-3xl md:text-4xl text-white leading-tight mb-6">
                <GradientText>ALANN Enterprises LLC</GradientText>
                <br />
                UAE-Based &amp; AI-Driven
              </h2>
              <p className="font-['Poppins',sans-serif] text-base leading-relaxed mb-6" style={{ color: "#99a1af" }}>
                ALANN Enterprises LLC is a UAE-based technology company building AI-powered classified marketplace solutions for vehicles, electronics, furniture, and services across the UAE. We combine cutting-edge artificial intelligence with local market expertise to create a trusted, efficient, and modern platform.
              </p>
              <p className="font-['Poppins',sans-serif] text-base leading-relaxed mb-8" style={{ color: "#99a1af" }}>
                Our mission is to transform the UAE classified marketplace by eliminating fraud, reducing listing friction, and empowering both buyers and sellers with intelligent tools.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Founded", value: "January, 2026" },
                  { label: "Headquarters", value: "Sharjah, UAE" },
                ].map(({ label, value }) => (
                  <div key={label} className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <p className="font-['Poppins',sans-serif] text-xs mb-1" style={{ color: "#99a1af" }}>{label}</p>
                    <p className="font-['Poppins',sans-serif] font-semibold text-sm text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: Bot, title: "AI-First Approach", desc: "Every feature powered by machine learning — from listing creation to fraud detection and smart matching.", bg: purpleGrad },
                { icon: ShieldCheck, title: "Verified & Trusted", desc: "Emirates ID verification, AI photo validation, and behavioral fraud detection on every transaction.", bg: greenGrad },
                { icon: Zap, title: "Lightning Fast", desc: "Upload photos and create a complete AI-generated listing in under 30 seconds.", bg: "linear-gradient(135deg, #f59e0b, #d97706)" },
              ].map(({ icon: Icon, title, desc, bg }) => (
                <div key={title} className="flex gap-4 p-5 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="rounded-xl w-11 h-11 flex items-center justify-center shrink-0" style={{ backgroundImage: bg }}>
                    <Icon size={20} color="white" />
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

      {/* FEATURES */}
      <section className="py-20 px-6" style={{ background: "linear-gradient(180deg, #0a0a0f 0%, #0d0d18 50%, #0a0a0f 100%)" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <SectionLabel><Zap size={12} /> Platform Features</SectionLabel>
            <h2 className="font-['Poppins',sans-serif] font-bold text-3xl md:text-5xl text-white leading-tight">
              Meet <GradientText>ALANN.AE</GradientText>
            </h2>
            <p className="font-['Poppins',sans-serif] text-lg mt-4 max-w-xl mx-auto" style={{ color: "#99a1af" }}>
              Built from the ground up with AI at the core of every feature
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard icon={Bot} title="AI Listing" desc="Upload photos and create listings in under 30 seconds with AI-generated descriptions." iconBg={purpleGrad} />
            <FeatureCard icon={ShieldCheck} title="AI Trust Engine" desc="Real-time fraud detection and profile verification for every seller." iconBg={purpleGrad} />
            <FeatureCard icon={Star} title="Smart Matching" desc="Intent-based discovery that finds the right buyers instantly." iconBg={purpleGrad} />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <SectionLabel><Rocket size={12} /> How It Works</SectionLabel>
            <h2 className="font-['Poppins',sans-serif] font-bold text-3xl md:text-5xl text-white">
              Create a Listing in <GradientText>3 Simple Steps</GradientText>
            </h2>
            <p className="font-['Poppins',sans-serif] text-lg mt-4" style={{ color: "#99a1af" }}>From upload to live in under 30 seconds</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <StepCard num="01" icon={Upload} title="Upload Photos" desc="AI detects make, model, condition, and details automatically from your photos." />
            <StepCard num="02" icon={Cpu} title="AI Generates Content" desc="Professional multilingual descriptions are created automatically in seconds." />
            <StepCard num="03" icon={Rocket} title="Publish Instantly" desc="AI validates pricing and launches your listing to thousands of verified buyers." />
          </div>
        </div>
      </section>

      {/* TRUST & SAFETY PREVIEW */}
      <section className="py-20 px-6" style={{ background: "linear-gradient(180deg, #0a0a0f, rgba(86,51,172,0.06) 50%, #0a0a0f)" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <SectionLabel><ShieldCheck size={12} /> Trust &amp; Safety</SectionLabel>
            <h2 className="font-['Poppins',sans-serif] font-bold text-3xl md:text-5xl text-white">
              Every Listing <GradientText gradient={greenGrad}>Verified</GradientText>
            </h2>
            <p className="font-['Poppins',sans-serif] text-lg mt-4" style={{ color: "#99a1af" }}>Trust built into every transaction</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: CheckCircle, title: "Emirates ID Verification", desc: "Every seller verified with government-issued ID." },
              { icon: Bot, title: "AI Photo Validation", desc: "Computer vision detects fake or manipulated images." },
              { icon: ShieldCheck, title: "Behavioral Fraud Detection", desc: "ML models identify suspicious patterns in real-time." },
              { icon: Lock, title: "Secure Messaging", desc: "End-to-end encrypted communication platform." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-xl flex flex-col gap-4" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="w-12 h-12 rounded-[14px] flex items-center justify-center" style={{ background: "rgba(16,185,129,0.15)" }}>
                  <Icon size={22} style={{ color: "#10b981" }} />
                </div>
                <div>
                  <p className="font-['Poppins',sans-serif] font-semibold text-white text-sm mb-1">{title}</p>
                  <p className="font-['Poppins',sans-serif] text-xs leading-relaxed" style={{ color: "#99a1af" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <SectionLabel><Star size={12} /> Leadership</SectionLabel>
            <h2 className="font-['Poppins',sans-serif] font-bold text-3xl md:text-4xl text-white">
              Meet the Team Behind <GradientText>ALANN</GradientText>
            </h2>
            <p className="font-['Poppins',sans-serif] text-lg mt-4" style={{ color: "#99a1af" }}>
              Experienced founders building the future of UAE classifieds
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Tharunjai Lokesh", role: "Founder & CEO", bio: "5+ Years of Marketing Experienced in developing and executing strategic marketing campaigns that drive brand growth and customer engagement. Skilled in digital marketing, market analysis, and lead generation, with a proven track record of delivering measurable business results." },
            ].map(({ name, role, bio }) => (
              <div
                key={name}
                className="w-full max-w-[340px] p-8 rounded-2xl flex flex-col items-center text-center gap-4"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center font-['Poppins',sans-serif] font-bold text-2xl text-white"
                  style={{ backgroundImage: purpleGrad }}
                >
                  {name.charAt(0)}
                </div>
                <div>
                  <p className="font-['Poppins',sans-serif] font-bold text-white text-lg">{name}</p>
                  <p className="font-['Poppins',sans-serif] text-sm font-medium mt-1" style={{ color: "#9d4edd" }}>{role}</p>
                </div>
                <p className="font-['Poppins',sans-serif] text-sm leading-relaxed" style={{ color: "#99a1af" }}>{bio}</p>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <div
            className="rounded-3xl p-12"
            style={{ backgroundImage: "linear-gradient(135deg, rgba(86,51,172,0.25), rgba(157,78,221,0.15))", border: "1px solid rgba(86,51,172,0.3)" }}
          >
            <h2 className="font-['Poppins',sans-serif] font-bold text-3xl md:text-4xl text-white mb-4">
              Ready to Join <GradientText>ALANN.AE</GradientText>?
            </h2>
            <p className="font-['Poppins',sans-serif] text-base mb-8" style={{ color: "#99a1af" }}>
              Join thousands of UAE buyers and sellers on the AI-powered marketplace of the future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="font-['Poppins',sans-serif] font-semibold px-8 py-4 rounded-[12px] text-white transition-opacity hover:opacity-90"
                style={{ backgroundImage: purpleGrad }}
              >
                Start Selling Today
              </Link>
              <Link
                to="/company"
                className="font-['Poppins',sans-serif] font-medium px-8 py-4 rounded-[12px] text-white transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.05)" }}
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
