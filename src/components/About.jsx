export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">

          <div className="about-visual reveal">
            <div className="avatar-ring">
              <div className="avatar-inner">
                <AvatarSVG />
              </div>
            </div>
            <div className="certs">
              {/* Update certifications when official credentials are provided */}
              <div className="cert-badge">ZIN — Zumba Instructor Network</div>
              <div className="cert-badge">ACE Certified Group Fitness</div>
              <div className="cert-badge">Balanced Body Pilates</div>
            </div>
          </div>

          <div className="reveal">
            <span className="section-label">Instructor</span>
            <h2 className="instructor-name-en">Kim Sun-kyung</h2>
            <p className="instructor-name-kr">김선경</p>
            <div className="gold-divider" />
            {/* Update bio with actual details when provided */}
            <p className="about-bio">
              With over 12 years of experience in dance fitness and Pilates instruction,
              Kim Sun-kyung brings expertise, passion, and warmth to every class.
              Certified in Zumba, ACE Group Fitness, and Balanced Body Pilates, she specializes
              in combining dynamic movement with effective body conditioning — making fitness fun,
              accessible, and transformative for students of all fitness levels.
            </p>
            <div className="stats-row">
              {[['12+', 'Years Experience'], ['3', 'Certifications'], ['5×', 'Weekly Classes']].map(
                ([num, label]) => (
                  <div key={label}>
                    <div className="stat-number">{num}</div>
                    <div className="stat-label">{label}</div>
                  </div>
                )
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function AvatarSVG() {
  return (
    <svg width="156" height="156" viewBox="0 0 156 156" xmlns="http://www.w3.org/2000/svg">
      <circle cx="78" cy="56" r="30" fill="rgba(201,168,82,0.25)" />
      <circle cx="78" cy="56" r="20" fill="rgba(201,168,82,0.45)" />
      <ellipse cx="78" cy="124" rx="44" ry="34" fill="rgba(201,168,82,0.18)" />
      <ellipse cx="78" cy="116" rx="30" ry="24" fill="rgba(201,168,82,0.32)" />
      <text
        x="78" y="63"
        textAnchor="middle"
        fill="rgba(201,168,82,0.95)"
        fontSize="22"
        fontFamily="Cormorant Garamond, serif"
        fontWeight="700"
      >
        KS
      </text>
    </svg>
  )
}
