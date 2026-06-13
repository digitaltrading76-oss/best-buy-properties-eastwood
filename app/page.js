const IMG = '/images/';

const features = [
  ['36 SQM', 'Efficient 1-bedroom layout'],
  ['1 Bedroom', 'Practical city living space'],
  ['17th Floor', 'Elevated condominium address'],
  ['Semi-Furnished', 'Ready for easier move-in'],
  ['Clean Title', 'Secure ownership document'],
  ['₱3,000,000', 'Competitive Eastwood price point'],
];

const advantages = [
  ['Prime Eastwood Location', 'Located inside one of Quezon City’s established live-work-play townships.', 'prime-eastwood.jpg'],
  ['Rental Income Potential', 'Attractive to professionals, employees, and long-term tenants in the Eastwood area.', 'rental-income.jpg'],
  ['Lifestyle Convenience', 'Walkable access to malls, restaurants, cafes, offices, banks, and daily essentials.', 'lifestyle-convenience.jpg'],
  ['Investor Friendly', 'A practical entry point for a prime condominium investment.', 'investor-friendly.jpg'],
  ['Ready for Use', 'Semi-furnished and ready for occupancy, reducing move-in preparation time.', 'ready-for-use.jpg'],
  ['Strong Address Value', 'Eastwood City remains a recognized business and residential destination.', 'strong-address.jpg'],
];

const access = [
  ['Eastwood Mall', 'Retail, dining, and lifestyle essentials nearby.', 'eastwood-mall.jpg'],
  ['Restaurants & Cafes', 'Dining and cafe options within the township.', 'restaurants-cafes.jpg'],
  ['Business Centers', 'Close to offices and commercial activity.', 'business-centers.jpg'],
  ['Banks & Services', 'Daily banking and service access nearby.', 'banks-services.jpg'],
  ['Medical Access', 'Convenient access to nearby healthcare options.', 'medical-access.jpg'],
  ['Public Transport', 'Multiple commuting and ride-hailing options.', 'public-transport.jpg'],
  ['Major Road Access', 'Connected to key Quezon City routes.', 'major-road.jpg'],
  ['Township Lifestyle', 'Live, work, dine, and relax in one location.', 'township-lifestyle.jpg'],
];

const gallery = [
  ['Living Area', 'sala area view from main door.jpg', 'living-area.jpg'],
  ['Bedroom & Kitchen Access', 'image showing kitchen on the left and 1 bedroom on the right.jpg', 'bedroom-kitchen-view.jpg'],
  ['Main Door View', 'sala view from window showing main door.jpg', 'main-door-view.jpg'],
];

const faqs = [
  ['Is the unit still available?', 'Yes, the unit is available unless marked SOLD.'],
  ['Where is the property located?', 'Excelsior Tower 2, Eastwood City, Quezon City.'],
  ['What is the floor area?', 'The unit has approximately 36 SQM floor area.'],
  ['What floor is the unit located on?', 'The unit is located on the 17th floor.'],
  ['Is the unit furnished?', 'The unit is semi-furnished.'],
  ['What is the title status?', 'Clean title.'],
  ['Is it ready for occupancy?', 'Yes, the unit is ready for occupancy.'],
  ['Can I schedule a viewing?', 'Yes, site viewing may be arranged by appointment.'],
];

