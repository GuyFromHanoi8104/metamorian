import { useEffect, useState } from 'react'
import Mark from './components/Mark.jsx'
import AresMark from './components/AresMark.jsx'
import kollabMark from './assets/kollab-mark.jpg'

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'products', label: 'Products' },
  { id: 'about', label: 'About' },
  { id: 'careers', label: 'Careers' },
]

const KOLLAB_URL = 'https://appkollab.com'
const EVATECH_URL = 'https://evatech-engineering.com'

function KollabTile({ className }) {
  return (
    <span className={className ? `product-tile ${className}` : 'product-tile'}>
      <img src={kollabMark} alt="Kollab logo" />
    </span>
  )
}

export default function App() {
  const [view, setView] = useState('home')
  const [salesNoticeOpen, setSalesNoticeOpen] = useState(false)

  const go = (id) => {
    setView(id)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  useEffect(() => {
    document.title =
      view === 'home' ? 'Metamorian' : `${cap(view)} — Metamorian`
  }, [view])

  useEffect(() => {
    if (!salesNoticeOpen) return
    const onKey = (e) => e.key === 'Escape' && setSalesNoticeOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [salesNoticeOpen])

  return (
    <>
      <header className="site-header">
        <div className="site-header__row">
          <button
            className="wordmark"
            onClick={() => go('home')}
            aria-label="Metamorian, home"
          >
            <Mark className="wordmark__icon" decorative />
            <span className="wordmark__text">metamorian</span>
          </button>
          <nav className="nav" aria-label="Primary">
            {NAV.map((item) => (
              <button
                key={item.id}
                className="nav__link"
                aria-current={view === item.id ? 'page' : undefined}
                onClick={() => go(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="shell">
        {view === 'home' && (
          <HomeView onNavigate={go} onContactSales={() => setSalesNoticeOpen(true)} />
        )}
        {view === 'products' && <ProductsView />}
        {view === 'about' && <AboutView />}
        {view === 'careers' && <CareersView />}
      </main>

      <footer className="site-footer">
        <div className="shell">
          <Mark className="site-footer__mark" decorative />
          <span className="site-footer__line">
            © 2026 Metamorian. Kollab is a product of Metamorian.
          </span>
        </div>
      </footer>

      {salesNoticeOpen && (
        <ContactSalesModal onClose={() => setSalesNoticeOpen(false)} />
      )}
    </>
  )
}

function ContactSalesModal({ onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-card"
        role="dialog"
        aria-modal="true"
        aria-label="Contact sales"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="eyebrow">Contact sales</p>
        <p className="modal-card__body">
          Unavailable for now. We&rsquo;ll be in touch soon.
        </p>
        <button className="btn btn--solid" onClick={onClose}>
          Got it
        </button>
      </div>
    </div>
  )
}

function HomeView({ onNavigate, onContactSales }) {
  return (
    <div className="view" id="view-home">
      <section className="hero">
        <Mark className="hero__watermark" decorative />
        <div className="hero__inner">
          <p className="eyebrow hero__eyebrow">Metamorian</p>
          <h1 className="display">We build digital solutions and transformation.</h1>
          <p className="hero__lede">
            Metamorian is a Vietnam-based holding company working in digital
            transformation and technology. Our first product, Kollab, takes
            influencer marketing off manual outreach and onto a marketplace
            where brands find creators by verified follower count.
          </p>
          <div className="hero__actions">
            <button
              className="btn btn--solid"
              onClick={() => onNavigate('products')}
            >
              See our products
            </button>
            <button
              className="btn btn--line"
              onClick={() => onNavigate('about')}
            >
              About us
            </button>
          </div>
        </div>
      </section>

      <section className="block">
        <p className="eyebrow">Our focus</p>
        <div className="prose">
          <p>
            Metamorian works in digital transformation and technology. So far
            that means one product in the market and a second in development.
          </p>
          <p>
            The one in the market is Kollab. It takes the relationship-driven
            work of creator outreach and turns it into search: a brand looks for
            creators and sees follower counts pulled straight from Instagram and
            TikTok, not numbers a creator typed in themselves.
          </p>
          <p>
            The one in development is Ares, bringing data infrastructure to
            remote and disaster-affected regions, starting in Vietnam&rsquo;s
            highlands.
          </p>
        </div>

        <div className="callout-list">
          <div className="callout">
            <KollabTile />
            <span className="callout__text">
              <span className="callout__name">Kollab</span>
              <span className="callout__sub">Our first product, live today.</span>
            </span>
            <button
              className="link-arrow"
              onClick={() => onNavigate('products')}
            >
              View &rarr;
            </button>
          </div>
          <div className="callout">
            <span className="product-tile">
              <AresMark />
            </span>
            <span className="callout__text">
              <span className="callout__name">Ares</span>
              <span className="callout__sub">
                Data infrastructure for remote regions.
              </span>
            </span>
            <span className="callout__soon">Coming soon</span>
          </div>
        </div>
      </section>

      <section className="block">
        <p className="eyebrow">Web design</p>
        <h2 className="display">We also design and build for other teams.</h2>
        <div className="prose">
          <p>
            Outside our own products, Metamorian designs and builds web
            products for other companies. Kollab is our own work, live at
            appkollab.com. Evatech Engineering is next, shipped at
            evatech-engineering.com.
          </p>
        </div>

        <div className="callout-list">
          <div className="callout">
            <KollabTile />
            <span className="callout__text">
              <span className="callout__name">Kollab</span>
              <span className="callout__sub">
                Brand &times; creator marketplace, designed and built end to
                end.
              </span>
            </span>
            <a
              className="link-arrow"
              href={KOLLAB_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              View &rarr;
            </a>
          </div>
          <div className="callout">
            <span className="product-tile product-tile--text" aria-hidden="true">
              E
            </span>
            <span className="callout__text">
              <span className="callout__name">Evatech Engineering</span>
              <span className="callout__sub">
                Shipped at evatech-engineering.com.
              </span>
            </span>
            <a
              className="link-arrow"
              href={EVATECH_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              View &rarr;
            </a>
          </div>
        </div>

        <div className="hero__actions">
          <button className="btn btn--line" onClick={onContactSales}>
            Contact sales
          </button>
        </div>
      </section>
    </div>
  )
}

function ProductsView() {
  return (
    <div className="view" id="view-products">
      <section className="block">
        <p className="eyebrow">Products</p>
        <h2 className="display">What we&rsquo;ve built so far.</h2>

        <div className="product-list">
          <article className="product-card">
            <KollabTile />
            <div>
              <div className="product-card__head">
                <h3>Kollab</h3>
                <span className="product-card__tag">
                  Brand &times; creator marketplace
                </span>
              </div>
              <p>
                A marketplace connecting Vietnamese brands with content
                creators. Every follower count is checked against Instagram and
                TikTok, so a brand knows the reach is real before the first
                message goes out.
              </p>
              <a
                className="product-card__link"
                href={KOLLAB_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                appkollab.com &rarr;
              </a>
            </div>
          </article>

          <article className="product-card">
            <span className="product-tile">
              <AresMark />
            </span>
            <div>
              <div className="product-card__head">
                <h3>Ares</h3>
                <span className="product-card__tag">
                  Remote data infrastructure
                </span>
              </div>
              <p>
                Data infrastructure for places reliable networks never reached.
                Ares starts in Vietnam&rsquo;s remote highlands and
                disaster-affected regions, where moving data in and out is what
                stands between a community being cut off and being able to
                recover, then extends the same coverage to disconnected
                communities elsewhere.
              </p>
              <span className="status-pill">Coming soon</span>
            </div>
          </article>
        </div>

        <p className="more-note">
          Kollab is live today and Ares is in development. More will follow
          across digital transformation and technology.
        </p>
      </section>
    </div>
  )
}

function AboutView() {
  return (
    <div className="view" id="view-about">
      <section className="block">
        <p className="eyebrow">About us</p>
        <h2 className="display">A holding company, one product deep.</h2>
        <div className="prose">
          <p>
            Metamorian is a Vietnam-based holding company working in digital
            transformation and technology. So far that work has taken the shape
            of one product in the market and one more in development.
          </p>
          <p>
            The first is Kollab, built for influencer marketing and talent
            management. It connects brands and creators through a verified
            marketplace instead of manual, relationship-driven outreach.
          </p>
          <p>
            The second is Ares: data infrastructure for remote and
            disaster-affected regions, starting in Vietnam&rsquo;s highlands and
            extending to disconnected communities elsewhere.
          </p>
        </div>
      </section>
    </div>
  )
}

function CareersView() {
  return (
    <div className="view" id="view-careers">
      <section className="block">
        <p className="eyebrow">Careers</p>
        <h2 className="display">Join us.</h2>
        <div className="empty-state">
          <div className="empty-state__title">No open roles right now.</div>
          <div className="empty-state__sub">
            When that changes, this is where they&rsquo;ll be posted.
          </div>
        </div>
      </section>
    </div>
  )
}

function cap(s) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}
