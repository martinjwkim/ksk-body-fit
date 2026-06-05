export default function Location() {
  return (
    <section id="location">
      <div className="container">
        <div className="location-grid">

          <div className="reveal">
            <span className="section-label">오시는 길 · Location</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}>
              오시는 길 / Location
            </h2>
            <div className="gold-divider" />
            <p className="location-address">
              2753 S. Diamond Bar Blvd.<br />
              Suite A<br />
              Diamond Bar, CA 91765
            </p>
            <div className="location-landmark">
              <InfoIcon />
              <span>
                H-Mart 몰 E Plex 옆, Fred Astaire Dance Studio 내<br />
                Inside Fred Astaire Dance Studio, H-Mart Mall next to E Plex
              </span>
            </div>
            <div className="location-hours">
              <strong>수업 시간:</strong><br />
              월~금: 오전 9:00 – 11:00<br />
              토~일: 휴무
            </div>
          </div>

          <div className="map-wrap reveal">
            <iframe
              src="https://maps.google.com/maps?q=2753+S+Diamond+Bar+Blvd+Diamond+Bar+CA+91765&t=&z=15&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Fred Astaire Dance Studio 위치 — 김선경 Body Fit"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

function InfoIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  )
}
