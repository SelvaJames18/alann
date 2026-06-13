import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Features", to: "/features" },
  { label: "Company", to: "/company" },
  { label: "Trust & Safety", to: "/trust-safety" },
  { label: "Contact", to: "/contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "rgba(10,10,15,0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <span
            className="font-['Poppins',sans-serif] font-bold text-2xl"
            style={{ backgroundImage: "linear-gradient(90deg, #5633ac, #9d4edd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
          >
            ALANN.AE
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="font-['Poppins',sans-serif] text-[15px] transition-colors duration-200"
              style={{ color: location.pathname === link.to ? "#ffffff" : "#99a1af" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="font-['Poppins',sans-serif] text-sm px-4 py-2 rounded-lg border transition-colors duration-200"
            style={{ borderColor: "rgba(255,255,255,0.15)", color: "#d1d5dc" }}
          >
            Contact Us
          </Link>
          <Link
            to="/"
            className="font-['Poppins',sans-serif] text-sm px-5 py-2 rounded-[10px] text-white transition-opacity duration-200 hover:opacity-90"
            style={{ backgroundImage: "linear-gradient(90deg, #5633ac, #9d4edd)" }}
          >
            Start Selling
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: "rgba(10,10,15,0.97)", borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setOpen(false)}
              className="font-['Poppins',sans-serif] text-base py-2"
              style={{ color: location.pathname === link.to ? "#ffffff" : "#99a1af" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="font-['Poppins',sans-serif] text-sm px-5 py-3 rounded-[10px] text-white text-center mt-2"
            style={{ backgroundImage: "linear-gradient(90deg, #5633ac, #9d4edd)" }}
          >
            Start Selling
          </Link>
        </div>
      )}
    </nav>
  );
}
