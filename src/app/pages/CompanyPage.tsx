import { Link } from "react-router";
import { Building2, MapPin, Calendar, Shield, Users, Target, ArrowRight, CheckCircle, Briefcase } from "lucide-react";

const purpleGrad = "linear-gradient(90deg, #5633ac, #9d4edd)";

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="font-['Poppins',sans-serif] font-bold"
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

export function CompanyPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Page hero */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: "#5633ac", filter: "blur(180px)" }} />
        </div>
        <div className="relative max-w-3xl mx-auto">
          <SectionLabel><Building2 size={12} /> About the Company</SectionLabel>
          <h1 className="font-['Poppins',sans-serif] font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
            <GradientText>ALANN Enterprises LLC</GradientText>
          </h1>
          <p className="font-['Poppins',sans-serif] text-lg leading-relaxed" style={{ color: "#99a1af" }}>
            A registered UAE technology company building AI-powered classified marketplace solutions for the modern UAE economy.
          </p>
        </div>
      </section>

      {/* Legal Information */}
      <section className="py-16 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-10">
            <SectionLabel><Shield size={12} /> Legal Information</SectionLabel>
            <h2 className="font-['Poppins',sans-serif] font-bold text-2xl md:text-3xl text-white">
              Company Registration Details
            </h2>
          </div>
          {/* Row 1: 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            {[
              { icon: Building2, label: "Legal Company Name", value: "ALANN Enterprises LLC" },
              { icon: Shield, label: "Trade License Number", value: "2644250" },
              { icon: Calendar, label: "Registration Date", value: "January, 2026" },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="p-6 rounded-xl flex gap-4 items-start"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="rounded-lg w-10 h-10 flex items-center justify-center shrink-0" style={{ backgroundImage: purpleGrad }}>
                  <Icon size={18} color="white" />
                </div>
                <div>
                  <p className="font-['Poppins',sans-serif] text-xs mb-1" style={{ color: "#99a1af" }}>{label}</p>
                  <p className="font-['Poppins',sans-serif] font-semibold text-white text-sm">{value}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Row 2: 2 cards centered */}
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            {[
              { icon: MapPin, label: "Registered Address", value: "SHARJAH MEDIA CITY FREEZONE, Sharjah. UAE" },
              { icon: Briefcase, label: "Business Activity", value: "Technology & Marketplace Platform" },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="p-6 rounded-xl flex gap-4 items-start w-full sm:w-[calc(33.333%+10px)] lg:w-[calc(33.333%-10px)]"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", maxWidth: "calc((100% - 40px) / 3 * 2 + 20px)" }}
              >
                <div className="rounded-lg w-10 h-10 flex items-center justify-center shrink-0" style={{ backgroundImage: purpleGrad }}>
                  <Icon size={18} color="white" />
                </div>
                <div>
                  <p className="font-['Poppins',sans-serif] text-xs mb-1" style={{ color: "#99a1af" }}>{label}</p>
                  <p className="font-['Poppins',sans-serif] font-semibold text-white text-sm">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-6" style={{ background: "linear-gradient(180deg, #0a0a0f, rgba(86,51,172,0.05) 50%, #0a0a0f)" }}>
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel><Target size={12} /> Company Overview</SectionLabel>
            <h2 className="font-['Poppins',sans-serif] font-bold text-2xl md:text-3xl text-white leading-tight mb-6">
              What <GradientText>ALANN</GradientText> Does
            </h2>
            <p className="font-['Poppins',sans-serif] text-base leading-relaxed mb-4" style={{ color: "#99a1af" }}>
              ALANN.AE is an AI-powered classified marketplace platform designed specifically for the UAE market. We enable individuals and businesses to buy and sell vehicles, electronics, furniture, and services with unprecedented speed, safety, and intelligence.
            </p>
            <p className="font-['Poppins',sans-serif] text-base leading-relaxed mb-6" style={{ color: "#99a1af" }}>
              Our platform combines computer vision, natural language processing, and behavioral analytics to automate listing creation, verify sellers, detect fraud, and match buyers with the most relevant listings — all in real-time.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "AI-automated listing creation from photos",
                "Government ID verification for all sellers",
                "Real-time fraud detection and prevention",
                "Multilingual support for UAE's diverse population",
                "Mobile-first design for on-the-go trading",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: "#10b981" }} />
                  <span className="font-['Poppins',sans-serif] text-sm" style={{ color: "#d1d5dc" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div
              className="rounded-2xl p-8"
              style={{ background: "linear-gradient(135deg, rgba(86,51,172,0.2), rgba(157,78,221,0.1))", border: "1px solid rgba(86,51,172,0.25)" }}
            >
              <h3 className="font-['Poppins',sans-serif] font-bold text-xl text-white mb-3">Business Model</h3>
              <p className="font-['Poppins',sans-serif] text-sm leading-relaxed" style={{ color: "#99a1af" }}>
                ALANN operates a freemium marketplace model — free basic listings for all users, with premium placement, analytics, and AI-enhanced features available for power sellers and businesses. We monetize through promoted listings, subscription plans, and value-added services.
              </p>
            </div>
            <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <h3 className="font-['Poppins',sans-serif] font-bold text-xl text-white mb-3">Market Served</h3>
              <p className="font-['Poppins',sans-serif] text-sm leading-relaxed" style={{ color: "#99a1af" }}>
                Serving the UAE's 9.9 million residents across Dubai, Abu Dhabi, Sharjah, Ajman, and all seven emirates. Our platform is designed for both individual sellers and SME businesses with a focus on the UAE's mobile-first population.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-10 text-center flex flex-col items-center">
            <SectionLabel><Users size={12} /> Leadership</SectionLabel>
            <h2 className="font-['Poppins',sans-serif] font-bold text-2xl md:text-3xl text-white">
              Company <GradientText>Leadership</GradientText>
            </h2>
          </div>
          <div className="flex justify-center">
            <div
              className="p-8 rounded-2xl flex flex-col items-center text-center gap-4 w-full max-w-sm"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center font-['Poppins',sans-serif] font-bold text-2xl text-white"
                style={{ backgroundImage: purpleGrad }}
              >
                T
              </div>
              <div>
                <p className="font-['Poppins',sans-serif] font-bold text-white text-lg">Tharunjai Lokesh</p>
                <p className="font-['Poppins',sans-serif] text-sm font-medium mt-1" style={{ color: "#9d4edd" }}>Founder & CEO</p>
              </div>
              <p className="font-['Poppins',sans-serif] text-sm leading-relaxed" style={{ color: "#99a1af" }}>
                5+ Years of Marketing Experienced in developing and executing strategic marketing campaigns that drive brand growth and customer engagement. Skilled in digital marketing, market analysis, and lead generation, with a proven track record of delivering measurable business results.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="rounded-3xl p-12" style={{ backgroundImage: "linear-gradient(135deg, rgba(86,51,172,0.2), rgba(157,78,221,0.12))", border: "1px solid rgba(86,51,172,0.3)" }}>
            <h2 className="font-['Poppins',sans-serif] font-bold text-2xl md:text-3xl text-white mb-4">
              Want to Know More?
            </h2>
            <p className="font-['Poppins',sans-serif] text-base mb-8" style={{ color: "#99a1af" }}>
              Reach out to our team for partnership opportunities, media inquiries, or general questions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-['Poppins',sans-serif] font-semibold px-8 py-4 rounded-[12px] text-white transition-opacity hover:opacity-90"
              style={{ backgroundImage: purpleGrad }}
            >
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
