const CLASSES = [
  {
    id: 'dance',
    icon: <MusicIcon />,
    en: 'Diet Dance & Zumba',
    kr: '다이어트 댄스 & 줌바',
    schedule: 'Mon – Fri  |  9:00 – 10:00 AM',
    desc: 'A fun, energetic class blending easy full-body dance movements with K-pop choreography, strength training, and stretching — all set to a variety of music genres. Perfect for all fitness levels.',
    taglineKr: '"스트레스는 날리고, 체지방은 태운다!"',
    taglineEn: '"Blow away stress, burn body fat!"',
  },
  {
    id: 'pilates',
    icon: <PersonIcon />,
    en: 'Props Pilates',
    kr: '소도구 필라테스',
    schedule: 'Mon – Fri  |  10:10 – 11:00 AM',
    desc: 'Equipment-based Pilates using resistance bands, magic circles, dumbbells, mini balls, and foam rollers to build strength, improve flexibility, correct posture, and develop body balance.',
    taglineKr: '"무관심했던 내 몸에 집중하는 시간!"',
    taglineEn: '"Time to focus on your body you\'ve been neglecting!"',
  },
]

export default function Classes() {
  return (
    <section id="classes">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">Our Classes / 수업 안내</h2>
          <p className="section-subtitle">Mon – Fri, 5 days a week — 월요일부터 금요일까지</p>
        </div>
        <div className="classes-grid">
          {CLASSES.map((c) => (
            <div key={c.id} className="class-card reveal">
              <div className="class-icon">{c.icon}</div>
              <div className="class-title-en">{c.en}</div>
              <div className="class-title-kr">{c.kr}</div>
              <div className="class-schedule-badge">
                <ClockIcon />
                {c.schedule}
              </div>
              <p className="class-desc">{c.desc}</p>
              <p className="class-tagline-kr">{c.taglineKr}</p>
              <p className="class-tagline-en">{c.taglineEn}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MusicIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )
}

function PersonIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M20 21a8 8 0 1 0-16 0" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