export default function Page() {
  return (
    <main>
      <header className="fixed top-0 left-0 right-0 z-40 bg-navy/95 backdrop-blur border-b border-gold/20">
        <div className="container flex items-center justify-between py-4">
          <div className="text-xl font-black text-white tracking-tight"><span className="text-gold">BEST BUY</span> PROPERTIES</div>
          <nav className="desktop-nav flex gap-8 text-white/80 font-bold">
            <a href="#overview">Overview</a><a href="#advantages">Advantages</a><a href="#gallery">Gallery</a><a href="#faq">FAQ</a><a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="luxury-gradient pt-28 pb-20 text-white overflow-hidden">
        <div className="container hero-grid grid grid-cols-[1.05fr_.95fr] gap-10 items-center">
          <div>
            <div className="section-label mb-4">Excelsior Tower 2 • Eastwood City</div>
            <h1 className="heading max-w-3xl">Eastwood City Condo For Sale</h1>
            <p className="mt-6 text-xl leading-8 text-white/82 max-w-2xl">Own a prime 1-bedroom condominium unit in one of Quezon City’s most recognized live-work-play communities.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['36 SQM','1 Bedroom','17th Floor','Semi-Furnished','Clean Title','Ready for Occupancy'].map(x => <span className="badge" key={x}>✓ {x}</span>)}
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <a className="btn btn-gold" href="#contact">Message Now</a>
              <a className="btn btn-outline" href="#gallery">View Photos</a>
              <a className="btn btn-outline" href="#location">View Location</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-gold/20 blur-3xl" />
            <div className="relative rounded-[2rem] overflow-hidden border border-gold/30 shadow-luxury bg-white/5">
              <img className="w-full h-[610px] object-cover hero-img" src={IMG+'living-area.jpg'} alt="Eastwood condo living area" />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5 flex items-end justify-between gap-4">
                <div><div className="text-gold text-xs font-black tracking-[.25em] uppercase">Selling Price</div><div className="text-4xl font-black">₱3,000,000</div></div>
                <div className="hidden sm:block text-right text-white/80">36 SQM • 17th Floor<br/>Ready for Occupancy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="section bg-cream">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto"><div className="section-label">Property Overview</div><h2 className="heading text-navy mt-3">A Practical Eastwood Investment</h2><p className="sub mt-4">A semi-furnished 1-bedroom unit designed for end-users, investors, and buyers looking for an established Quezon City address.</p></div>
          <div className="grid md:grid-cols-3 gap-5 mt-12">
            {features.map(([a,b])=><div key={a} className="rounded-[1.6rem] bg-white border border-gold/25 p-8 shadow-sm"><div className="text-4xl font-black text-gold">{a}</div><p className="mt-3 text-navy/70 font-semibold">{b}</p></div>)}
          </div>
        </div>
      </section>

      <section id="advantages" className="section bg-white">
        <div className="container">
          <div className="text-center"><div className="section-label">Visual Advantages</div><h2 className="heading text-navy mt-3">Why Buy This Property?</h2></div>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {advantages.map(([title,desc,img])=><article key={title} className="photo-card rounded-[1.7rem] bg-navy text-white"><div className="h-64 overflow-hidden"><img src={IMG+img} alt={title} className="w-full h-full object-cover"/></div><div className="p-7"><div className="text-gold text-3xl mb-3">◆</div><h3 className="text-2xl font-black">{title}</h3><p className="mt-3 text-white/75 leading-7">{desc}</p></div></article>)}
          </div>
        </div>
      </section>

      <section id="location" className="section luxury-gradient text-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto"><div className="section-label">Location Advantages</div><h2 className="heading mt-3">Eastwood City Lifestyle Access</h2><p className="mt-5 text-white/75 text-xl leading-8">A recognized Quezon City address with offices, restaurants, malls, banks, services, and transport access nearby.</p></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {access.map(([title,desc,img])=><div key={title} className="photo-card rounded-[1.5rem] bg-white/5"><div className="h-52 overflow-hidden"><img src={IMG+img} alt={title} className="w-full h-full object-cover"/></div><div className="p-5"><h3 className="font-black text-xl">{title}</h3><p className="mt-2 text-white/65 text-sm leading-6">{desc}</p></div></div>)}
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="photo-card rounded-[1.7rem] bg-white/5 overflow-hidden"><img src={IMG+'location-banner.jpg'} className="w-full h-72 object-cover" alt="Prime Eastwood location"/><div className="p-7"><div className="section-label">Location</div><h3 className="text-3xl font-black mt-2">Prime Eastwood Location</h3><p className="text-white/75 mt-3">Live inside a recognized township near business, lifestyle, and daily essentials.</p></div></div>
            <div className="photo-card rounded-[1.7rem] bg-white/5 overflow-hidden"><img src={IMG+'investment-banner.jpg'} className="w-full h-72 object-cover" alt="Rental income potential"/><div className="p-7"><div className="section-label">Investment</div><h3 className="text-3xl font-black mt-2">Rental Income Potential</h3><p className="text-white/75 mt-3">Attractive to professionals, employees, and long-term tenants in Eastwood.</p></div></div>
          </div>
        </div>
      </section>

      <section id="gallery" className="section bg-cream">
        <div className="container">
          <div className="text-center"><div className="section-label">Actual Unit Photos</div><h2 className="heading text-navy mt-3">Property Gallery</h2><p className="sub mt-4">Three actual photos of the unit are shown below. No empty placeholders.</p></div>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {gallery.map(([title,original,img])=><figure key={title} className="photo-card rounded-[1.7rem] bg-white"><div className="h-[420px] overflow-hidden"><img src={IMG+img} alt={title} className="w-full h-full object-cover"/></div><figcaption className="p-6"><h3 className="text-2xl font-black text-navy">{title}</h3><p className="text-navy/60 mt-2">Actual Eastwood condo photo</p></figcaption></figure>)}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid md:grid-cols-3 gap-6">
          {[
            ['Cash Purchase','Preferred option for fast closing and cleaner transaction.'],
            ['Bank Financing','May be considered subject to buyer qualification and bank approval.'],
            ['Flexible Terms','Payment arrangements may be discussed with serious qualified buyers.']
          ].map(([a,b])=><div key={a} className="rounded-[1.7rem] p-8 border border-gold/25 bg-cream"><div className="text-gold text-4xl">●</div><h3 className="text-2xl font-black text-navy mt-4">{a}</h3><p className="sub mt-3">{b}</p></div>)}
        </div>
      </section>

      <section id="faq" className="section bg-cream">
        <div className="container max-w-4xl">
          <div className="text-center"><div className="section-label">Buyer Questions</div><h2 className="heading text-navy mt-3">Frequently Asked Questions</h2></div>
          <div className="mt-10 space-y-4">
            {faqs.map(([q,a])=><details key={q} className="rounded-2xl bg-white border border-gold/20 p-6 group"><summary className="cursor-pointer font-black text-xl text-navy list-none flex justify-between">{q}<span className="text-gold">+</span></summary><p className="sub mt-4">{a}</p></details>)}
          </div>
        </div>
      </section>

      <section id="contact" className="section luxury-gradient text-white">
        <div className="container text-center max-w-4xl">
          <div className="section-label">Schedule Viewing</div>
          <h2 className="heading mt-3">Ready to Own a Condo in Eastwood City?</h2>
          <p className="mt-5 text-white/75 text-xl leading-8">Message us to request complete details, viewing schedule, and payment discussion.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4"><a className="btn btn-gold" href="https://m.me/BestBuyProperties" target="_blank">Message Now</a><a className="btn btn-outline" href="tel:09152294361">Call Now</a><a className="btn btn-outline" href="https://www.google.com/maps/search/Eastwood+City+Quezon+City" target="_blank">View Location</a></div>
        </div>
      </section>

      <footer className="bg-navy py-8 text-center text-white/70 border-t border-gold/20">Best Buy Properties • Eastwood City Condominium For Sale</footer>
      <div className="sticky-mobile"><a className="btn btn-gold" href="https://m.me/BestBuyProperties">Message</a><a className="btn btn-outline luxury-gradient" href="tel:09152294361">Call</a><a className="btn btn-outline luxury-gradient" href="https://www.google.com/maps/search/Eastwood+City+Quezon+City">Location</a></div>
    </main>
  );
}
