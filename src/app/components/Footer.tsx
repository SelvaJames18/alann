import { Link } from "react-router";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Platform: [
    { label: "Home", to: "/" },
    { label: "Features", to: "/features" },
    { label: "Trust & Safety", to: "/trust-safety" },
  ],
  Company: [
    { label: "About Us", to: "/company" },
    { label: "Leadership", to: "/company" },
    { label: "Contact", to: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms of Service", to: "/terms" },
    { label: "Cookie Policy", to: "/cookie" },
  ],
};

export function Footer() {
  return (
    <footer
      className="mt-auto"
      style={{ background: "#08080d", borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <span
              className="font-['Poppins',sans-serif] font-bold text-2xl"
              style={{ backgroundImage: "linear-gradient(90deg, #5633ac, #9d4edd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
            >
              ALANN.AE
            </span>
            <p className="font-['Poppins',sans-serif] text-sm mt-3 leading-relaxed" style={{ color: "#99a1af" }}>
              ALANN Enterprises LLC <br />
              AI-powered classified marketplace for vehicles, electronics, furniture, and services across the UAE.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a href="mailto:Tharun@alann.ae" className="flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: "#99a1af", fontFamily: "Poppins, sans-serif" }}>
                <Mail size={14} />
                Tharun@alann.ae
              </a>

              <a href="tel:+971 505951024" className="flex items-center gap-2 text-sm transition-colors hover:text-white" style={{ color: "#99a1af", fontFamily: "Poppins, sans-serif" }}>
                <Phone size={14} />
                +971 505951024
              </a>
              <span className="flex items-start gap-2 text-sm" style={{ color: "#99a1af", fontFamily: "Poppins, sans-serif" }}>
                <MapPin size={14} className="mt-0.5 shrink-0" />
                SHARJAH MEDIA CITY FREEZONE, Sharjah. UAE
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="font-['Poppins',sans-serif] font-semibold text-sm text-white mb-4">{section}</p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-['Poppins',sans-serif] text-sm transition-colors hover:text-white"
                      style={{ color: "#99a1af" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="flex flex-col gap-1">
            <p className="font-['Poppins',sans-serif] text-sm font-semibold text-white">ALANN Enterprises LLC</p>
            <p className="font-['Poppins',sans-serif] text-xs" style={{ color: "#99a1af" }}>
              Trade License No: 2644250 &nbsp;·&nbsp; SHARJAH MEDIA CITY FREEZONE, Sharjah. UAE
            </p>
          </div>
          <p className="font-['Poppins',sans-serif] text-xs" style={{ color: "#99a1af" }}>
            © 2026 Alann Enterprises LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
