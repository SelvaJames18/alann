import { Shield } from "lucide-react";

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-['Poppins',sans-serif] font-bold text-xl text-white mb-4">{title}</h2>
      <div className="font-['Poppins',sans-serif] text-sm leading-relaxed space-y-3" style={{ color: "#99a1af" }}>
        {children}
      </div>
    </div>
  );
}

export function PrivacyPage() {
  return (
    <div>
      <section className="py-20 px-6 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
          style={{ background: "rgba(86,51,172,0.15)", border: "1px solid rgba(86,51,172,0.3)", color: "#9d4edd", fontFamily: "Poppins, sans-serif" }}
        >
          <Shield size={12} /> Legal
        </div>
        <h1 className="font-['Poppins',sans-serif] font-bold text-4xl md:text-5xl text-white mb-4">Privacy Policy</h1>
        <p className="font-['Poppins',sans-serif] text-sm" style={{ color: "#99a1af" }}>
          Last updated: January 1, 2025 &nbsp;·&nbsp; ALANN Enterprises LLC
        </p>
      </section>

      <section className="pb-24 px-6">
        <div
          className="max-w-[800px] mx-auto rounded-2xl p-8 md:p-12"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <LegalSection title="1. Introduction">
            <p>
              ALANN Enterprises LLC ("ALANN", "we", "us", or "our"), a company registered in the UAE Free Zone, operates the ALANN.AE platform ("Platform"). This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our Platform.
            </p>
            <p>
              By accessing or using ALANN.AE, you agree to the collection and use of information in accordance with this policy. We take your privacy seriously and comply with applicable UAE data protection laws and international best practices.
            </p>
          </LegalSection>

          <LegalSection title="2. Information We Collect">
            <p><strong className="text-white">Account Information:</strong> When you register, we collect your name, email address, phone number, and optionally your Emirates ID number for seller verification.</p>
            <p><strong className="text-white">Listing Information:</strong> Photos, descriptions, pricing, and category data you provide when creating listings.</p>
            <p><strong className="text-white">Transaction Data:</strong> Records of inquiries, messages exchanged between buyers and sellers, and platform activity.</p>
            <p><strong className="text-white">Device & Usage Data:</strong> IP address, browser type, device identifiers, pages visited, and time spent on the Platform.</p>
            <p><strong className="text-white">Location Data:</strong> Approximate location based on IP address or GPS (with your permission) to show relevant local listings.</p>
          </LegalSection>

          <LegalSection title="3. How We Use Your Information">
            <p>We use your personal information to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide, maintain, and improve the ALANN.AE Platform</li>
              <li>Verify seller identity through Emirates ID validation</li>
              <li>Detect and prevent fraud, abuse, and policy violations</li>
              <li>Facilitate communication between buyers and sellers</li>
              <li>Send service notifications and platform updates</li>
              <li>Generate AI-powered listing content from your uploaded photos</li>
              <li>Comply with applicable UAE laws and regulations</li>
            </ul>
          </LegalSection>

          <LegalSection title="4. Information Sharing">
            <p>We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-white">Other Platform Users:</strong> Your public profile and listings are visible to other users as intended by the Platform's functionality.</li>
              <li><strong className="text-white">Service Providers:</strong> Trusted third-party providers who assist us in operating the Platform, subject to confidentiality agreements.</li>
              <li><strong className="text-white">Legal Authorities:</strong> UAE government or law enforcement when required by applicable UAE law.</li>
            </ul>
          </LegalSection>

          <LegalSection title="5. Data Security">
            <p>We implement industry-standard security measures including:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>TLS/SSL encryption for all data transmission</li>
              <li>End-to-end encryption for buyer-seller messaging</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls limiting employee data access to necessary functions</li>
            </ul>
            <p>While we employ robust security measures, no internet transmission is 100% secure. We encourage you to use strong passwords and protect your account credentials.</p>
          </LegalSection>

          <LegalSection title="6. Data Retention">
            <p>We retain your personal data for as long as your account is active or as necessary to provide services. Upon account deletion, we delete your data within 30 days except where retention is required by UAE law (typically 5 years for financial records).</p>
          </LegalSection>

          <LegalSection title="7. Your Rights">
            <p>Under applicable UAE law, you have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access, correct, or delete your personal information</li>
              <li>Withdraw consent for optional data processing</li>
              <li>Request data portability where technically feasible</li>
              <li>Lodge a complaint with the UAE competent authority</li>
            </ul>
          </LegalSection>

          <LegalSection title="8. Cookies">
            <p>We use cookies and similar tracking technologies to enhance your experience. Please see our <a href="/cookie" className="text-purple-400 hover:text-purple-300">Cookie Policy</a> for details.</p>
          </LegalSection>

          <LegalSection title="9. Contact Us">
            <p>For privacy-related questions or requests, contact:</p>
            <p><strong className="text-white">ALANN Enterprises LLC</strong></p>
            <p>SHARJAH MEDIA CITY FREEZONE, Sharjah. UAE</p>
          </LegalSection>
        </div>
      </section>
    </div>
  );
}
