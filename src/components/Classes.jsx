const CLASSES = [
  {
    id: 'dance',
    icon: <MusicIcon />,
    en: 'Diet Dance & Zumba',
    kr: '다이어트 댄스 & 줌바',
    schedule: '월~금  |  오전 9:00 – 10:00',
    descKr: '케이팝 안무, 근력 운동, 스트레칭이 결합된 즐겁고 활기찬 전신 댄스 수업입니다. 다양한 장르의 음악에 맞춰 쉽고 재미있게 운동할 수 있어 모든 체력 수준에 적합합니다.',
    descEn: 'Fun, energetic full-body dance blending K-pop choreography, strength training, and stretching. Perfect for all fitness levels.',
    taglineKr: '"스트레스는 날리고, 체지방은 태운다!"',
    taglineEn: '"Blow away stress, burn body fat!"',
  },
  {
    id: 'pilates',
    icon: <PersonIcon />,
    en: 'Props Pilates',
    kr: '소도구 필라테스',
    schedule: '월~금  |  오전 10:10 – 11:00',
    descKr: '탄력 밴드, 매직 서클, 덤벨, 미니 볼, 폼 롤러 등 다양한 소도구를 활용한 필라테스 수업입니다. 근력 강화, 유연성 향상, 자세 교정, 신체 균형 발달에 효과적입니다.',
    descEn: 'Equipment-based Pilates using resistance bands, magic circles, dumbbells, and foam rollers to build strength, correct posture, and develop body balance.',
    taglineKr: '"무관심했던 내 몸에 집중하는 시간!"',
    taglineEn: '"Time to focus on your body you\'ve been neglecting!"',
  },
]

export default function Classes() {
  return (
    <section id="classes">
      <div className="container">
        <div className="section-header">
          <span className="section-label">수업 안내 · Classes</span>
          <h2 className="section-title">수업 안내 / Our Classes</h2>
          <p className="section-subtitle">월요일부터 금요일까지, 주 5일 수업 — Mon – Fri, 5 days a week</p>
        </div>
        <div className="classes-grid">
          {CLASSES.map((c) => (
            <div key={c.id} className="class-card reveal">
              <div className="class-icon">{c.icon}</div>
              <div className="class-title-en">{c.kr}</div>
              <div className="class-title-kr">{c.en}</div>
              <div className="class-schedule-badge">
                <ClockIcon />
                {c.schedule}
              </div>
              <p className="class-desc">{c.descKr}</p>
              <p className="class-tagline-en" style={{ fontSize: '0.82rem', opacity: 0.65, marginBottom: '0.75rem' }}>{c.descEn}</p>
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
