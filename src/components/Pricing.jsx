const PLANS = [
  {
    type: '체험 수업',
    typeEn: 'Trial Class',
    desc: '처음 오시는 분들을 위한 체험 수업입니다. 등록 전에 미리 경험해 보세요.',
    descEn: 'Try a single class before committing. Perfect for first-timers.',
    featured: false,
  },
  {
    type: '월 정액권',
    typeEn: 'Monthly Membership',
    desc: '월요일~금요일 모든 수업 무제한 수강권입니다. 꾸준히 다니시는 분들께 최적의 선택입니다.',
    descEn: 'Unlimited access to all classes, Monday through Friday.',
    featured: true,
  },
  {
    type: '1회 이용권',
    typeEn: 'Drop-In Class',
    desc: '원하시는 날에 자유롭게 참여하는 1회 수업권입니다. 부담 없이 이용하세요.',
    descEn: 'Join any single class on a flexible schedule. No commitment required.',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="container">
        <div className="section-header">
          <span className="section-label">수강료 · Pricing</span>
          <h2 className="section-title">수강료 / Pricing</h2>
          <p className="section-subtitle">전화로 현재 수강료와 등록 가능 여부를 확인하세요 — Call for current pricing and availability</p>
        </div>
        <div className="pricing-grid">
          {PLANS.map((p) => (
            <div key={p.type} className={`pricing-card reveal${p.featured ? ' featured' : ''}`}>
              <div className="pricing-type">{p.type}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '0.6rem', fontStyle: 'italic' }}>{p.typeEn}</div>
              <p className="pricing-desc">{p.desc}</p>
              <p style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '1rem', fontStyle: 'italic' }}>{p.descEn}</p>
              <p className="pricing-amount">전화 문의</p>
              <a href="tel:7143510936" className="pricing-cta">
                전화: 714-351-0936
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
