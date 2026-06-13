const phone = '09152294361'
const messenger = 'https://m.me/BestBuyProperties'
const map = 'https://www.google.com/maps/search/?api=1&query=Excelsior+Tower+2+Eastwood+City+Quezon+City'

const overview = [
  ['36 SQM', 'Floor Area', 'Efficient layout for personal use or rental.'],
  ['1 Bedroom', 'Unit Type', 'Practical city condo for professionals.'],
  ['17th Floor', 'Level', 'Elevated living inside Eastwood City.'],
  ['Semi-Furnished', 'Condition', 'Ready for easier move-in preparation.'],
  ['Clean Title', 'Ownership', 'Clear documentation for qualified buyers.'],
  ['RFO', 'Occupancy', 'Ready for viewing and occupancy.']
]

const gallery = [
  ['Living Area', '/images/living-area.jpg'],
  ['Bedroom & Kitchen Access', '/images/living-bedroom-kitchen.jpg'],
  ['Main Door View', '/images/living-main-door.jpg']
]

const advantages = [
  ['Prime Eastwood Location', 'Located inside one of Quezon City’s most established live-work-play townships.', '/images/graphics/prime-eastwood-location.svg'],
  ['Rental Income Potential', 'Attractive to professionals, employees, and long-term tenants in the Eastwood area.', '/images/graphics/rental-income-potential.svg'],
  ['Lifestyle Convenience', 'Walkable access to malls, restaurants, cafes, offices, banks, and daily essentials.', '/images/graphics/lifestyle-convenience.svg'],
  ['Investor Friendly', 'A practical entry price point for a prime condominium investment.', '/images/graphics/investor-friendly.svg'],
  ['Ready for Use', 'Semi-furnished and ready for occupancy, reducing move-in preparation time.', '/images/graphics/ready-for-use.svg'],
  ['Strong Address Value', 'Eastwood City remains a recognized business and residential destination.', '/images/graphics/strong-address-value.svg']
]

const locationCards = [
  ['Eastwood Mall', '/images/graphics/mall.svg'],
  ['Restaurants & Cafes', '/images/graphics/restaurants.svg'],
  ['Business Centers', '/images/graphics/business.svg'],
  ['Banks & Services', '/images/graphics/banks.svg'],
  ['Medical Access', '/images/graphics/medical.svg'],
  ['Public Transport', '/images/graphics/transport.svg'],
  ['Major Road Access', '/images/graphics/roads.svg'],
  ['Township Lifestyle', '/images/graphics/township.svg']
]

const faqs = [
  ['Is the unit still available?', 'Yes, the unit is available unless marked SOLD.'],
  ['What is the floor area?', 'The condominium unit has a floor area of 36 SQM.'],
  ['What floor is the unit located on?', 'The unit is located on the 17th floor of Excelsior Tower 2.'],
  ['Is the title clean?', 'Yes, the property has a clean title.'],
  ['Is the unit furnished?', 'The unit is semi-furnished.'],
  ['Can I schedule a viewing?', 'Yes. Viewing can be arranged by appointment.'],
  ['Is bank financing accepted?', 'Bank financing may be discussed subject to buyer qualification and bank approval.'],
  ['What are nearby establishments?', 'Eastwood Mall, offices, restaurants, cafes, banks, and transport access are nearby.']
]

