import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Building2 } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/firebase";

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

export function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
        submittedAt: serverTimestamp(),
      });
      console.log("✅ Saved with ID:", docRef.id);
      setSent(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error("❌ Firestore error:", msg);
      setError(`Failed: ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "10px",
    color: "#ffffff",
    fontFamily: "Poppins, sans-serif",
    fontSize: "14px",
    padding: "12px 16px",
    width: "100%",
    outline: "none",
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10" style={{ background: "#5633ac", filter: "blur(160px)" }} />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <SectionLabel><Mail size={12} /> Get In Touch</SectionLabel>
          <h1 className="font-['Poppins',sans-serif] font-bold text-4xl md:text-5xl text-white leading-tight mb-4">
            Contact <GradientText>ALANN.AE</GradientText>
          </h1>
          <p className="font-['Poppins',sans-serif] text-lg leading-relaxed" style={{ color: "#99a1af" }}>
            Have a question, partnership inquiry, or support request? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-8 px-6 pb-24">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="font-['Poppins',sans-serif] font-bold text-2xl text-white mb-8">Contact Information</h2>

            <div className="flex flex-col gap-5 mb-10">
              {[
                { icon: MapPin, label: "Business Address", value: "SHARJAH MEDIA CITY FREEZONE, Sharjah. UAE" },
                { icon: Mail, label: "Legal Inquiries", value: "Tharun@alann.ae" },
                { icon: Phone, label: "Phone", value: "+971 505951024" },
                { icon: Clock, label: "Support Hours", value: "24/7 — Always Available" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-4 items-start p-5 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="rounded-lg w-10 h-10 flex items-center justify-center shrink-0" style={{ backgroundImage: purpleGrad }}>
                    <Icon size={18} color="white" />
                  </div>
                  <div>
                    <p className="font-['Poppins',sans-serif] text-xs mb-0.5" style={{ color: "#99a1af" }}>{label}</p>
                    <p className="font-['Poppins',sans-serif] font-medium text-white text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Company card */}
            <div
              className="rounded-2xl p-6"
              style={{ background: "linear-gradient(135deg, rgba(86,51,172,0.2), rgba(157,78,221,0.1))", border: "1px solid rgba(86,51,172,0.3)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Building2 size={20} style={{ color: "#9d4edd" }} />
                <p className="font-['Poppins',sans-serif] font-bold text-white">Registered Company</p>
              </div>
              <p className="font-['Poppins',sans-serif] font-semibold text-white text-sm">Alann Enterprises LLC</p>
              <p className="font-['Poppins',sans-serif] text-xs mt-1" style={{ color: "#99a1af" }}>Trade License No: 2644250</p>
              <p className="font-['Poppins',sans-serif] text-xs mt-1" style={{ color: "#99a1af" }}>SHARJAH MEDIA CITY FREEZONE, Sharjah. UAE</p>
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="rounded-2xl p-8 md:p-10" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <h2 className="font-['Poppins',sans-serif] font-bold text-xl text-white mb-6">Send Us a Message</h2>

              {sent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(16,185,129,0.15)" }}>
                    <Send size={28} style={{ color: "#10b981" }} />
                  </div>
                  <p className="font-['Poppins',sans-serif] font-bold text-white text-xl mb-2">Message Sent!</p>
                  <p className="font-['Poppins',sans-serif] text-sm" style={{ color: "#99a1af" }}>
                    Thank you for reaching out. Our team will respond within 1–2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-['Poppins',sans-serif] text-xs mb-2 block" style={{ color: "#99a1af" }}>Full Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="Ahmad Al Nasser"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="font-['Poppins',sans-serif] text-xs mb-2 block" style={{ color: "#99a1af" }}>Email Address *</label>
                      <input
                        required
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        style={inputStyle}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-['Poppins',sans-serif] text-xs mb-2 block" style={{ color: "#99a1af" }}>Subject *</label>
                    <select
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      style={{ ...inputStyle, cursor: "pointer" }}
                    >
                      <option value="" style={{ background: "#13131e" }}>Select a topic</option>
                      <option value="general" style={{ background: "#13131e" }}>General Inquiry</option>
                      <option value="support" style={{ background: "#13131e" }}>Support</option>
                      <option value="partnership" style={{ background: "#13131e" }}>Partnership</option>
                      <option value="press" style={{ background: "#13131e" }}>Press / Media</option>
                      <option value="legal" style={{ background: "#13131e" }}>Legal</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-['Poppins',sans-serif] text-xs mb-2 block" style={{ color: "#99a1af" }}>Message *</label>
                    <textarea
                      required
                      rows={6}
                      placeholder="Tell us how we can help..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ ...inputStyle, resize: "none" }}
                    />
                  </div>
                  {error && (
                    <p className="font-['Poppins',sans-serif] text-xs text-red-400">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 font-['Poppins',sans-serif] font-semibold py-4 rounded-[12px] text-white transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ backgroundImage: purpleGrad }}
                  >
                    <Send size={16} />
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
