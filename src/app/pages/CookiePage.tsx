import { Cookie } from "lucide-react";

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

const cookieTypes = [
  { name: "Essential Cookies", purpose: "Required for the Platform to function. Cannot be disabled.", examples: "Session tokens, authentication state, CSRF protection.", canDisable: false },
  { name: "Analytics Cookies", purpose: "Help us understand how users interact with the Platform so we can improve it.", examples: "Page views, session duration, feature usage.", canDisable: true },
  { name: "Preference Cookies", purpose: "Remember your settings and preferences.", examples: "Language preference, search filters, notification settings.", canDisable: true },
  { name: "Marketing Cookies", purpose: "Used to show relevant advertisements and measure ad campaign effectiveness.", examples: "Ad impressions, click-through rates.", canDisable: true },
];

export function CookiePage() {
  return (
    <div>
      <section className="py-20 px-6 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
          style={{ background: "rgba(86,51,172,0.15)", border: "1px solid rgba(86,51,172,0.3)", color: "#9d4edd", fontFamily: "Poppins, sans-serif" }}
        >
          <Cookie size={12} /> Legal
        </div>
        <h1 className="font-['Poppins',sans-serif] font-bold text-4xl md:text-5xl text-white mb-4">Cookie Policy</h1>
      </section>

      <section className="pb-24 px-6">
        <div
          className="max-w-[800px] mx-auto rounded-2xl p-8 md:p-12"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <LegalSection title="1. What Are Cookies?">
            <p>
              Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work more efficiently, provide analytical data, and deliver personalized experiences.
            </p>
            <p>
              ALANN Enterprises LLC uses cookies and similar technologies (such as local storage and pixel tags) on the ALANN.AE Platform to provide, improve, and secure our services.
            </p>
          </LegalSection>

          <LegalSection title="2. Types of Cookies We Use">
            <div className="flex flex-col gap-4 mt-2">
              {cookieTypes.map(({ name, purpose, examples, canDisable }) => (
                <div
                  key={name}
                  className="rounded-xl p-5"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-['Poppins',sans-serif] font-semibold text-white text-sm">{name}</p>
                    <span
                      className="font-['Poppins',sans-serif] text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: canDisable ? "rgba(86,51,172,0.15)" : "rgba(239,68,68,0.15)",
                        color: canDisable ? "#9d4edd" : "#ef4444",
                        border: `1px solid ${canDisable ? "rgba(86,51,172,0.2)" : "rgba(239,68,68,0.2)"}`,
                      }}
                    >
                      {canDisable ? "Optional" : "Required"}
                    </span>
                  </div>
                  <p className="font-['Poppins',sans-serif] text-xs mb-1">{purpose}</p>
                  <p className="font-['Poppins',sans-serif] text-xs" style={{ color: "#717182" }}><strong className="text-gray-400">Examples:</strong> {examples}</p>
                </div>
              ))}
            </div>
          </LegalSection>

          <LegalSection title="3. Third-Party Cookies">
            <p>Some cookies on ALANN.AE are set by third-party services we use, including:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Analytics providers (e.g., aggregated usage statistics)</li>
              <li>Cloud infrastructure providers for performance optimization</li>
              <li>Security services for fraud prevention</li>
            </ul>
            <p>These third parties have their own privacy policies and cookie practices, which we do not control.</p>
          </LegalSection>

          <LegalSection title="4. Managing Cookies">
            <p>You can control and manage cookies in several ways:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-white">Browser settings:</strong> Most browsers allow you to view, delete, and block cookies. Blocking essential cookies may affect Platform functionality.</li>
              <li><strong className="text-white">Platform settings:</strong> Manage your cookie preferences through the Cookie Preferences panel in your account settings.</li>
              <li><strong className="text-white">Opt-out tools:</strong> Use industry opt-out tools for analytics and advertising cookies where available.</li>
            </ul>
          </LegalSection>

          <LegalSection title="5. Cookie Retention">
            <p>Cookie retention periods vary by type:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-white">Session cookies:</strong> Deleted when you close your browser</li>
              <li><strong className="text-white">Persistent cookies:</strong> Retained for up to 12 months</li>
              <li><strong className="text-white">Analytics cookies:</strong> Retained for up to 26 months</li>
            </ul>
          </LegalSection>

          <LegalSection title="6. Updates to This Policy">
            <p>We may update this Cookie Policy from time to time. We will notify you of significant changes by posting an update notice on the Platform or via email.</p>
          </LegalSection>

          <LegalSection title="7. Contact">
            <p>For cookie-related questions:</p>
            <p><strong className="text-white">ALANN Enterprises LLC</strong></p>
            <p>SHARJAH MEDIA CITY FREEZONE, Sharjah. UAE</p>
          </LegalSection>
        </div>
      </section>
    </div>
  );
}