function CTA({ href, children, variant = 'gold' }) {
  const cls = variant === 'gold'
    ? 'bg-gold text-navy shadow-gold hover:-translate-y-1'
    : 'border border-white/25 text-white hover:bg-white hover:text-navy'
  return <a href={href} target={href.startsWith('http') ? '_blank' : '_self'} className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-extrabold tracking-wide transition ${cls}`}>{children}</a>
}

function SectionTitle({ eyebrow, title, sub, light = false }) {
  return <div className="mx-auto mb-10 max-w-3xl text-center">
    <p className="text-gold text-xs font-extrabold uppercase tracking-[.35em]">{eyebrow}</p>
    <h2 className={`mt-3 text-3xl md:text-5xl font-black leading-tight ${light ? 'text-white' : 'text-navy'}`}>{title}</h2>
    {sub && <p className={`mt-4 text-base md:text-lg ${light ? 'text-white/70' : 'text-slate-600'}`}>{sub}</p>}
  </div>
}

export default function Page() {
  return <main>
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-navy/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 text-white">
        <div className="text-lg font-black tracking-wide"><span className="text-gold">BEST BUY</span> PROPERTIES</div>
        <div className="hidden gap-8 text-sm font-semibold text-white/75 md:flex">
          <a href="#overview">Overview</a><a href="#advantages">Advantages</a><a href="#gallery">Gallery</a><a href="#faq">FAQ</a><a href="#contact">Contact</a>
        </div>
      </div>
    </nav>

    <section className="hero-clean relative overflow-hidden pt-24 text-white">
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_20%,#d4af37,transparent_26%),radial-gradient(circle_at_80%_10%,#ffffff,transparent_18%)]"></div>
      <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <p className="mb-5 text-sm font-black uppercase tracking-[.32em] text-gold">Excelsior Tower 2 • Eastwood City</p>
          <h1 className="max-w-3xl text-4xl font-black leading-[1.02] md:text-6xl">Eastwood City Condo for Sale</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">Own a prime 1-bedroom condominium unit inside one of Quezon City’s most recognized live-work-play communities.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            {['36 SQM', '1 Bedroom', '17th Floor', 'Semi-Furnished', 'Clean Title', 'Ready for Occupancy'].map((x) => <span key={x} className="rounded-full border border-gold/30 bg-white/8 px-4 py-2 text-sm font-bold">✓ {x}</span>)}
          </div>
          <div className="mt-8 flex flex-wrap gap-4"><CTA href={messenger}>MESSAGE NOW</CTA><CTA href="#contact" variant="outline">SCHEDULE VIEWING</CTA><CTA href={map} variant="outline">VIEW LOCATION</CTA></div>
        </div>

        <div className="hero-photo-panel">
          <div className="photo-frame">
            <img src="/images/living-area.jpg" alt="Eastwood condo living area" className="h-[430px] w-full rounded-[2rem] object-cover md:h-[520px]" />
            <div className="absolute bottom-5 left-5 rounded-2xl border border-gold/35 bg-navy/92 p-5 text-white shadow-2xl backdrop-blur">
              <p className="text-xs font-black uppercase tracking-widest text-gold">Selling Price</p>
              <p className="text-3xl font-black">₱3,000,000</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="overview" className="section bg-cream">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle eyebrow="Overview" title="Compact City Living With Strong Location Value" sub="A 36 SQM 1-bedroom condominium unit designed for practical city living, rental use, and long-term ownership." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {overview.map(([value, label, desc]) => <div key={label} className="premium-card p-7">
            <p className="text-3xl font-black text-gold">{value}</p><h3 className="mt-2 text-xl font-black text-navy">{label}</h3><p className="mt-3 text-slate-600">{desc}</p>
          </div>)}
        </div>
      </div>
    </section>

    <section id="advantages" className="section bg-white">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle eyebrow="Why Buy This Property" title="Visual Advantages for Buyers and Investors" sub="Every advantage is now presented with premium visual graphics, not empty placeholders or text-only cards." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map(([t, d, img]) => <div key={t} className="image-adv-card group">
            <img src={img} alt={t} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
            <div className="p-6"><h3>{t}</h3><p>{d}</p></div>
          </div>)}
        </div>
        <div className="mt-10 grid gap-7 lg:grid-cols-2">
          <div className="wide-feature"><img src="/images/graphics/prime-eastwood-location.svg" alt="Prime Eastwood location graphic"/><div><p>LOCATION</p><h3>Prime Eastwood Location</h3><span>Live inside a recognized township near business, lifestyle, and daily essentials.</span><a href={map} target="_blank">VIEW LOCATION</a></div></div>
          <div className="wide-feature"><img src="/images/graphics/rental-income-potential.svg" alt="Rental income graphic"/><div><p>INVESTMENT</p><h3>Rental Income Potential</h3><span>Attractive to professionals, employees, and long-term tenants in Eastwood.</span><a href="#contact">REQUEST DETAILS</a></div></div>
        </div>
      </div>
    </section>

    <section id="gallery" className="section bg-cream">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle eyebrow="Photo Gallery" title="Actual Unit Photos" sub="Three actual photos of the unit, presented cleanly with no empty placeholders." />
        <div className="grid gap-6 md:grid-cols-3">
          {gallery.map(([title, img]) => <a href={img} target="_blank" key={title} className="gallery-card group">
            <img src={img} alt={title} className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" />
            <div className="p-6"><p className="text-xs font-black uppercase tracking-[.25em] text-gold">Actual Photo</p><h3 className="mt-2 text-xl font-black text-navy">{title}</h3></div>
          </a>)}
        </div>
      </div>
    </section>

    <section className="section bg-navy text-white">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle eyebrow="Location Advantages" title="Eastwood City Lifestyle Access" light sub="A recognized Quezon City address with offices, restaurants, malls, banks, services, and transport access nearby." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {locationCards.map(([x, img]) => <div key={x} className="location-image-card group"><img src={img} alt={x} className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"/><div><h3>{x}</h3></div></div>)}
        </div>
      </div>
    </section>

    <section id="faq" className="section bg-white">
      <div className="mx-auto max-w-4xl px-5">
        <SectionTitle eyebrow="FAQ" title="Frequently Asked Questions" />
        <div className="space-y-4">
          {faqs.map(([q, a]) => <details key={q} className="faq-card"><summary>{q}</summary><p>{a}</p></details>)}
        </div>
      </div>
    </section>

    <section id="contact" className="section bg-navy text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2">
        <div><p className="text-sm font-black uppercase tracking-[.35em] text-gold">Schedule Viewing</p><h2 className="mt-4 text-4xl font-black md:text-6xl">Ready to Own a Condo in Eastwood City?</h2><p className="mt-5 text-lg text-white/70">Request complete details, viewing schedule, or payment options.</p><div className="mt-8 flex flex-wrap gap-4"><CTA href={messenger}>MESSAGE NOW</CTA><CTA href={`tel:${phone}`} variant="outline">CALL NOW</CTA><CTA href={map} variant="outline">VIEW LOCATION</CTA></div></div>
        <form className="rounded-[2rem] bg-white p-7 text-navy shadow-2xl"><h3 className="mb-5 text-2xl font-black">Request Property Details</h3><input className="field" placeholder="Full Name"/><input className="field" placeholder="Mobile Number"/><input className="field" placeholder="Email Address"/><textarea className="field min-h-[120px]" placeholder="Message or preferred viewing schedule"></textarea><button className="mt-3 w-full rounded-xl bg-gold py-4 font-black text-navy">SEND INQUIRY</button><p className="mt-3 text-xs text-slate-500">Static form ready for email or Google Sheets integration.</p></form>
      </div>
    </section>

    <div className="fixed bottom-4 left-4 right-4 z-50 flex gap-2 md:hidden"><a href={messenger} className="flex-1 rounded-full bg-gold py-3 text-center font-black text-navy shadow-xl">Message</a><a href={`tel:${phone}`} className="flex-1 rounded-full bg-white py-3 text-center font-black text-navy shadow-xl">Call</a></div>
  </main>
}
