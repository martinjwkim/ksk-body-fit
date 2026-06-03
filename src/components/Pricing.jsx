const PLANS = [
  {
    type: 'Trial Class',
    desc: 'Try a single class to experience our studio before committing. Perfect for first-timers.',
    featured: false,
  },
  {
    type: 'Monthly Membership',
    desc: 'Unlimited access to all classes, Monday through Friday. Best value for regular attendees.',
    featured: true,
  },
  {
    type: 'Drop-In Class',
    desc: 'Join any single class on a flexible schedule. No commitment required.',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Investment</span>
          <h2 className="section-title">Pricing / 수강료</h2>
          <p className="section-subtitle">Call us for current pricing and availability</p>
        </div>
        <div className="pricing-grid">
          {PLANS.map((p) => (
            <div key={p.type} className={`pricing-card reveal${p.featured ? ' featured' : ''}`}>
              <div className="pricing-type">{p.type}</div>
              <p className="pricing-desc">{p.desc}</p>
              <p className="pricing-amount">Call for Pricing</p>
              <a href="tel:7143510936" className="pricing-cta">
                Call 714-351-0936
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
