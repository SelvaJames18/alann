import { useMemo, useState } from 'react'
import { Badge, Button, Card, Container, Icon } from './components/ui'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const nav = useMemo(
    () => [
      { label: 'About', href: '#about' },
      { label: 'Features', href: '#about' },
      { label: 'Contact', href: '#footer' },
    ],
    [],
  )

  return (
    <div className="min-h-screen text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <Container className="py-3">
          <div className="flex items-center justify-between gap-4">
            <a href="#" className="inline-flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#5733AC]/10 ring-1 ring-[#5733AC]/15">
                <Icon name="sparkles" className="h-5 w-5 text-[#5733AC]" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-tight text-slate-900">
                  ALANN.AE
                </div>
                <div className="text-[11px] text-slate-500">Selling Platform</div>
              </div>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
                >
                  {item.label}
                </a>
              ))}
              <Button href="#get-started" variant="primary">
                Get Started
              </Button>
            </nav>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl bg-white px-2.5 py-2 ring-1 ring-slate-200 shadow-sm md:hidden"
              aria-label="Open menu"
              onClick={() => setMenuOpen((s) => !s)}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {menuOpen ? (
            <div className="mt-3 rounded-2xl bg-white p-3 ring-1 ring-slate-200 shadow-sm md:hidden">
              <div className="grid gap-1">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <Button href="#get-started" variant="primary" className="w-full">
                    Get Started
                  </Button>
                  <Button href="#about" variant="secondary" className="w-full">
                    Explore
                  </Button>
                </div>
              </div>
            </div>
          ) : null}
        </Container>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <Container className="pb-16 pt-14 sm:pt-10">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Badge>
                <Icon name="sparkles" className="text-[#5733AC]" />
                AI-powered classifieds for the UAE
              </Badge>

              <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Find the right vehicle faster with AI you can trust.
              </h1>
              <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
                Browse verified listings, compare confidently, and connect with trusted sellers.
                Built for the UAE with a premium, clutter-free experience.
              </p>

              <div id="get-started" className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="#get-started" variant="primary" className="px-5 py-3">
                  Get Started
                </Button>
                <Button href="#about" variant="secondary" className="px-5 py-3">
                  Explore
                </Button>
                <div className="inline-flex items-center gap-2 text-sm text-slate-500">
                  <Icon name="shield" className="text-[#5733AC]" />
                  Verification-first marketplace
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-white p-4 ring-1 ring-slate-200 shadow-sm">
                <div className="grid gap-3 md:grid-cols-[1fr_180px_140px] md:items-center">
                  <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-3 ring-1 ring-slate-200">
                    <Icon name="search" className="text-slate-500" />
                    <input
                      className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                      placeholder="Search make, model, or keyword (e.g., Patrol, Land Cruiser)"
                      aria-label="Search vehicles"
                      disabled
                    />
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-3 ring-1 ring-slate-200">
                    <span className="text-sm text-slate-600">Location</span>
                    <span className="text-sm font-semibold text-slate-900">UAE</span>
                  </div>
                  <Button className="w-full py-3" variant="primary">
                    Search
                  </Button>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['SUV', 'Sedan', 'Electric', 'Under AED 50K', 'GCC Specs'].map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-[#5733AC]/10 px-3 py-1 text-xs font-medium text-[#5733AC] ring-1 ring-[#5733AC]/15"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  { t: 'Verified listings', d: 'Trust cues everywhere' },
                  { t: 'AI recommendations', d: 'Relevant matches' },
                  { t: 'Fast comparisons', d: 'Make better decisions' },
                ].map((item) => (
                  <Card
                    key={item.t}
                    className="group bg-transparent p-4 text-center shadow-none transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="text-sm font-semibold text-slate-900">{item.t}</div>
                    <div className="mt-1 text-xs text-slate-500">{item.d}</div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-[32px] bg-[radial-gradient(900px_420px_at_20%_10%,rgba(87,51,172,0.25),transparent_65%)] blur-2xl" />
              <Card className="overflow-hidden">
                <div className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-700">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      Vehicle listings
                    </div>
                    <span className="rounded-full bg-[#5733AC]/10 px-3 py-1 text-xs font-semibold text-[#5733AC]">
                      AI Verified
                    </span>
                  </div>
                </div>
                <div className="grid gap-3 p-5">
                  {[
                    { model: 'Toyota Land Cruiser', price: 'AED 179,000', tag: 'Verified Dealer' },
                    { model: 'Nissan Patrol', price: 'AED 162,000', tag: 'Verified Owner' },
                    { model: 'BMW X5', price: 'AED 148,500', tag: 'AI Price Insight' },
                  ].map((car) => (
                    <div
                      key={car.model}
                      className="flex items-center justify-between rounded-2xl bg-white p-4 ring-1 ring-slate-200 transition hover:bg-slate-50"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <Icon name="car" className="text-[#5733AC]" />
                          <div className="truncate text-sm font-semibold text-slate-900">
                            {car.model}
                          </div>
                        </div>
                        <div className="mt-1 text-xs text-slate-500">{car.tag}</div>
                      </div>
                      <div className="text-sm font-semibold text-slate-900">{car.price}</div>
                    </div>
                  ))}

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                        <Icon name="target" className="text-[#5733AC]" />
                        Smart matching
                      </div>
                      <div className="mt-2 text-xs text-slate-500">
                        Personalized recommendations based on intent.
                      </div>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                        <Icon name="bolt" className="text-[#5733AC]" />
                        Faster listings
                      </div>
                      <div className="mt-2 text-xs text-slate-500">
                        AI suggestions that make creating listings effortless.
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {[
                      { t: 'Dubai', d: 'High activity' },
                      { t: 'Abu Dhabi', d: 'Trusted dealers' },
                      { t: 'Sharjah', d: 'Great value' },
                    ].map((x) => (
                      <div
                        key={x.t}
                        className="rounded-2xl bg-white p-4 ring-1 ring-slate-200 transition hover:bg-slate-50"
                      >
                        <div className="text-xs font-semibold text-slate-900">{x.t}</div>
                        <div className="mt-1 text-xs text-slate-500">{x.d}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-14 border-t border-slate-200/70 bg-slate-50/70 py-16">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <div className="text-xs font-semibold tracking-[0.22em] text-[#5733AC]">
                ABOUT ALANN
              </div>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                A premium, AI-powered marketplace designed to simplify vehicle classifieds.
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-slate-600">
                ALANN helps buyers and sellers move faster with clean listings, verification cues,
                and intelligent recommendations—so decisions feel confident, not exhausting.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  'Clean, consistent listing structure',
                  'Trust indicators across every touchpoint',
                  'Modern UX built for mobile first',
                ].map((t) => (
                  <div key={t} className="flex items-center justify-center gap-3 text-center sm:justify-start sm:text-left">
                    <div className="grid h-8 w-8 place-items-center rounded-xl">
                      <Icon name="check" className="text-[#5733AC]" />
                    </div>
                    <div className="text-sm text-slate-700">{t}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: 'magic',
                  t: 'AI Listing Assistant',
                  d: 'Create listings quickly with intelligent suggestions.',
                },
                { icon: 'shield', t: 'Verification', d: 'Trust-first signals for safer deals.' },
                { icon: 'target', t: 'Smart Matching', d: 'Personalized recommendations for you.' },
                { icon: 'search', t: 'Advanced Search', d: 'Powerful filters with a clean UI.' },
              ].map((f) => (
                <Card
                  key={f.t}
                  className="group p-5 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#5733AC]/10 ring-1 ring-[#5733AC]/15">
                      <Icon name={f.icon as any} className="h-5 w-5 text-[#5733AC]" />
                    </div>
                    <div className="text-sm font-semibold text-slate-900">{f.t}</div>
                  </div>
                  <div className="mt-3 text-sm leading-relaxed text-slate-600">{f.d}</div>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <div className="text-xs font-semibold tracking-[0.22em] text-[#5733AC]">WHAT WE DO</div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: 'clipboard',
                  t: 'Seller Posts Ad',
                  d: 'Sellers can quickly publish a verified vehicle ad with all key details.',
                },
                {
                  icon: 'car',
                  t: 'Buyer Books Test Drive',
                  d: 'Buyers shortlist vehicles and request a test drive before deciding.',
                },
                {
                  icon: 'handshake',
                  t: 'Deal With Confidence',
                  d: 'Both sides connect with trust indicators and move to a secure close.',
                },
              ].map((item) => (
                <Card
                  key={item.t}
                  className="group p-5 transition duration-200 hover:-translate-y-0.5 hover:bg-[#5733AC] hover:shadow-[0_14px_34px_rgba(87,51,172,0.32)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#5733AC]/10 ring-1 ring-[#5733AC]/15 transition group-hover:bg-white/15 group-hover:ring-white/25">
                      <Icon
                        name={item.icon as any}
                        className="h-5 w-5 text-[#5733AC] transition group-hover:text-white"
                      />
                    </div>
                    <div className="text-sm font-semibold text-slate-900 transition group-hover:text-white">
                      {item.t}
                    </div>
                  </div>
                  <div className="mt-3 text-sm leading-relaxed text-slate-600 transition group-hover:text-white/90">
                    {item.d}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer id="footer" className="border-t border-slate-200/70 bg-slate-50 py-12">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <div className="inline-flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#5733AC]/10 ring-1 ring-[#5733AC]/15">
                  <Icon name="sparkles" className="h-5 w-5 text-[#5733AC]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">ALANN.AE</div>
                  <div className="text-xs text-slate-500">AI-powered marketplace</div>
                </div>
              </div>
              <div className="mt-3 text-sm text-slate-600">
                Premium classifieds experience for the UAE—built with trust and AI.
              </div>
            </div>

            <div className="grid gap-2 text-sm">
              <div className="text-xs font-semibold tracking-[0.22em] text-[#5733AC]">
                QUICK LINKS
              </div>
              <a href="#about" className="text-slate-600 hover:text-slate-900">
                About
              </a>
              <a href="#get-started" className="text-slate-600 hover:text-slate-900">
                Get Started
              </a>
              <a href="#footer" className="text-slate-600 hover:text-slate-900">
                Contact
              </a>
            </div>

            <div className="grid gap-2 text-sm">
              <div className="text-xs font-semibold tracking-[0.22em] text-[#5733AC]">SOCIAL</div>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'LinkedIn', icon: 'linkedin' },
                  { label: 'Instagram', icon: 'instagram' },
                  { label: 'Facebook', icon: 'facebook' },
                  { label: 'X', icon: 'x' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-700 ring-1 ring-slate-200 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md hover:text-[#5733AC]"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <Icon name={social.icon as any} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white p-5 ring-1 ring-slate-200 shadow-sm">
              <div className="text-xs font-semibold tracking-[0.22em] text-[#5733AC]">
                PARTNERSHIPS
              </div>
              <div className="mt-2 text-sm text-slate-600">
                Dealers, investors, and partners—let’s build the future together.
              </div>
              <Button href="#get-started" variant="primary" className="mt-4 w-full">
                Contact Us
              </Button>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200/70 pt-6 text-xs text-slate-500 sm:flex-row">
            <div>© {new Date().getFullYear()} ALANN.AE. All rights reserved.</div>
            <div className="text-slate-400">Modern, responsive, startup-style UI.</div>
          </div>
        </Container>
      </footer>
    </div>
  )
}

export default App
