export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-hex" />

      <div className="hero-content">
        <p className="hero-eyebrow">Fred Astaire Dance Studio — Diamond Bar, CA</p>
        <h1 className="hero-title">
          김선경<br /><em>Body Fit</em>
        </h1>
        <p className="hero-tagline-kr">지금 상담하시고 건강한 변화를 시작하세요</p>
        <p className="hero-tagline-en">Start your healthy transformation today</p>
        <a href="tel:7143510936" className="hero-cta">
          <PhoneIcon />
          전화 상담: 714-351-0936
        </a>
      </div>
    </section>
  )
}

function PhoneIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.48 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6.07 6.07l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
