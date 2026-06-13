import { FileText } from "lucide-react";

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

export function TermsPage() {
  return (
    <div>
      <section className="py-20 px-6 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
          style={{ background: "rgba(86,51,172,0.15)", border: "1px solid rgba(86,51,172,0.3)", color: "#9d4edd", fontFamily: "Poppins, sans-serif" }}
        >
          <FileText size={12} /> Legal
        </div>
        <h1 className="font-['Poppins',sans-serif] font-bold text-4xl md:text-5xl text-white mb-4">Terms of Service</h1>
        <p className="font-['Poppins',sans-serif] text-sm" style={{ color: "#99a1af" }}>
          Last updated: January 1, 2025 &nbsp;·&nbsp; ALANN Technologies FZ-LLC
        </p>
      </section>

      <section className="pb-24 px-6">
        <div
          className="max-w-[800px] mx-auto rounded-2xl p-8 md:p-12"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <LegalSection title="1. Acceptance of Terms">
            <p>
              These Terms of Service ("Terms") govern your access to and use of the ALANN.AE platform ("Platform") operated by ALANN Technologies FZ-LLC, a company registered in the UAE Free Zone, Dubai, United Arab Emirates.
            </p>
            <p>
              By creating an account or using any part of the Platform, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, you must not use the Platform.
            </p>
          </LegalSection>

          <LegalSection title="2. Eligibility">
            <p>To use ALANN.AE, you must:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Be at least 18 years of age</li>
              <li>Be a resident of or legally authorized to operate in the UAE</li>
              <li>Provide accurate registration information</li>
              <li>Maintain the security of your account credentials</li>
            </ul>
          </LegalSection>

          <LegalSection title="3. User Accounts">
            <p>You are responsible for all activity that occurs under your account. You must:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide accurate and complete information during registration</li>
              <li>Complete Emirates ID verification to post listings as a seller</li>
              <li>Notify us immediately of any unauthorized account access</li>
              <li>Not share your account credentials with any third party</li>
            </ul>
          </LegalSection>

          <LegalSection title="4. Listings & Content">
            <p><strong className="text-white">Accurate Listings:</strong> All listings must accurately describe the item or service offered, including condition, price, and any material defects.</p>
            <p><strong className="text-white">Prohibited Content:</strong> You may not list items that are illegal in the UAE, counterfeit, stolen, or otherwise violate applicable UAE law.</p>
            <p><strong className="text-white">Intellectual Property:</strong> You retain ownership of content you post but grant ALANN a non-exclusive license to display, process, and promote your listings on the Platform.</p>
            <p><strong className="text-white">AI Processing:</strong> By uploading photos, you authorize ALANN's AI systems to analyze and generate listing descriptions. These descriptions are subject to your review and approval before publication.</p>
          </LegalSection>

          <LegalSection title="5. Transactions">
            <p>ALANN.AE is a marketplace platform and is not a party to transactions between buyers and sellers. We do not:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Guarantee the quality, safety, or legality of listed items</li>
              <li>Process payments between buyers and sellers</li>
              <li>Verify item descriptions beyond our AI validation systems</li>
            </ul>
            <p>All transactions are solely between the buyer and seller. We encourage users to meet in safe public locations for in-person exchanges.</p>
          </LegalSection>

          <LegalSection title="6. Platform Rules">
            <p>Users must not:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Post false, misleading, or fraudulent listings</li>
              <li>Harass, threaten, or abuse other users</li>
              <li>Attempt to circumvent our verification or safety systems</li>
              <li>Use automated bots or scrapers on the Platform</li>
              <li>Post spam, duplicate listings, or irrelevant content</li>
              <li>Violate any applicable UAE law or regulation</li>
            </ul>
          </LegalSection>

          <LegalSection title="7. Termination">
            <p>ALANN reserves the right to suspend or terminate any account that violates these Terms, with or without notice. Users may delete their accounts at any time by contacting support.</p>
          </LegalSection>

          <LegalSection title="8. Limitation of Liability">
            <p>To the maximum extent permitted by UAE law, ALANN Technologies FZ-LLC shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Platform.</p>
          </LegalSection>

          <LegalSection title="9. Governing Law">
            <p>These Terms are governed by the laws of the United Arab Emirates. Any disputes arising from these Terms shall be subject to the jurisdiction of the competent courts of Dubai, UAE.</p>
          </LegalSection>

          <LegalSection title="10. Contact">
            <p>For questions regarding these Terms:</p>
            <p><strong className="text-white">ALANN Technologies FZ-LLC</strong></p>
            <p>Dubai, United Arab Emirates</p>
            <p>Email: <a href="mailto:legal@alann.ae" className="text-purple-400 hover:text-purple-300">legal@alann.ae</a></p>
          </LegalSection>
        </div>
      </section>
    </div>
  );
}
